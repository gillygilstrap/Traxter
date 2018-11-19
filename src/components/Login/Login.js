import React, { Component } from 'react'
import './login.scss'
import {Link, Route } from 'react-router-dom';
import Register from '../Register/Register'
import axios from 'axios';



 class Login extends Component {
   constructor() {
     super() 
     this.state = {
      registerClicked: false,
      loginUserInput: '',
      loginPasswordInput: ''
     }
   }

  //  componentDidUpdate(prevProps, prevState) {
  //   if(this.state !== prevState) {
  //     this.setState({
  //       registerClicked: true
  //     }) 
  //   }
  //  }

   handleInputChange = (key, value) => {
    this.setState({
        [key]: value,
        useDate: value
    })
  }

  handleLoginClick = () => {
    // console.log("I got hit")
    const username = this.state.loginUserInput;
    const password = this.state.loginPasswordInput;
    axios.post('/api/login', {username: username, password: password}).then( res => {
      // console.log(res.data)
      if (res.data.message === 'Username Does Not Exist in Database') {
        alert(res.data.message)
      }else  if (res.data.message === 'Username and Password do not match'){
        alert(res.data.message)
      } else {
        this.props.loginFunc(res.data)
      }

    }).catch(err => console.log(err))
  }


   handleRegisterClick = () => {
     this.setState({
       registerClicked: true
     })
   }

   handleRegisterToFalse = () => {
     this.setState({
       registerClicked: false
     })
   }

   
  render() {
    // console.log(this.state.registerClicked)
    // console.log(window.location.pathname)
    if (!this.state.registerClicked) {

      return (
      <div className="login-main">
        <div className="login-container">
          <i className="fas fa-running"></i>
          <h1>Tra<span className="big-x">X</span>ter</h1>
          <h2>Performance Fitness Tracker</h2>
          <input onChange={(e) => this.handleInputChange('loginUserInput', e.target.value)} type="text" className="login-username-input" placeholder="Username"/>
          <input onChange={(e) => this.handleInputChange('loginPasswordInput', e.target.value)} type="password" className="login-password-input" placeholder="Password"/>
          <button onClick={() => this.handleLoginClick()} className="login-button">Login</button>
          {/* <Link to="/login/register"><button id="register-Button" onClick={this.handleRegisterClick} className="register-button">Register</button></Link> */}
         <button id="register-Button" onClick={this.handleRegisterClick} className="register-button">Register</button>
        </div>
      </div>
      )
    } else {
      return (
        <Register  registerFunc={this.handleRegisterToFalse} loginFunc={this.props.loginFunc} />
      /* //  <Route path="/login/register" 
      //   render={(props) => <Register  {...props} loginFunc={this.props.loginFunc} />}
      //   /> */
      )
    }
  }
}

export default Login;


 //  if(!this.state.registerClicked) {
  //    this.render() {
  //     return (
  //           <div className="login-main">
  //             <div className="login-container">
  //               <i className="fas fa-running"></i>
  //               <h1>Tra<span className="big-x">X</span>ter</h1>
  //               <h2>Performance Fitness Tracker</h2>
  //               <input onChange={(e) => this.handleInputChange('loginUserInput', e.target.value)} type="text" className="login-username-input" placeholder="Username"/>
  //               <input onChange={(e) => this.handleInputChange('loginPasswordInput', e.target.value)} type="password" className="login-password-input" placeholder="Password"/>
  //               <button onClick={() => this.handleLoginClick()} className="login-button">Login</button>
  //               <Link to="/login/register"><button id="register-Button" onClick={this.handleRegisterClick} className="register-button">Register</button></Link>
  //             </div>
  //           </div>
  //           )
  //    }
  //  } else {
  //    render() {
  //     return (
  //             <Route path="/login/register" 
  //             render={(props) => <Register  {...props} loginFunc={this.props.loginFunc} />}
  //             />
  //           )
  //    }
  //  }