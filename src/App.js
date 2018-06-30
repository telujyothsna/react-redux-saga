import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/home';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home/>
      </React.Fragment>
    );
  }
}

export default App;
