import React from 'react'
import './workoutcard.scss'
import {dateShaper} from '../../react_utils'
import axios from 'axios';
import { connect } from 'react-redux';
import { editWorkout } from '../../ducks/reducer'

 function WorkoutCard(props) {
    //  console.log(props)
     const {name, note, date, workout_id, user_id, completed } = props.workout[0]
     const useDate = dateShaper(date)

// console.log(props.workout[0])
   function handleDeleteClick(userId, workoutId) {
        axios.delete(`/api/workout/${userId}/${workoutId}`).then(res => {
        })
        props.refresh();
    }
    // console.log(completed)
return (

    <div id='dashboard-workout-box' className="workout-content-container white">
        <div className="title-row-div">
            <div className="title-row">
                <h4 className="workout-name">{name}</h4>
                <h4 className="workout-date">{useDate}</h4>
                
            </div>
            {completed? <div id="completed-btn" className="completed">Completed</div>: <div></div>}
            {/* <div className={completed? "completed": "out-of-site"}>Completed</div> */}
        </div>
        <div className="workout-items-box">
        {props.workout.map((item, i) => {
            if(item.type === "Cardio") {
                return (
                <div key={i} className="workout-content-item">
                    <div className="item-name">&diams; {item.type_value}</div>
                    <div className="item-x item-1">{item.distance}</div>
                    <div className="item-x item-2">{item.time}</div>
                    <div className="item-x itme-3"></div>

                </div>
                )
            }else {
                return(
                    <div key={i} className="workout-content-item">
                    <div className="item-name">&diams; {item.type_value}</div>
                    <div className="item-x item-1">{item.weight}</div>
                    <div className="item-x item-2">{item.reps}</div>
                    <div className="item-x itme-3">{item.sets}</div>

                </div>
                )

            }
           
        })}
        </div>
        <div className="notes-content-box">
            <div className="notes-header">Notes:</div>
            <div className="notes-content">{note}</div>
        </div>

        <div className="dashboard-button-box">
                
                <button id="dash-edit-btn" onClick={() => props.editWorkout(props.workout)} className="dashboard-edit">Edit</button>
                <button id="dash-delete-btn" onClick={() => handleDeleteClick(user_id, workout_id)}className="dashboard-delete">Delete</button>
                
        </div>
    </div>
  )

  
}



export default connect(null, {editWorkout})(WorkoutCard);

// const eachId = props.workout.map((item, i) => {
//     return item.id
// })




// const mapStateToProps = (state) => {
//     const { workout } = state;
//     return {
//         workout
//     }
// }