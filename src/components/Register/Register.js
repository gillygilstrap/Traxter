import React, { Component } from 'react'
import './register.scss';
import axios from 'axios';

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

  handleRegisterClicked = () => {
    const {usernameInput, passwordInput, emailInput} = this.state
    if (!usernameInput.length || !passwordInput.length || !emailInput.length) {
      alert('All Fields Must Be Entered')
    } else {
      axios.post('/api/register', {username: usernameInput, password: passwordInput, email: emailInput}).then(res => {
        if (res.data.message === "Username is unavailable") {
          alert('"Username is unavailable"')
          this.setState({
            usernameInput: '',
            passwordInput: ''
          })
        }
        else if (res.data.message === "Email Address is Already in Use") {
              alert("Email Address is Already in Use")
        } else {
          this.props.loginFunc(res.data)
        }
      })
    }
    
  }

 
  
  render() {
    const { usernameInput, passwordInput} = this.state
    return (
      <div className="register-main">
        <div className="register-container">
        <h1>Tra<span className="big-x">X</span>ter</h1>
        <h2>Performance Fitness Tracker</h2>
        <h3>New Account</h3>

        <p className="input-header">Enter a Username</p>
        <input onChange={(e) => this.handleInputChange('usernameInput', e.target.value)} value={usernameInput} type="text" className="register-username-input" placeholder="Username"/>

        <p className="input-header">Enter a Password</p>
        <input onChange={(e) => this.handleInputChange('passwordInput', e.target.value)} value={passwordInput} type="password" className="register-password-input" placeholder="Password"/>

        <p className="input-header">Enter Your Email</p>
        <input onChange={(e) => this.handleInputChange('emailInput', e.target.value)} type="email" className="register-password-input" placeholder="Email"/>

        
        {/* // Temporary removal
        <p className="register-theme">Pick A Color Theme</p>
        <div className="theme-btns">
        <button className="light-btn">Light</button>
        <button className="dark-btn">Dark</button>
        </div> */}
        
        {/* <button onClick={() => this.props.loginFunc()}className="register-button">Register</button> */}
        <button onClick={this.handleRegisterClicked} className="register-button">Register</button>
        <button onClick={() => this.props.registerFunc()} className="register-button register-login-btn">Back To Login</button>
        </div>
      </div>
    )
  }
}

export default Register;
