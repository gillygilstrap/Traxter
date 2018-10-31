import React, { Component } from 'react'
import DashTop from '../DashTop/DashTop';
import './dashboard.scss';


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-main">
        <div className="dash-fixed-header">
          <DashTop />

          <div className="dashboard-btns-box">
            <button className="dashboard-add-btn">Add Workout</button>
            <button className="dashboard-search-btn">Search Workouts</button>
          </div>

        </div>
        <div className="clear-fix"></div>
        <h2 className="performance-feed">Performance Feed</h2>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        
        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        
      </div>
    )
  }
}

export default Dashboard;
