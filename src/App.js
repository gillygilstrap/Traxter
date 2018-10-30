import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }
   
  render() {
    const {loggedIn} = this.state
    return (
      <div>
    {loggedIn? {routes}: <Login/>}
    </div>
    )
  }
}

export default App;
