import React, { Component } from 'react'
import './add.scss'
import DashTop from '../DashTop/DashTop'

class Add extends Component {
  render() {
    return (

        <div className="add-main">
           <div className="dash-fixed-header">
          <DashTop />

          <div className="dashboard-btns-box">
            <button className="dashboard-add-btn">Add Workout</button>
            <button className="dashboard-search-btn">Search Workouts</button>
          </div>

        </div>
            <div className="clear-fix"></div>
            <h2 className="performance-feed">Performance Feed</h2>

        </div>
            
        

    )
  }
}

export default Add;
