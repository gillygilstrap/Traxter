import React, { Component } from 'react'
import DashTop from '../DashTop/DashTop'

class Search extends Component {
    constructor() {
        super()
        this.state ={
            hiddenWorkoutsArray: [],
            displayWorkouts: []
        }
    }
    // componentWillMount() {

    // }

    handleNameInputChange = (e) => {
        console.log('i got hit')
    }

  render() {
    return (
      <div className="dashboard-main">
        <div className="dash-fixed-header">
        <DashTop profileStateToTrue={this.handleProfileClicked}/>

        <div className="dashboard-btns-box">
            <button onClick={this.handleAddClicked} className="dashboard-add-btn">Add Workout</button>
            <button className="dashboard-search-btn">Search Workouts</button>
        </div>

        </div>
        <div className="clear-fix"></div>
        <h2 className="performance-feed">Search Workouts</h2>

        <div className="name-select-box">
        <h3>Workout Name:</h3>
            <select onChange={this.handleNameInputChange} name="name" >
                    <option value={bp}>Bench Press</option>
                    
            </select>
        </div>

        
        
        
        
        
    </div>
    )
  }
}


export default Search;



// <select onChange={this.handleWeightsTypeChange}>
//                             <option value={bp}>Bench Press</option>
//                             <option value={ip}>Incline Press</option>
//                             <option value={sp}>Shoulder Press</option>
//                             <option value="Squat">Squat</option>
//                             <option value={dl}>Deatlift</option>
//                             <option value={pu}>Push-Ups</option>
//                             <option value={pul}>Pull-Ups</option>
//                             <option value={bor}>Bent Over Row</option>
//                             <option value="Curl">Curl</option>
//                             <option value={cr}>Calf Raise</option>
//                             <option value="Lunge">Lunge</option>
//                         </select>