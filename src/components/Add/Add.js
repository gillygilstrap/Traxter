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
            <h2 className="performance-feed">Add a Workout</h2>

            <div className="workout-btns">
                <button className="new-workout">New Workout</button>
                <button className="my-templates">My Templates</button>
            </div>

            <div className="workout-type">
                <h3 className="type">Type:</h3>
                <button className="cardio">Cardio</button>
                <button className="weights">Weights</button>
            </div>

            <div className="cardio-activities">
                    <button className="run">Run</button>
                    <button className="swim">Swim</button>
                    <button className="cycle">Cycle</button>
            </div>

            <div className="cardio-values">
                <div className="type-value">   
                    <div className="distance">
                    <h3 className="type">Distance:</h3>
                    <input type="text"/>
                    </div>     
                </div>

                <div className="type-value">   
                    <div className="time">
                    <h3 className="type">Time:</h3>
                    <input type="text"/>
                    </div>     
                </div>
            </div>
            <div className="add-workout-button-div">
                <button className="add-workout-item">Add to Workout</button>
            </div>
        </div>
            
        

    )
  }
}

export default Add;
