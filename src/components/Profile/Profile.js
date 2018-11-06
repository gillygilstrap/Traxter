import React, { Component } from 'react';
import DashTop from '../DashTop/DashTop';
import './profile.scss'


 class Profile extends Component {
  render() {
    return (

      <div className="profile-main">
        <div className="dash-fixed-header">
              <DashTop addStateChange={this.handleAddStateToFalse}/>

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
            <p className="username">gillygilstrap</p>
          </div>

          <div className=" profile-box profile-password-box">
            <h3>Password:</h3>
            <p className="password">*************</p>
          </div>

          <div className=" profile-box profile-email-box">
            <h3>Email:</h3>
            <p className="email">oldguy@aol.com</p>
          </div>

          <div className="profile-box profile-weight-box">
          <h3>Current Weight:</h3>
          <input type="text" className="weight"/>
          </div>

          <div className="profile-box profile-fat-box">
          <h3>Current Body Fat %:</h3>
          <input type="text" className="fat"/>
          </div>

          <div className="profile-box profile-weight-box">
          <h3>Current Lean Body Mass:</h3>
          <p className="lean-body-mass">148.75lbs</p>
          </div>
       </div>

       <div className="profile-button-div">
          <button onClick={() => this.props.profileStateToFalse()}className="profile-button">Save Changes</button>
       </div>

      </div>
    )
  }
}

export default Profile;
