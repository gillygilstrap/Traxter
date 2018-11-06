import React, { Component } from 'react'
import './register.scss'

 class Register extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="register-main">
        <div className="register-container">
        <h1>Tra<span className="big-x">X</span>ter</h1>
        <h2>Performance Fitness Tracker</h2>
        <h3>New Account</h3>

        <p className="input-header">Enter a Username</p>
        <input type="text" className="register-username-input" placeholder="Username"/>

        <p className="input-header">Enter a Password</p>
        <input type="password" className="register-password-input" placeholder="Password"/>

        <p className="input-header">Enter Your Email</p>
        <input type="email" className="register-password-input" placeholder="Email"/>

        

        <p className="register-theme">Pick A Color Theme</p>
        <div className="theme-btns">
        <button className="light-btn">Light</button>
        <button className="dark-btn">Dark</button>
        </div>
        
        <button onClick={() => this.props.loginFunc()}className="register-button">Register</button>
        </div>
      </div>
    )
  }
}

export default Register;
