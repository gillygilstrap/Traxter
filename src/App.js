import React, { Component } from 'react';
import './reset.css';
import './scss/App.scss';
import Login from './components/Login/Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }
   
  render() {
    // const {loggedIn} = this.state
    // return (
    //   <div>
    // {loggedIn? {routes}: <Login/>}
    // </div>
    // )

    return (
      <div className="app">
        <Login />
      </div>
    )
  }
}

export default App;

