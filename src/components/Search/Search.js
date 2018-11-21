import React, { Component } from 'react'
import DashTop from '../DashTop/DashTop'
import { connect } from 'react-redux'
import {dateSorter, distanceMultiplesRemoved, nameMultiplesRemoved, liftTypeMultiplesRemoved, weightValueMultiplesRemoved} from '../../react_utils'
import axios from 'axios';
import WorkoutCard from '../WorkoutCard/WorkoutCard'
import './search.scss'



class Search extends Component {
    constructor() {
        super()
        this.state ={
            allWorkoutsFromDatabase: [],
            workoutsRenderedToPage: [],
            selectedWorkoutName: "All",
            displayTypes: true,
            cardioClicked: false,
            weightsClicked: false,
            nameInputValue: "All",
            cardioType: 'All',
            liftType: 'All',
            distanceValuesArray: [],
            liftTypesArray: [],
            weightValuesArray: []
        }
    }


    // Get All Workouts From The Database
    componentWillMount() {
        this.getAllWorkouts()
    }

    
    // Filter Workouts by Selected Cardio Type "Run, Swim, Cycle"
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
    }


    // Filter Workouts by the Selected Lift Type "Type is Dynamic"
    filterAllWorkoutsByLiftType = (arrayFilteredByName, liftType) => {
        if (liftType === "All") {
            return arrayFilteredByName
        }else {
            const filteredByLiftType = arrayFilteredByName.filter((workout, i) => {
                for (let i = 0; i < workout.length; i++) {
                    if(workout[i].type_value === liftType) {
                        return true
                    }
                }
                return false
             })
             return filteredByLiftType;
        }
    }


    // Filter All Workouts by the Selected Name "Names are Dynamic"
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

    
    //Change Handler for the Name Input
    handleWorkoutNameChange = (value) => {
        const filteredByName = this.filterAllWorkoutsByName(value)
        this.updateWorkoutsRenderedToPage(filteredByName)
        this.setState({
            selectedWorkoutName: value,
            cardioClicked: false,
            weightsClicked: false,
            distanceValuesArray: [],
            liftTypesArray: [],
            weightValuesArray: [],
            nameInputValue: value
        })
    }


    //Filter all Cardio Workouts by the Selected Distance Value "Values are Dynamic"
    filterAllWorkoutsByDistanceType = (arrayFilteredByCardioType, distanceValue) => {
        if (distanceValue === "All") {
            return arrayFilteredByCardioType
        } else {
            const filteredByDistanceType = arrayFilteredByCardioType.filter((workout, i) => {
                for (let i = 0; i < workout.length; i++) {
                    if(workout[i].distance === distanceValue) {
                        return true
                    }
                }
                return false
             })
             return filteredByDistanceType;
        }
    }


    // Filter all Weights Workouts by the Selected Weight Value "Weight Values are Dynamic"
    filterAllWorkoutsByWeightValue = (arrayFilteredByLiftType, weightValue) => {
        if (weightValue === "All") {
            return arrayFilteredByLiftType
        } else {
            const filteredByWeightType = arrayFilteredByLiftType.filter((workout, i) => {
                for (let i = 0; i < workout.length; i++) {
                    if(workout[i].weight === weightValue) {
                        return true
                    }
                }
                return false
             })
             return filteredByWeightType;
        }
    }


    // Change Handler for the Distance Input
    handleDistanceInputChange = (e) => {
        const {nameInputValue, cardioType } = this.state
        let filteredByNameArr =  this.filterAllWorkoutsByName(nameInputValue)
        let filteredByType = this.filterAllWorkoutsByCardioType(filteredByNameArr, cardioType)
        let filteredByDistance = this.filterAllWorkoutsByDistanceType(filteredByType, e.target.value)
        this.updateWorkoutsRenderedToPage(filteredByDistance)
    }  


    //  Change Handler for the Weight Input
    handleWeightInputChange = (value) => {
        const {nameInputValue, liftType} = this.state
        console.log(nameInputValue, liftType, value)
        let filteredByNameArr =  this.filterAllWorkoutsByName(nameInputValue)
        let filteredByType = this.filterAllWorkoutsByLiftType(filteredByNameArr, liftType)
        let filteredByWeight = this.filterAllWorkoutsByWeightValue(filteredByType, value)
        this.updateWorkoutsRenderedToPage(filteredByWeight)
    }


    // Filter Distance Values to Dynamically Set Distance Select Box Options
    filterDistancesForInput = (arr, cardioType) => {
        let filteredForDistance = []
        if( cardioType === "All") {
            for (let i = 0; i < arr.length; i++) {
                for (let k = 0; k < arr[i].length; k++) {
                    if (arr[i][k].type === "Cardio") {
                        filteredForDistance.push(arr[i][k].distance)
                    } 
                }
            }
         } else {
            for (let i = 0; i < arr.length; i++) {
                for (let k = 0; k < arr[i].length; k++) {
                    if (arr[i][k].type === "Cardio" && arr[i][k].type_value === cardioType) {
                        filteredForDistance.push(arr[i][k].distance)
                    } 
                }
            }
        }
        return distanceMultiplesRemoved(filteredForDistance)
    }


    // Filter Weight Vaules for Weight Select Box
    filterWeightForInput = (arr, liftType) => {
        let filteredForWeight = []
        if(liftType === "All") {
            for (let i = 0; i < arr.length; i++) {
                for (let k = 0; k < arr[i].length; k++) {
                    if (arr[i][k].type === "Weights") {
                        filteredForWeight.push(arr[i][k].weight)
                    } 
                }
            }
         } else {
            for (let i = 0; i < arr.length; i++) {
                for (let k = 0; k < arr[i].length; k++) {
                    if (arr[i][k].type === "Weights" && arr[i][k].type_value === liftType) {
                        filteredForWeight.push(arr[i][k].weight)
                    } 
                }
            }
        }
        return filteredForWeight
    }


    // Change Handler for Cardio Type Select Box
    handleCardioTypeChange = (value) => {
        const { selectedWorkoutName} = this.state
        let filteredByNameArr =  this.filterAllWorkoutsByName(selectedWorkoutName)
        let filteredByType = this.filterAllWorkoutsByCardioType(filteredByNameArr, value)
        this.updateWorkoutsRenderedToPage(filteredByType)
        let filteredDistanceValues = this.filterDistancesForInput(filteredByType, value)
        this.setState({
            cardioType: value,
            distanceValuesArray: filteredDistanceValues
        })
    }


    // Change Handler for Lift Type Select Box
    handleLiftTypeChange  = (value) => {
        const { selectedWorkoutName} = this.state
        let filteredByNameArr =  this.filterAllWorkoutsByName(selectedWorkoutName)
        let filteredByType = this.filterAllWorkoutsByLiftType(filteredByNameArr, value)
        this.updateWorkoutsRenderedToPage(filteredByType)
        let filteredWeightValues = this.filterWeightForInput(filteredByType, value)
        let liftValuesForLiftTypeInput = liftTypeMultiplesRemoved(filteredByType)
        this.setState({
            liftType: value,
            liftTypesArray: liftValuesForLiftTypeInput,
            weightValuesArray: filteredWeightValues
        })
    }


    // Click Handler for Cardio/Weights Buttons
    handleTypeClick = (trueVal, falseVal) => {
        const { selectedWorkoutName, cardioType, liftType } = this.state
        this.setState({
            [trueVal]: true,
            [falseVal]: false,
        })
        if(trueVal === "cardioClicked") {
          let filteredByNameArr =  this.filterAllWorkoutsByName(selectedWorkoutName)
          let filteredByType = this.filterAllWorkoutsByCardioType(filteredByNameArr, cardioType)
          let filteredDistanceValues = this.filterDistancesForInput(filteredByNameArr, "All")
          this.updateWorkoutsRenderedToPage(filteredByType)
          this.setState({
              distanceValuesArray: filteredDistanceValues,
          })
        } else {
            let filteredByNameArr =  this.filterAllWorkoutsByName(selectedWorkoutName)
            let liftValuesForLiftTypeInput = liftTypeMultiplesRemoved(filteredByNameArr)
            let filteredByType = this.filterAllWorkoutsByLiftType(filteredByNameArr, liftType)
            let filteredWeightValues = this.filterWeightForInput(filteredByNameArr, "All")
          this.updateWorkoutsRenderedToPage(filteredByType)
            this.setState({
                liftTypesArray: liftValuesForLiftTypeInput,
                weightValuesArray: filteredWeightValues
            })
        }
    }


    // Function to Set State with the Current Updated Array
    updateWorkoutsRenderedToPage = (arr) => {
        this.setState({
            workoutsRenderedToPage: arr
        })
    }


    // Function to Get All Workouts for Current User from the Database
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

      const { allWorkoutsFromDatabase, workoutsRenderedToPage, displayTypes, cardioClicked, weightsClicked, liftTypesArray, weightValuesArray } = this.state
      const workout = workoutsRenderedToPage.map((elem, i) => {
          return <WorkoutCard key={i} workout={elem}/>
      })
      const names = nameMultiplesRemoved(allWorkoutsFromDatabase)
      const distances = distanceMultiplesRemoved(this.state.distanceValuesArray)
      let distanceValForInput = distances.map((elem, i) => {
          return <option key={i} value={`${elem}`}>{elem}</option>
      })

      const liftValues = liftTypesArray.map((elem, i) => {
          return <option key={i} value={`${elem}`}>{elem}</option>
      })

      const weightValuesWithoutMultiples = weightValueMultiplesRemoved(weightValuesArray)
      const weight = weightValuesWithoutMultiples.map((elem, i) => {
        return <option key={i} value={`${elem}`}>{elem}</option> 
      })

    return (
      <div className="dashboard-main">
        <div className="dash-fixed-header">
        <DashTop profileStateToTrue={this.props.profileStateToTrue}/>

        <div className="dashboard-btns-box">
            <button onClick={() => this.props.dashboardStateReset()} className="dashboard-add-btn">Back To Dashboard</button>
            <button className="dashboard-search-btn">Search Workouts</button>
        </div>

        </div>
        <div className="clear-fix"></div>
        <h2 className="performance-feed">Search Workouts</h2>

        <div className="name-select-box">
            <h3>Workout Name:</h3>
                <select onChange={(e) => this.handleWorkoutNameChange(e.target.value)} name="name" >
                        <option value="All">All</option>
                        {names?
                            names.map((elem, i) => {
                                return <option key={i} value={elem}>{elem}</option> 
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
                        !this.state.cardioClicked && !this.state.weightsClicked?
                        <div className="type-toggle-div">
                        <button  onClick={() => this.handleTypeClick("cardioClicked", "weightsClicked")} className="cardio">Cardio</button>
                        <button onClick={() => this.handleTypeClick("weightsClicked", "cardioClicked")} className="weights">Weights</button>
                        </div>
                        : this.state.cardioClicked?
                        <div className="type-toggle-div">
                        <button id='cardio-black' onClick={() => this.handleTypeClick("cardioClicked", "weightsClicked")} className="cardio selected">Cardio</button>
                        <button  onClick={() => this.handleTypeClick("weightsClicked", "cardioClicked")} className="weights selected">Weights</button>
                        </div>
                        :
                        <div className="type-toggle-div">
                        <button onClick={() => this.handleTypeClick("cardioClicked", "weightsClicked")} className="cardio ">Cardio</button>
                        <button id='weights-black' onClick={() => this.handleTypeClick("weightsClicked", "cardioClicked")} className="weights selected">Weights</button>
                        </div>
                    }
                    {/* {
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
                    } */}
                </div>
            </div>
            
            :
            null
            
        }
           <div className={cardioClicked? "activities-toggle-div": "hide-me" }>

                <div className="cardio-activities-box">
                    <h3 className="type">Cardio Type:</h3>
                    <select onChange={(e) => this.handleCardioTypeChange(e.target.value)}name="" id="">
                        <option value="All">All</option>
                        <option value="Run">Run</option>
                        <option value="Swim">Swim</option>
                        <option value="Cycle">Cycle</option>
                    </select>
                </div>
                  <div className="cardio-values">
                      <div className="type-value">   
                          <div className="distance">
                          <h3 className="type">Distance:</h3>
                          <select onChange={this.handleDistanceInputChange} name="" id="">
                            <option>All</option>
                            {distanceValForInput}
                          </select>
                          </div>     
                      </div>
                  </div>
              </div>

              <div className={weightsClicked? "activities-toggle-div" : "hide-me"}>
                
                <div className="lift-type-div"> 
                    <h3>Lift Type:</h3>
                    <select onChange={(e) => this.handleLiftTypeChange(e.target.value)} name="" id="">
                        <option value="All">All</option>
                        {liftValues}
                    </select>
                </div>

                <div className="lift-values">
                    <div className="lift-value">   
                        <div className="lift-weight-box">
                            <h3 className="lift-weight">Weight:</h3>
                            <select onChange={(e) => this.handleWeightInputChange(e.target.value)} name="" id="">
                                <option value="All">All</option>
                                {weight}
                            </select>
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
