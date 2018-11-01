import React, { Component } from 'react';
import './reset.css';
import './scss/App.scss';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import AddEdit from './components/AddEdit/AddEdit';
import Profile from './components/Profile/Profile';


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
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Dashboard /> */}
        {/* <AddEdit /> */}
        <Profile />
      </div>
    )
  }
}

export default App;

