import React, { Component } from 'react';
import DashTop from '../DashTop/DashTop';
import './profile.scss'
import { connect } from "react-redux"; 
import axios from 'axios';
import { currentUserToState } from '../../ducks/reducer';


 class Profile extends Component {
   constructor(props) {
     super(props)
     this.state = {
       currentWeight: '',
       currentBodyFat: '',
       leanBodyMass: ''
     }
   }
   componentWillMount() {
    const {weight, fat} = this.props.currentUser
    this.setState({
      currentWeight: weight,
      currentBodyFat: fat
    })
    this.calcLeanBodyMass()
   }

   componentDidMount() {
     const {weight, fat} = this.props.currentUser
     this.setState({
       currentWeight: weight,
       currentBodyFat: fat
     })
     this.calcLeanBodyMass()

     
   }
  //  componentDidUpdate(prevProps) {
  //    if (this.props !== prevProps  ) {
  //     this.calcLeanBodyMass()
  //    }
  //  }
 
  calcLeanBodyMass = () => {
    const weight = this.state.currentWeight;
    // console.log('weight', weight)
    const fatPercentage = 1 - (this.state.currentBodyFat/ 100)
    // console.log('fatPercentage', fatPercentage)
    const calc = weight * fatPercentage
    // console.log('calc', calc)
    const leanBodyMass = calc
    console.log('leanBodyMass', leanBodyMass)
    // const leanBodyMass = 27
    this.setState({
      leanBodyMass: leanBodyMass
    })

    
  } 

  setMyState = () => {
    this.setState({
      currentWeight: this.state.currentWeight,
      currentBodyFat: this.state.currentBodyFat,
      leanBodyMass: this.state.leanBodyMass
    })
  }
  handleWeightChange(key, value) {
    const weight = value;
    // console.log('weight', weight)
    const fatPercentage = 1 - (this.state.currentBodyFat/ 100)
    // console.log('fatPercentage', fatPercentage)
    const calc = weight * fatPercentage

      this.setState({
          [key]: value,
          useDate: value,
          leanBodyMass: calc
      })
      
    
  }
  handleFatChange(key, value) {
    const weight = this.state.currentWeight;
    // console.log('weight', weight)
    const fatPercentage = 1 - (value/ 100)
    // console.log('fatPercentage', fatPercentage)
    const calc = weight * fatPercentage

      this.setState({
          [key]: value,
          useDate: value,
          leanBodyMass: calc
      })
   
    
  }

  updateProfileInfo = () => {
    const { id } = this.props.currentUser
    const { currentWeight, currentBodyFat } = this.state
    axios.put(`/api/users/${id}`, {weight: currentWeight, fat: currentBodyFat}).then(res => {
      // console.log('it worked! Yay', res.data)
      this.props.currentUserToState(res.data)
    })
  }

  render() {
    const { username, email } = this.props.currentUser
    const leanBodyMass = this.state.leanBodyMass
    return (

      <div className="profile-main">
        <div className="dash-fixed-header">
              <DashTop profileStateToTrue={this.props.profileStateToTrue} addStateChange={this.handleAddStateToFalse}/>

          <div className="dashboard-btns-box">
              <button onClick={() => this.props.addStateToTrue()}className="dashboard-add-btn">Add Workout</button>
              <button className="dashboard-search-btn">Search Workouts</button>
          </div>

        </div>

        <div className="clear-fix"></div>
        <h2 className="performance-feed">My Profile</h2>

        <div className="profile-box-main">

          <div className=" profile-box profile-username-box">
            <h3>Username:</h3>
            <p className="username">{username}</p>
          </div>

          <div className=" profile-box profile-password-box">
            <h3>Password:</h3>
            <p className="password">*************</p>
          </div>

          <div className=" profile-box profile-email-box">
            <h3>Email:</h3>
            <p className="email">{email}</p>
          </div>

          <div className="profile-box profile-weight-box">
          <h3>Current Weight:</h3>
          <input onChange={(e) => this.handleWeightChange('currentWeight', e.target.value)} value={this.state.currentWeight} type="text" className="weight"/>
          </div>

          <div className="profile-box profile-fat-box">
          <h3>Current Body Fat %:</h3>
          <input onChange={(e) => this.handleFatChange('currentBodyFat', e.target.value)} value={this.state.currentBodyFat} type="text" className="fat"/>
          </div>

          <div className="profile-box profile-weight-box">
          <h3>Current Lean Body Mass:</h3>
          <p className="lean-body-mass">{leanBodyMass}</p>
          </div>
       </div>

       <div className="profile-button-div">
          <button onClick={() => {
            this.props.profileStateToFalse()
            this.updateProfileInfo()
            }}className="profile-button">Save Changes</button>
       </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {currentUserToState})(Profile);
