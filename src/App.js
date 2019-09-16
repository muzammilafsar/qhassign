import React from 'react';
import './App.scss';
import Login from './components/Login';
import { Switch, Route  , Redirect } from "react-router-dom";
import ImageListing from './components/ImageListing';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import Authorization from './components/Authorization';
import { getToken } from './services';
import Navbar from './components/Navbar';
import PrivateRoute from './PrivateRoute';
import SavedImages from './components/SavedImages';
class App extends React.Component {
  state = {
    redirect: false,
    user: null
  }
  logout = () => {
    this.setState({user: null});
    localStorage.removeItem("authStatus")
  }
  login = (data) => {
    // if(!this.state.user) {
    //   this.setState({user: data});
    // }
  }
  componentDidMount() {
    let authStatus = localStorage.getItem("authStatus");
    if( authStatus ) {
      authStatus = JSON.parse(authStatus);
      this.setState({user: authStatus.user});
    }
    let code = this.props.location.search;
    if(code) {
      code = code.slice(1);
      code = qs.parse(code);
      getToken(code.code).then(val => {
        localStorage.setItem("auth", JSON.stringify(val));
        console.log(val);
      });
      this.props.history.replace("/");
    } else if (localStorage.getItem("auth")) {

    } 
    else {
      this.setState({redirect: true});
    }
  }
  render() {
    return (
        <div className="container-fluid App">
          {
            this.state.redirect? <Authorization /> : ''
          }
        {
          this.state.user ? <Navbar logout={this.logout} /> :''
        }
        <Route exact path="/" render={() => <Redirect to={"/images"} />}  />
        <Route exact path="/saved" render={() => <SavedImages user={this.state.user} />}  />
        <Route exact path="/images" render={() => <ImageListing user={this.state.user} />}/>
        <Route exact path="/token" component={Authorization} />
        <Route exact path="/login" render={() => <Login user={this.state.user} />} />
        {/* <Login /> */}
        </div>
    );
  }
}

export default withRouter(App);
