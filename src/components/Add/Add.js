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

            

            <div className="mid-box">
                
                <div className="mid-box-child child-1">
                    <h3 className="date">Date:</h3>
                    <button className="today">Today</button>
                    <button className="future">Future</button>
                </div>

                <div className="mid-box-child child-2">
                    <h3 className="type">Type:</h3>
                    <button className="cardio">Cardio</button>
                    <button className="weights">Weights</button>
                </div>
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
            <div className="notes-input-box">
            <h3 className="type">Notes:</h3>
            <input type="text" />
            </div>
            <div className="add-workout-button-div">
                <button className="add-workout-item">Add to Workout</button>
            </div>

            <div className="workout-content-container">
                <div className="title-row">
                    <h4 className="workout-name">Squat Heathen</h4>
                    <h4 className="workout-date">10/31/2018</h4>
                    
                </div>

                <div className="workout-content-item">
                    <div className="item-name">&diams; Run</div>
                    <div className="item-x item-1">1 Mile</div>
                    <div className="item-x item-2">5:59</div>
                    <div className="item-x itme-3"></div>
                </div>

                <div className="workout-content-item">
                    <div className="item-name">&diams; Squat</div>
                    <div className="item-x item-1">250lbs</div>
                    <div className="item-x item-2">6 reps</div>
                    <div className="item-x itme-3">3 sets</div>
                </div>

                <div className="workout-content-item">
                    <div className="item-name">&diams; Front Squat</div>
                    <div className="item-x item-1">225lbs</div>
                    <div className="item-x item-2">5 reps</div>
                    <div className="item-x itme-3">3 sets</div>
                </div>

                <div className="notes-content-box">
                    <div className="notes-header">Notes:</div>
                    <div className="notes-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
            <div className="workout-button-box">
                    <button className="send-to-feed">Send To Feed</button>
                    <button className="save-as-template">Save As Template</button>
                    <button className="clear">Clear</button>
                    <button className="delete">Delete</button>
                </div>
        </div>
            
        

    )
  }
}

export default Add;



