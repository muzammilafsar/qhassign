import React from 'react';
import './App.scss';
import Login from './components/Login';
import { Switch, Route  , BrowserRouter } from "react-router-dom";
import ImageListing from './components/ImageListing';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import Authorization from './components/Authorization';
class RouteHandler extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid App">
        <PrivateRoute exact path="/images" component={ImageListing} />
        <Route exact path="/token" component={Authorization} />
        <Route exact path="/" component={Login} />
        {/* <Login /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default RouteHandler;
