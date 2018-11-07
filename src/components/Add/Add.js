import React, { Component } from 'react'
import './add.scss'
import DashTop from '../DashTop/DashTop';
import axios from "axios";

class Add extends Component {
    constructor() {
        super()
        this.state = {
            cardio: true,
            weights: false,
            today: true,
            future: false,
            run: true,
            swim: false,
            cycle: false,
            cardioType: 'Run',
            weightsType: 'Bench Press',
            currentDate: '',
            futureDate: '',
            distanceValue: '',
            timeValue: '',
            workoutName: '',
            weightValue: '',
            repsValue: '',
            setsValue: '',
            notesValue: '',
            workout: [],
            workoutEmpty: true,
            useDate: '',
            completed: false

        }
        this.handleCardioClick = this.handleCardioClick.bind(this);
        this.handleWeightsClick = this.handleWeightsClick.bind(this);
        this.handleTodayClick = this.handleTodayClick.bind(this);
        this.handleFutureClick = this.handleFutureClick.bind(this);
        this.handleRunClick = this.handleRunClick.bind(this);
        this.handleSwimClick = this.handleSwimClick.bind(this);
        this.handleCycleClick = this.handleCycleClick.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleWeightsTypeChange = this.handleWeightsTypeChange.bind(this);
        this.handleWorkoutNameChange = this.handleWorkoutNameChange.bind(this);
        this.handleWeightValueChange = this.handleWeightValueChange.bind(this);
        this.handleRepsValueChange = this.handleRepsValueChange.bind(this);
        this.handleSetsValueChange = this.handleSetsValueChange.bind(this);
        this.handleNotesValueChange =this.handleNotesValueChange.bind(this);
        this.createWorkoutItem = this.createWorkoutItem.bind(this);
        this.clearWorkout = this.clearWorkout.bind(this);
        this.newWorkoutClick = this.newWorkoutClick.bind(this);
        this.handleFutureDateChange = this.handleFutureDateChange.bind(this);
        this.sendToFeed = this.sendToFeed.bind(this);
        this.updateCompletedClick = this.updateCompletedClick.bind(this);

    }
    componentDidMount() {
        
        if (this.state.today) {
            this.grabDate();
        }
        
    }
    handleChange2(key, value) {
        this.setState({
            [key]: value,
            useDate: value
        })
    }

    handleCardioClick() {
        this.setState({
            cardio: true,
            weights: false
        })
        
    }

    handleWeightsClick() {
        this.setState({
            cardio: false,
            weights: true
        })
        
    }

    handleTodayClick() {
        this.setState({
            today: true,
            future: false
        })
        this.grabDate();
    }
    handleFutureClick() {
        this.setState({
            today: false,
            future: true,
            currentDate: null
        })
    }
    handleFutureDateChange(e) {
        this.setState({
            futureDate: e.target.value
        })
    }

    handleRunClick() {
        this.setState({
            run: true,
            swim: false,
            cycle: false,
            cardioType: "Run"
        })
    }

    handleSwimClick() {
        this.setState({
            run: false,
            swim: true,
            cycle: false,
            cardioType: "Swim"
        })
    }

    handleCycleClick() {
        this.setState({
            run: false,
            swim: false,
            cycle: true,
            cardioType: "Cycle"
        })
    }
    handleDistanceChange(e) {
        this.setState({
            distanceValue: e.target.value
        })
    }

    handleTimeChange(e) {
        this.setState({
            timeValue: e.target.value
        })
    }
    handleWeightsTypeChange(e) {
        this.setState({
            weightsType: e.target.value
        })
    }
    handleWorkoutNameChange(e) {
        this.setState({
            workoutName: e.target.value
        })
    }

    handleWeightValueChange(e) {
        this.setState({
            weightValue: e.target.value
        })
    }
    handleRepsValueChange(e) {
        this.setState({
            repsValue: e.target.value
        })
    }
    handleSetsValueChange(e) {
        this.setState({
            setsValue: e.target.value
        })
    }

    handleNotesValueChange(e) {
        this.setState({
            notesValue: e.target.value
        })
    }
    createWorkoutItem() {
        const {cardioType, distanceValue, timeValue, weightsType, weightValue, repsValue, setsValue} = this.state
        const tempArr = this.state.workout.slice()
        const tempDate = this.state.futureDate;

        if (!this.state.today) {
            this.setState({
                useDate: tempDate
            })
        }
       

        if (this.state.cardio) {
            tempArr.push(
                {
                  colOne: cardioType,
                  colTwo: distanceValue,
                  colThree: timeValue,
                  colFour: ''  
                }
            ) 
            this.setState({
                distanceValue: '',
                timeValue: ''
            })
        }else {
            const weightVal = weightValue + 'lbs';
            const repsVal = repsValue + ' ' + 'reps';
            const setsVal = setsValue +' ' + 'sets'

            tempArr.push(
                {
                  colOne: weightsType,
                  colTwo: weightVal,
                  colThree: repsVal,
                  colFour: setsVal
                }
            )
            this.setState({
                weightValue: '',
                repsValue: '',
                setsValue: ''
            })
        }
        this.setState({
            workout: tempArr,
            workoutEmpty: false,
            completed: false
        })
        
    }
    clearWorkout() {
        this.setState({
            workout: [],
            notesValue: ''
        })
    }
    newWorkoutClick() {
        this.setState({
            workoutName: '',
            notesValue: '',
            workout: [],
            workoutEmpty: true
        })
    }

    sendToFeed() {
        const {workout, useDate, workoutName, notesValue, completed} = this.state;
        axios.post('/api/workouts', {workout: workout, date: useDate, workoutName: workoutName, note: notesValue, completed: completed }).then( res => {
            // console.log(res.data)
            this.props.addStateChange()
            // this.props.history('/dashboard')
        }
 
        )
        this.props.addStateChange()
    }
    updateCompletedClick() {
        this.setState({
            completed: !this.state.completed
        })
    }
    


    grabDate = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = parseInt(today.getFullYear());
        const currentDate = month + '/' + day + '/' + year;
        this.setState({
            currentDate: currentDate,
            useDate: currentDate
        })
    }


  render() {
    const bp = "Bench Press"
    const ip = "Incline Press"
    const sp = "Shoulder Press"
    const dl = "Deadlift"
    const pu = "Push Ups"
    const pul = "Pull Ups"
    const bor = "Bent Over Row"
    const cr = "Calf Raise"
    return (

        <div className="add-main">
            <div className="dash-fixed-header">
            <DashTop profileStateToTrue={this.props.profileStateToTrue}/>

            <div className="dashboard-btns-box">
                <button onClick={() => this.props.dashboardStateReset()}className="dashboard-add-btn">Back To Dashboard</button>
                <button className="dashboard-search-btn">Search Workouts</button>
            </div>

            </div>

            <div className="clear-fix"></div>
            <h2 className="performance-feed">Add a Workout</h2>

            <div className="workout-btns">
                <button onClick={this.newWorkoutClick} className="new-workout">New Workout</button>
                <button className="my-templates">My Templates</button>
            </div>

            
            <div className="workout-name-div">
                <h3>Workout Name:</h3>
                <input onChange={this.handleWorkoutNameChange} value={this.state.workoutName}type="text"/>
            </div>

            <div className="mid-box">
                
                <div className="mid-box-child child-1">
                    <h3 className="date">Date:</h3>

                    {
                        this.state.today?
                        <div className='date-toggle-div'>
                            <button id="today-black" onClick={this.handleTodayClick} className="today">Today</button>
                            <button onClick={this.handleFutureClick} className="future">Future</button>
                        </div>
                        :
                        <div className='date-toggle-div'>
                            <button onClick={this.handleTodayClick} className="today">Today</button>
                            <button id="future-black" onClick={this.handleFutureClick} className="future">Future</button>
                        </div>     
                    }
                </div>

                <div className="mid-box-child child-2">
                    <h3 className="type">Type:</h3>
                    {
                        this.state.cardio?
                        <div className="type-toggle-div">
                        <button id='cardio-black' onClick={this.handleCardioClick} className="cardio selected">Cardio</button>
                        <button onClick={this.handleWeightsClick} className="weights">Weights</button>
                        </div>
                        :
                        <div className="type-toggle-div">
                        <button onClick={this.handleCardioClick} className="cardio ">Cardio</button>
                        <button id='weights-black' onClick={this.handleWeightsClick} className="weights selected">Weights</button>
                        </div>
                    }
                    
                </div>
            </div>
                    <div className={this.state.today? "hide-me": "future-date-div"}>
                    <h3>Choose Date:</h3>
                    <input onChange={(e) => this.handleChange2('futureDate', e.target.value)} type="text" placeholder="00/00/0000" value={this.state.futureDate}/>
                    </div>
            {this.state.cardio?
                <div className="activities-toggle-div">
                
                  <div className="cardio-activities">
                        <button onClick={this.handleRunClick} className={this.state.run? "run-black": "run"}>Run</button>
                        <button onClick={this.handleSwimClick} className={this.state.swim? "swim-black": "swim"}>Swim</button>
                        <button onClick={this.handleCycleClick} className={this.state.cycle? "cycle-black": "cycle"}>Cycle</button>
                        {/* <button className="cycle">Cycle</button> */}
                  </div>
                    
                    <div className="cardio-values">
                        <div className="type-value">   
                            <div className="distance">
                            <h3 className="type">Distance:</h3>
                            <input onChange={this.handleDistanceChange} type="text"  value={this.state.distanceValue}/>
                            </div>     
                        </div>

                        <div className="type-value">   
                            <div className="time">
                            <h3 className="type">Time:</h3>
                            <input onChange={this.handleTimeChange} value={this.state.timeValue} type="text"/>
                            </div>     
                        </div>
                    </div>
                </div>
                :
                <div className="activities-toggle-div">
                
                    <div className="lift-type-div"> 
                        <h3>Lift Type:</h3>
                        <select onChange={this.handleWeightsTypeChange}>
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
                        </select>
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
            }
           
            <div className="notes-input-box">
            <h3 className="type">Notes:</h3>
            <input onChange={this.handleNotesValueChange} value={this.state.notesValue} type="text" />
            </div>
            <div className="add-workout-button-div">
                <button onClick={this.createWorkoutItem} className="add-workout-item">Add to Workout</button>
                <button onClick={this.updateCompletedClick} id="completed-button" className="add-workout-item">Mark Completed</button>
            </div>

            {/* <div className="workout-content-container"> */}
            <div className={this.state.workoutEmpty? "hide-me": "workout-content-container"}>
                <div className="title-row-div">
                    <div className="title-row">
                        <h4 className="workout-name">{this.state.workoutName}</h4>
                        <h4 className="workout-date">{this.state.today? 
                    this.state.currentDate
                    :
                    this.state.futureDate    
                    }</h4>
                        
                    </div>
                    <div onClick={this.updateCompletedClick} className={this.state.completed? "completed": "out-of-site"}>Completed</div>
                    {/* <button onClick={this.updateCompletedClick} className={this.state.completed? "completed": "out-of-site"}>Completed</button> */}
                </div>
                
               { this.state.workout.map((elem,i) => {
                   return <div key={i} className="workout-content-item">
                    <div className="item-name">&diams; {elem.colOne}</div>
                    <div className="item-x item-1">{elem.colTwo}</div>
                    <div className="item-x item-2">{elem.colThree}</div>
                    <div className="item-x itme-3">{elem.colFour}</div>
                    </div>
                })}


                <div className="notes-content-box">
                    <div className="notes-header">Notes:</div>
                    <div className="notes-content">{this.state.notesValue}</div>
                </div>
            </div>
            <div className={this.state.workoutEmpty? "hide-me": "workout-button-box"}>
                    <button onClick={this.sendToFeed}className="send-to-feed">Send To Feed</button>
                    <button className="save-as-template">Save As Template</button>
                    <button onClick={this.clearWorkout} className="clear">Clear</button>
                </div>
        </div>
            
        

    )
  }
}

export default Add;



//commment
