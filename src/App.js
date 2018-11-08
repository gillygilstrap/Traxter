import React, { Component } from 'react';
import './reset.css';
import './scss/App.scss';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { connect } from 'react-redux';
import { currentUserToState } from './ducks/reducer';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  

  handleRegisterClick = (userObj) => {
    console.log("handle register click",userObj)
    this.props.currentUserToState(userObj[0])
    this.setState({
      loggedIn: true
    })
    console.log("handle register click",userObj)
    
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
const mapStateToProps = (state) => {
  const { currentUser } = state;
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {currentUserToState})(App);

