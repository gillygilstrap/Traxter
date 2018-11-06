import React, { Component } from 'react'
import './login.scss'
import {Link, Route } from 'react-router-dom';
import Register from '../Register/Register'


 class Login extends Component {
   constructor() {
     super() 
     this.state = {
      registerClicked: false
     }
   }

   handleRegisterClick = () => {
     this.setState({
       registerClicked: true
     })
   }
  render() {

    if (!this.state.registerClicked) {

      return (
      <div className="login-main">
        <div className="login-container">
          <i className="fas fa-running"></i>
          <h1>Tra<span className="big-x">X</span>ter</h1>
          <h2>Performance Fitness Tracker</h2>
          <input type="text" className="login-username-input" placeholder="Username"/>
          <input type="password" className="login-password-input" placeholder="Password"/>
          <button onClick={() => this.props.loginFunc()} className="login-button">Login</button>
          <Link to="/login/register"><button id="register-Button" onClick={this.handleRegisterClick} className="register-button">Register</button></Link>
        </div>
      </div>
      )
    } else {
      return (
        <Route path="/login/register" 
        render={(props) => <Register  {...props} loginFunc={this.props.loginFunc} />}
        />
      )
    }
  }
}

export default Login;


