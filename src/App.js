import React from 'react';
import './App.scss';
import Login from './components/Login';
import { Switch, Route  , BrowserRouter } from "react-router-dom";
import ImageListing from './components/ImageListing';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container-fluid App">
      <Route exact path="/" component={ImageListing} />
      <Route exact path="/login" component={Login} />
       {/* <Login /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
