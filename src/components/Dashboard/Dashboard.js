import React, { Component } from 'react'
import DashTop from '../DashTop/DashTop';
import './dashboard.scss';
import axios from 'axios';
import WorkoutCard from '../WorkoutCard/WorkoutCard';
// import AddEdit from '../AddEdit/AddEdit'
import Edit from '../Edit/Edit'
import Add from '../Add/Add'
import Profile from '../Profile/Profile'
import Search from '../Search/Search'
import {dateSorter} from '../../react_utils'
import { connect } from 'react-redux' 
import { setEditToFalse } from '../../ducks/reducer'


class Dashboard extends Component {
  constructor() {
    super() 
    this.state = {
      workout: [],
      editClicked: false,
      addClicked: false,
      profileClicked: false,
      searchClicked: false
    }
    this.refresh = this.refresh.bind(this);
  }

  getAllWorkouts = () => {
    if (this.props.currentUser !== null) {
    const { id } = this.props.currentUser
    axios.get(`/api/workouts/getAll/${id}`).then(res => {
    // console.log(res.data);
   let sortedByDate = dateSorter(res.data)
    // console.log(res.data)
    this.setState({
      workout: sortedByDate
    })
  })
    }
  
  }

  componentDidMount() {
    this.getAllWorkouts()
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps && this.props.editClicked) {
      this.handleEditClicked()
    }
    if ( this.props !== prevProps) {
      this.getAllWorkouts()
    }
  }
  handleProfileToFalse = () => {
    this.setState({
      profileClicked: false,
      searchedClicked: false
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
    this.props.setEditToFalse()
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
  handleSearchClicked = () => {
    this.setState({
      searchClicked: true,
      editClicked: false, 
      profileClicked: false,
      addClicked: false
    })
  }

  dashboardStateReset = () => {
    this.setState({
      addClicked: false,
      profileClicked: false,
      editClicked: false,
      searchClicked: false
    })
  }

  refresh() {
    // this.componentDidMount();
    this.getAllWorkouts();
  }
  
  render() {
    // console.log(this.props.currentUser)

    if (this.state.addClicked) {
      return <Add profileStateToTrue={this.handleProfileClicked} dashboardStateReset={this.dashboardStateReset} addStateChange={this.handleAddStateToFalse} searchStateToTrue={this.handleSearchClicked}/>
      // <AddEdit profileStateToTrue={this.handleProfileClicked} addStateChange={this.handleAddStateToFalse}/>
    } else if (this.state.editClicked) {
      return <Edit profileStateToTrue={this.handleProfileClicked} dashboardStateReset={this.dashboardStateReset} handleEditStateToFalse={this.handleEditStateToFalse} searchStateToTrue={this.handleSearchClicked}/>
      // <AddEdit editStateToTrue={this.handleEditClicked} profileStateToTrue={this.handleProfileClicked}/>
    } else if(this.state.profileClicked){
      return <Profile profileStateToTrue={this.handleProfileClicked} profileStateToFalse={this.handleProfileToFalse} addStateToTrue={this.handleAddClicked} dashboardStateReset={this.dashboardStateReset} searchStateToTrue={this.handleSearchClicked}/>
    } else if (this.state.searchClicked) {
      return <Search profileStateToTrue={this.handleProfileClicked} dashboardStateReset={this.dashboardStateReset} />
    } else {
        const {workout} =  this.state
      // console.log(workout)
      // console.log(this.state.products)
      const mappedWorkout =  workout.map((workout,i) => {
        // console.log(workout[0].date)
        return <WorkoutCard editStateToTrue={this.handleEditClicked} refresh={this.refresh} key={i} workout={workout}/>
      })
      // console.log(/mappedWorkout)
      return (
        <div className="dashboard-main">
          <div className="dash-fixed-header">
            <DashTop profileStateToTrue={this.handleProfileClicked}/>

            <div className="dashboard-btns-box">
              <button onClick={this.handleAddClicked} className="dashboard-add-btn">Add Workout</button>
              <button onClick={this.handleSearchClicked} className="dashboard-search-btn">Search Workouts</button>
            </div>
          </div>
          <div className="clear-fix"></div>
          <h2 className="performance-feed">Performance Feed</h2>

          

           {!this.state.workout.length?
          <button className="big-add-button" onClick={this.handleAddClicked}>Add a Workout!</button> 
          :
          
          <div>{mappedWorkout}</div>
          }
           
            <div className="footer-box"></div>
          
        </div>
      )
    }
  }
  
}


const mapStateToProps = (state) => {
  const { editClicked, addClicked, currentUser } = state
  // console.log(state)
  return {
    editClicked,
    addClicked,
    currentUser
  }
}

export default connect(mapStateToProps, {setEditToFalse})(Dashboard);




// else {
//   const {workout} =  this.state
// // console.log(workout)
// // console.log(this.state.products)
// const mappedWorkout =  workout.map((workout,i) => {
//   // console.log(workout[0].date)
//   return <WorkoutCard editStateToTrue={this.handleEditClicked} refresh={this.refresh} key={i} workout={workout}/>
// })
// // console.log(/mappedWorkout)
// return (
//   <div className="dashboard-main">
//     <div className="dash-fixed-header">
//       <DashTop profileStateToTrue={this.handleProfileClicked}/>

//       <div className="dashboard-btns-box">
//         <button onClick={this.handleAddClicked} className="dashboard-add-btn">Add Workout</button>
//         <button className="dashboard-search-btn">Search Workouts</button>
//       </div>

//     </div>
//     <div className="clear-fix"></div>
//     <h2 className="performance-feed">Performance Feed</h2>

    

//      {!this.state.workout.length?
//     <button className="big-add-button" onClick={this.handleAddClicked}>Add a Workout!</button> 
//     :
    
//     <div>{mappedWorkout}</div>
//     }
//       <Search />
      
    
//   </div>
// )
// }