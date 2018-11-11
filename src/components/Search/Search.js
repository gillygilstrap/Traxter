import React, { Component } from 'react'
import DashTop from '../DashTop/DashTop'
import { connect } from 'react-redux'
import {dateSorter} from '../../react_utils'
import axios from 'axios';
import WorkoutCard from '../WorkoutCard/WorkoutCard'
import './search.scss'



class Search extends Component {
    constructor() {
        super()
        this.state ={
            allWorkoutsFromDatabase: [],
            workoutsRenderedToPage: [],
            // arrayFilteredByName: [],
            selectedWorkoutName: "All",
            displayTypes: true,
            cardioClicked: false,
            weightsClicked: false,
            nameInputValue: "All",
            cardioType: 'All'
        }
    }
    componentWillMount() {
        this.getAllWorkouts()
    }
    
    filterCardioTypeLevel = () => {
        this.handleWorkoutNameChange();
        const type = this.state.cardioType
        const arrayFilteredByName = this.state.arrayFilteredByName
        console.log('rray by name',arrayFilteredByName)
        const filteredByCardioTypeValue = arrayFilteredByName.filter((elem,i) => {
            let isSelected = false
            for (let i = 0; i < elem.length; i++) {
                if(elem[i].type_value === type) {
                    isSelected = true
                }
                
            }
            return isSelected;
        })

        this.setState({
            workoutsRenderedToPage: filteredByCardioTypeValue
        })
    }
    // filterCardioTypeLevel = () => {
      
        
    // }

    // -------------------------------------------------------------------------------------------------------------------

    filterAllWorkoutsByCardioType = (arrayFilteredByName, cardioType) => {
        if (cardioType === "All") {
            return arrayFilteredByName
        }else {
            const filteredByCardioType = arrayFilteredByName.filter((workout, i) => {

                for (let i = 0; i < workout.length; i++) {
                    if(workout[i].type_value === cardioType) {
                        return true
                    }
                    
                }
                return false
             })
             return filteredByCardioType;
        }
        
        // console.log(arrayFilteredByName)
        // const type = this.state.cardioType
        // const workoutsRenderedToPage = this.state.workoutsRenderedToPage
        // let tempArr = [];
        // let testArray = []
        // console.log(workoutsRenderedToPage)
        // for (let i = 0; i < workoutsRenderedToPage.length; i++) {
        //     for (let k = 0; k < workoutsRenderedToPage[i].length; k++) {
        //         // console.log(workoutsRenderedToPage[i][k].type_value)
        //         if (workoutsRenderedToPage[i][k].type_value === type) {
        //             tempArr.push(workoutsRenderedToPage[i][k].workout_id)
        //         }
        //     }
        // } 
        // for (let i = 0; i < tempArr.length; i++) {
        //     workoutsRenderedToPage.forEach(elem => {
        //         if(elem[0].workout_id === tempArr[i]) {
        //             testArray.push(elem)
        //         }
        //     })
           
        // }
        // // console.log(returnArray)
        // console.log(testArray)
        // this.setState({
        //     workoutsRenderedToPage: testArray
        // })
    }

    filterAllWorkoutsByName = (workoutName) => {
        let filteredByName = []
        if(workoutName === "All") { 

            filteredByName = this.state.allWorkoutsFromDatabase.slice()

        } else {
        
            const { allWorkoutsFromDatabase } = this.state
            filteredByName = allWorkoutsFromDatabase.filter((elem, i) => {
                return elem[0].name === workoutName
            })
        } 
        return filteredByName;
    }

    handleWorkoutNameChange = (value) => {

        const filteredByName = this.filterAllWorkoutsByName(value)
        this.updateWorkoutsRenderedToPage(filteredByName)
        this.setState({
            selectedWorkoutName: value
        })
    }

    // filterForDistanceValues(arr,cardioType) {
    //     let unReducedArr = [];
    //     let distanceValues = arr.filter((workout, i) {
    //         for (let i = 0; i < workout.length; i++) {
    //             if (workout[i].type === "Cardio")
    //             unreduced
    //         }
    //     })
    // }


    handleCardioTypeChange = (value) => {
        const { selectedWorkoutName} = this.state
        let filteredByNameArr =  this.filterAllWorkoutsByName(selectedWorkoutName)
        let filteredByType = this.filterAllWorkoutsByCardioType(filteredByNameArr, value)
        this.updateWorkoutsRenderedToPage(filteredByType)
        this.setState({
            cardioType: value
        })
    }

    handleTypeClick = (trueVal, falseVal) => {
        const { selectedWorkoutName, cardioType } = this.state
        this.setState({
            [trueVal]: true,
            [falseVal]: false,
        })
        if (trueVal === "cardioClicked") {
          let filteredByNameArr =  this.filterAllWorkoutsByName(selectedWorkoutName)
          let filteredByType = this.filterAllWorkoutsByCardioType(filteredByNameArr, cardioType)
          this.updateWorkoutsRenderedToPage(filteredByType)
        }else {
            // this.filterWeightsTypeLevel()
        }


    }

    updateWorkoutsRenderedToPage = (arr) => {
        this.setState({
            workoutsRenderedToPage: arr
        })
    }

    getAllWorkouts = () => {
        if (this.props.currentUser !== null) {
        const { id } = this.props.currentUser
        axios.get(`/api/workouts/getAll/${id}`).then(res => {
       let sortedByDate = dateSorter(res.data)
       
        this.setState({
            allWorkoutsFromDatabase: sortedByDate,
        })
        this.updateWorkoutsRenderedToPage(sortedByDate)
      })
        }
      }
    

  render() {
      console.log(this.state.workoutsRenderedToPage)
    // console.log(this.state.workoutsRenderedToPage)
      const { allWorkoutsFromDatabase, workoutsRenderedToPage, displayTypes, cardioClicked, weightsClicked } = this.state
      const workout = workoutsRenderedToPage.map((elem, i) => {
          return <WorkoutCard key={i} workout={elem}/>
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
        <h2 className="performance-feed">Search Workouts</h2>

        <div className="name-select-box">
            <h3>Workout Name:</h3>
                <select onChange={(e) => this.handleWorkoutNameChange(e.target.value)} name="name" >
                        <option value="All">All</option>
                        {allWorkoutsFromDatabase?
                            allWorkoutsFromDatabase.map((elem, i) => {
                                return <option key={i} value={elem[0].name}>{elem[0].name}</option> 
                            })
                            :
                            null
                        }
                </select>
        </div>

        {displayTypes?
            <div className="mid-box">
                <div className="mid-box-child child-2">
                
                    <h3 className="type">Type:</h3>
                    {
                        this.state.cardio?
                        <div className="type-toggle-div">
                        <button id='cardio-black' onClick={() => this.handleTypeClick("cardioClicked", "weightsClicked")} className="cardio selected">Cardio</button>
                        <button onClick={() => this.handleTypeClick("weightsClicked", "cardioClicked")} className="weights">Weights</button>
                        </div>
                        :
                        <div className="type-toggle-div">
                        <button onClick={() => this.handleTypeClick("cardioClicked", "weightsClicked")} className="cardio ">Cardio</button>
                        <button id='weights-black' onClick={() => this.handleTypeClick("weightsClicked", "cardioClicked")} className="weights selected">Weights</button>
                        </div>
                    }
                </div>
            </div>
            
            :
            null
            
        }
           <div className={cardioClicked? "activities-toggle-div": "hide-me" }>

                <div className="cardio-activities-box">
                    <h3 className="type">Type:</h3>
                    <select onChange={(e) => this.handleCardioTypeChange(e.target.value)}name="" id="">
                        <option value="All">All</option>
                        <option value="Run">Run</option>
                        <option value="Swim">Swim</option>
                        <option value="Cycle">Cycle</option>
                    </select>
                </div>
                
                {/* <div className="cardio-activities">
                      <button onClick={this.handleRunClick} className={this.state.run? "run-black": "run"}>Run</button>
                      <button onClick={this.handleSwimClick} className={this.state.swim? "swim-black": "swim"}>Swim</button>
                      <button onClick={this.handleCycleClick} className={this.state.cycle? "cycle-black": "cycle"}>Cycle</button>
                      {/* <button className="cycle">Cycle</button> */}
                {/* </div> */}

                {/* --------------------------------------------------------------------- */}
                {/* <select onChange={(e) => this.handleWorkoutNameChange(e.target.value)} name="name" >
                        <option value="All">All</option>
                        {allWorkoutsFromDatabase?
                            allWorkoutsFromDatabase.map((elem, i) => {
                                return <option key={i} value={elem[0].name}>{elem[0].name}</option> 
                            })
                            :
                            null
                        }
                </select> */}
                {/* ------------------------------------------------------------------------ */}
                  
                  <div className="cardio-values">
                      <div className="type-value">   
                          <div className="distance">
                          <h3 className="type">Distance:</h3>
                          <select name="" id="">
                            <option>All</option>
                          </select>
                          </div>     
                      </div>

                    {/* //   <div className="type-value">   
                    //       <div className="time">
                    //       <h3 className="type">Time:</h3>
                    //       <input onChange={this.handleTimeChange} value={this.state.timeValue} type="text"/>
                    //       </div>     
                    //   </div> */}
                  </div>
              </div>

              <div className={weightsClicked? "activities-toggle-div" : "hide-me"}>
                
                <div className="lift-type-div"> 
                    <h3>Lift Type:</h3>
                    {/* <select onChange={this.handleWeightsTypeChange}>
                        <option value={bp}>Bench Press</option>
                        <option value={ip}>Incline Press</option>
                        <option value={sp}>Shoulder Press</option>
                        <option value="Squat">Squat</option>
                        <option value={dl}>Deatlift</option>
                        <option value={pu}>Push-Ups</option>
                        <option value={pul}>Pull-Ups</option>
                        <option value={bor}>Bent Over Row</option>
                        <option value="Curl">Curl</option>
                        <option value={cr}>Calf Raise</option>
                        <option value="Lunge">Lunge</option>
                    </select> */}
                </div>

                <div className="lift-values">
                    <div className="lift-value">   
                        <div className="lift-weight">
                        <h3 className="lift-weight">Weight:</h3>
                        <input onChange={this.handleWeightValueChange} value={this.state.weightValue}type="text"/>
                        </div>     
                    </div>

                    <div className="lift-value">   
                        <div className="lift-reps">
                        <h3 className="lift-reps">Reps:</h3>
                        <input onChange={this.handleRepsValueChange} value={this.state.repsValue} id="lift-reps-input" type="text"/>
                        </div>     
                    </div>

                    <div className="lift-value">   
                        <div className="lift-sets">
                        <h3 className="lift-weight">Sets:</h3>
                        <input onChange={this.handleSetsValueChange} value={this.state.setsValue} id="lift-sets-input" type="text"/>
                        </div>     
                    </div>
                </div>

            </div>
        <div>{workout}</div>
        
        
    </div>
    )
  }
}
const mapStateToProps = (state) => {
    const {currentUser } = state 
    return {
        currentUser
    }
}



export default connect(mapStateToProps)(Search);



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