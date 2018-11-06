const _ = require('lodash')
const utils = require('./utils.js')

module.exports = {
    newWorkout: (req, response) =>{ 
        const {completed, workoutName, note, workout, date} = req.body
        const altertedDate = utils.dateToNumber(date)
        req.app.get('db').create_workout({
            
            name: workoutName, 
            date: altertedDate,
            completed: completed,
            note: note
        }).then( workouts => {
            for (let i = 0; i < workout.length; i++) {
                if (workout[i].colOne === "Run" || 
                    workout[i].colOne === "Swim" ||
                    workout[i].colOne === "Cycle") {
                        const type = "Cardio"
                        req.app.get('db').create_cardio_workout_item({
                            user_id: 1,
                            workout_id: workouts[0].id,
                            type: type,
                            type_value: workout[i].colOne,
                            distance: workout[i].colTwo,
                            time: workout[i].colThree
                        }).then(res => {
                            console.log(res)
                            res.send("Got Something")
                        }).catch(error => {
                            console.log('Error in newWorkout create_cardio_workout_item', error)
                        })
                    } else {
                        const type = "Weights"
                        req.app.get('db').create_weights_workout_item({
                            user_id: 1,
                            workout_id: workouts[0].id,
                            type: type,
                            type_value: workout[i].colOne,
                            weight: workout[i].colTwo,
                            reps: workout[i].colThree,
                            sets: workout[i].colFour
                        }).then(res => {
                            console.log('weights got it')
                            res.send('Got Something')
                        }).catch(error => {
                            console.log('Error in newWorkout create_weights_workout_item', error)
                        })
                    }
            }
        }).then(() => {
            response.status(200).send('This thing')
        }) 
    },

    getAllWorkouts: (req, res) => {
        const {id} = req.params
        req.app.get('db').get_all_workouts({id: id}).then(workouts => {
            // console.log(workouts)
            let reduced = workouts.reduce((r,a) => {
                r[a.workout_id] = r[a.workout_id] || [];
                r[a.workout_id].push(a);
                return r
              }, Object.create(null));
              
              let bigArray = []
                let x = 1;
                for (x in reduced) {
                bigArray.push(reduced[x])
                x++
                }
                x = 1;
            res.status(200).json(bigArray)
        }).catch(error => {
            console.log("error in getAll Workout", error)
        })
    },

    deleteWorkout: (req, res) => {
        console.log('----------BANG!!!!----------' );
        workout_id = req.params.workoutId
        console.log(req.params)
        req.app.get('db').delete_workout_items({
            workout_id: workout_id
        }).then(res => {
            req.app.get('db').delete_workout({
                workout_id: workout_id
            }).catch(error => {
                console.log('There was an Error in delete_workout_items', error)
            })
        }).then(response => {
            res.status(200).send('Item Was Deleted')
        }).catch(error => {
            console.log('There was an Error in delete_workout', error)
        })
    },

    saveChanges: (req, response) => {
        const {workout} = req.body
        console.log(req.body)
        const {completed, date, workout_id} = workout[0]
        const {name, note} = req.body
        // const altertedDate = utils.dateToNumber(date)
        req.app.get('db').edit_workout({
            name: name, 
            date: date,
            completed: completed,
            note: note,
            workout_id: workout_id
        }).then(res => {
            for (let i = 0; i < workout.length; i++) {
                if(workout[i].id) {
                    if(workout[i].type === "Cardio") {
                        req.app.get('db').edit_cardio_workout_item({
                            type: workout[i].type,
                            type_value: workout[i].colOne,
                            distance: workout[i].colTwo,
                            time: workout[i].colThree,
                            id: workout[i].id
                        }).then(res => {
                            // res.status(200).send("Item Was Edited")
                        }).catch(error => {
                            console.log('There was an Error saveChanges edit_cardio_workout_item', error)
                        })
                    } else {
                        req.app.get('db').edit_weights_workout_item({
                            type: workout[i].type,
                            type_value: workout[i].colOne,
                            weight: workout[i].colTwo,
                            reps: workout[i].colThree,
                            sets: workout[i].colFour,
                            id: workout[i].id
                        }).then(res => {
                            // res.status(200).send("Item Was Edited")
                            }).catch(error => {
                                console.log('There was an Error saveChanges edit_weights_workout_item', error)
                            })
                    }
                } else {
                    if(workout[i].type === "Cardio") {
                        req.app.get('db').create_cardio_workout_item({
                            user_id: 1,
                            workout_id: workout_id,
                            type: workout[i].type,
                            type_value: workout[i].colOne,
                            distance: workout[i].colTwo,
                            time: workout[i].colThree
                        }).then(res => {
                            // res.status(200).send('Item Was Created')
                        }).catch(error => {
                            console.log('There was an Error saveChanges create_cardio_workout_item', error)
                        })
                    } else {
                        req.app.get('db').create_weights_workout_item({
                            user_id: 1,
                            workout_id: workout_id,
                            type: workout[i].type,
                            type_value: workout[i].colOne,
                            weight: workout[i].colTwo,
                            reps: workout[i].colThree,
                            sets: workout[i].colFour
                        }).then(res => {
                            // res.status(200).send('Item Was Created')
                        }).catch(error => {
                            console.log('There was an Error saveChanges create_weights_workout_item', error)
                        })
                    }
                }
            }
        }).then(() => {
            response.status(200).send('this thing')
        })
    }

      
}   
        
  
    
    

//  /     postCouch: (req,res) => {
        
//             req.app.get(db).create_couch({
//                 user_id: req.session.user.id,
//                 name: req.body.name,
//                 price: req.body.price,
//                 image: req.body.image
//             }).then(couches => {
//                 res.status(200).res.json(couches[0]);
//             }).catch(error => {
//                 console.log('error in postCouch', error);
//                 res.status(500).json({message: "Blah Blah Blah"})
//             })
//         }
//     }

//  module.exports = {
//     getCouches: (req,res) => {
//         console.log('this got hit')
//         req.app.get('db').get_couches().then(couches => {
//             res.json(couches)
//         }).catch (error => {
//             console.log('error in get couches', error)
//             res.status(500).json({message: 'Blah blah'})
//         });
//     },
     
// /



// ---------------------------------------
    // --------------------------------------------
    // saveChanges: (req, res) => {
        // const {workout} = req.body
        // console.log(req.body)
        // const {completed, date, workout_id} = workout[0]
        // const {name, note} = req.body
        // // const altertedDate = utils.dateToNumber(date)
        // req.app.get('db').edit_workout({
        
        // name: name, 
        // date: date,
        // completed: completed,
        // note: note,
        // workout_id: workout_id
        // }).then(res => {
            // for (let i = 0; i < workout.length; i++) {
            //    if(workout[i].id) {
            //        if(workout[i].type === "Cardio") {
            //             req.app.get('db').edit_cardio_workout_item({
            //                 type: workout[i].type,
            //                 type_value: workout[i].colOne,
            //                 distance: workout[i].colTwo,
            //                 time: workout[i].colThree,
            //                 id: workout[i].id,
            //         }).then(res => {
            //             res.status(200).send("Item Was Edited")
            //         }).catch(error => {
            //             console.log('There was an Error saveChanges edit_cardio_workout_item', error)
            //         })
            //        }else {
            //             req.app.get('db').edit_weights_workout_item({
            //                 type: workout[i].type,
            //                 type_value: workout[i].colOne,
            //                 weight: workout[i].colTwo,
            //                 reps: workout[i].colThree,
            //                 sets: workout[i].colFour,
            //                 id: workout[i].id
            //        }).then(res => {
            //         res.status(200).send("Item Was Edited")
            //         }).catch(error => {
            //             console.log('There was an Error saveChanges edit_weights_workout_item', error)
            //         })
            //    }
                
            // }else {
                // if(workout[i].type === "Cardio") {
                //     req.app.get('db').create_cardio_workout_item({
                //         user_id: 1,
                //         workout_id: workout[i].workout_id,
                //         type: workout[i].type,
                //         type_value: workout[i].colOne,
                //         distance: workout[i].colTwo,
                //         time: workout[i].colThree
                //     }).then(res => {
                //         res.status(200).send('Item Was Created')
                //     }).catch(error => {
                //         console.log('There was an Error saveChanges create_cardio_workout_item', error)
                //     })
                // } else {
    //                 req.app.get('db').create_weights_workout_item({
    //                     user_id: 1,
    //                     workout_id: workout[i].workout_id,
    //                     type: workout[i].type,
    //                     type_value: workout[i].colOne,
    //                     weight: workout[i].colTwo,
    //                     reps: workout[i].colThree,
    //                     sets: workout[i].colFour
    //                 }).then(res => {
    //                     res.status(200).send('Item Was Created')
    //                 }).catch(error => {
    //                     console.log('There was an Error saveChanges create_weights_workout_item', error)
    //                 })
    //             }
    //         }
    // }
