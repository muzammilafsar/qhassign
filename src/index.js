import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { users } from './services';
import { BrowserRouter } from "react-router-dom";
import '../node_modules/jquery/dist/jquery';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
if(!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}
export const CLIENT_ID = "Your Client ID here";
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
