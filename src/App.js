import React, { Component } from 'react';
import './reset.css';
import './scss/App.scss';
import routes from '../src/routes'
import {Route} from 'react-router-dom'
import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
// import AddEdit from './components/AddEdit/AddEdit';
// import Profile from './components/Profile/Profile';


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  handleRegisterClick = () => {
    this.setState({
      loggedIn: true
    })
    // this.toDashboard()
  }

  toDashboard = () => {
    console.log('i got hit')
    window.location = '/dashboard'
  }

   
  render() {
   
    return (
      <div className="app">
      {!this.state.loggedIn?
        <Login loginFunc={this.handleRegisterClick}/>
        :

        // console.log("wtf")
        // <Route path="/dashboard">
        <Dashboard />
      }
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Dashboard /> */}
        {/* <AddEdit /> */}
        {/* <Profile /> */}
      </div>
    )
  }
}

export default App;

