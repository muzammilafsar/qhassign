import React, {useState} from 'react';
import "./Login.scss";
import LoginForm from './loginForm';
import { InitiateLogin } from '../../services';
import { withRouter } from "react-router-dom";

class Login extends React.PureComponent {
    state = {
        loading: false,
        showError: false,
        errorMsg: ""
    }
    componentDidMount() {
      if(this.props.user) {
        this.props.history.push('/images');
      }
    }
    attemptLogin = (data) => {
        this.setState({loading: true, showError: false, errorMsg: ''});
        InitiateLogin(data).then(val => {
            localStorage.setItem("authStatus", JSON.stringify({
              user: val.username,
              loggedIn: true
            }));
            this.props.login({
              user: val.username,
              loggedIn: true
            });
        }).catch(err => {
            this.setState({showError: true, errorMsg: err.message});            
        }).finally(() => {
            this.setState({loading: false});
        });
    }
    render() {
        return (
          <div className="login-container">
            <div className="row">
              <div className="col-md-4 login-box" >
                <LoginForm 
                onSubmit={this.attemptLogin}
                showError={this.state.showError}
                errorMsg={this.state.errorMsg}
                loading={this.state.loading}
                />
              </div>
            </div>
          </div>
        );
      }
}

export default withRouter(Login);
