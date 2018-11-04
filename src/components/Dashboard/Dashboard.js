import React, { Component } from 'react'
import DashTop from '../DashTop/DashTop';
import './dashboard.scss';
import axios from 'axios';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
import {dateSorter} from '../../react_utils'


class Dashboard extends Component {
  constructor() {
    super() 
    this.state = {
      workout: []
    }
    this.refresh = this.refresh.bind(this);
  }


  componentDidMount() {
    axios.get('/api/workouts/getAll/1').then(res => {
      // console.log('----------BANG!!!!----------', );
      dateSorter(res.data)
      // console.log(res.data)
      this.setState({
        workout: res.data
      })
    })
  }

  refresh() {
    this.componentDidMount();
  }
  render() {
    const {workout} =  this.state
    // console.log(this.state.products)
     const mappedWorkout =  workout.map((workout,i) => {
       return <WorkoutCard refresh={this.refresh} key={i} workout={workout}/>
     })

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

        {mappedWorkout}

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
