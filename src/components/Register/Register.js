import React, { Component } from 'react'
import './register.scss'

 class Register extends Component {
   constructor() {
     super() 
     this.state ={
       usernameInput: '',
       passwordInput: '',
       emailInput: ''
     }
   }

   handleInputChange = (key, value) => {
    this.setState({
        [key]: value,
        useDate: value
    })
  }

  handleRegisterClicked

  
  render() {
    console.log(this.state.usernameInput)
    return (
      <div className="register-main">
        <div className="register-container">
        <h1>Tra<span className="big-x">X</span>ter</h1>
        <h2>Performance Fitness Tracker</h2>
        <h3>New Account</h3>

        <p className="input-header">Enter a Username</p>
        <input onChange={(e) => this.handleInputChange('usernameInput', e.target.value)} type="text" className="register-username-input" placeholder="Username"/>

        <p className="input-header">Enter a Password</p>
        <input onChange={(e) => this.handleInputChange('passwordInput', e.target.value)} type="password" className="register-password-input" placeholder="Password"/>

        <p className="input-header">Enter Your Email</p>
        <input onChange={(e) => this.handleInputChange('emailInput', e.target.value)} type="email" className="register-password-input" placeholder="Email"/>

        

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
