import React, { Component } from 'react'
import './login.scss'

 class Login extends Component {
  render() {
    return (
      <div className="login-main">
        <div className="login-container">
        <i className="fas fa-running"></i>
        <h1>Tra<span className="big-x">X</span>ter</h1>
        <h2>Performance Fitness Tracker</h2>
        <input type="text" className="login-username-input" placeholder="Username"/>
        <input type="password" className="login-password-input" placeholder="Password"/>
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
        </div>
      </div>
    )
  }
}

export default Login;
