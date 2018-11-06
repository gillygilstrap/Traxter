import React, { Component } from 'react'
import DashTop from '../DashTop/DashTop';
import './dashboard.scss';
import axios from 'axios';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
// import AddEdit from '../AddEdit/AddEdit'
import Edit from '../Edit/Edit'
import Add from '../Add/Add'
import Profile from '../Profile/Profile'
import {dateSorter} from '../../react_utils'
import { connect } from 'react-redux' 


class Dashboard extends Component {
  constructor() {
    super() 
    this.state = {
      workout: [],
      editClicked: false,
      addClicked: false,
      profileClicked: false
    }
    this.refresh = this.refresh.bind(this);
  }

  getAllWorkouts = () => {
    axios.get('/api/workouts/getAll/1').then(res => {
      // console.log(res.data);
      dateSorter(res.data)
      // console.log(res.data)
      this.setState({
        workout: res.data
      })
    })
  }

  componentDidMount() {
    this.getAllWorkouts()
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps && this.props.editClicked) {
      this.handleEditClicked()
    }
  }
  handleProfileToFalse = () => {
    this.setState({
      profileClicked: false
    })
  }
  handleEditStateToFalse = () => {
    this.setState({
      editClicked: false
    })
    this.getAllWorkouts();
  }
  handleAddStateToFalse = () => {
    this.setState({
      addClicked: false
    })
    this.getAllWorkouts();
  }
  handleProfileClicked = () => {
    this.setState({
      profileClicked: true,
      editClicked: false,
      addClicked: false
    })
  }

  handleAddClicked = () => {
    this.setState({
      addClicked: true,
      profileClicked: false,
      editClicked: false
    })
  }

  handleEditClicked = () => {
    this.setState({
      editClicked: true, 
      profileClicked: false,
      addClicked: false
    })
  }

  dashboardStateReset = () => {
    this.setState({
      addClicked: false,
      profileClicked: false,
      editClicked: false
    })
  }

  refresh() {
    // this.componentDidMount();
    this.getAllWorkouts();
  }
  
  render() {


    if (this.state.addClicked) {
      return <Add profileStateToTrue={this.handleProfileClicked} dashboardStateReset={this.dashboardStateReset} addStateChange={this.handleAddStateToFalse}/>
      // <AddEdit profileStateToTrue={this.handleProfileClicked} addStateChange={this.handleAddStateToFalse}/>
    } else if (this.state.editClicked) {
      return <Edit profileStateToTrue={this.handleProfileClicked} dashboardStateReset={this.dashboardStateReset} handleEditStateToFalse={this.handleEditStateToFalse}/>
      // <AddEdit editStateToTrue={this.handleEditClicked} profileStateToTrue={this.handleProfileClicked}/>
    } else if(this.state.profileClicked){
      return <Profile profileStateToFalse={this.handleProfileToFalse} addStateToTrue={this.handleAddClicked}/>
    } else {
        const {workout} =  this.state
      // console.log(workout)
      // console.log(this.state.products)
      const mappedWorkout =  workout.map((workout,i) => {
        return <WorkoutCard editStateToTrue={this.handleEditClicked} refresh={this.refresh} key={i} workout={workout}/>
      })

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
          <h2 className="performance-feed">Performance Feed</h2>

          {mappedWorkout}
        </div>
      )
    }
  }
  
}


const mapStateToProps = (state) => {
  const { editClicked, addClicked } = state
  return {
    editClicked,
    addClicked
  }
}

export default connect(mapStateToProps)(Dashboard);

