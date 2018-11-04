const _ = require('lodash')
const utils = require('./utils.js')

module.exports = {
    newWorkout: (req, res) => {
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
                            // console.log(res[0])
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
                            // console.log(res[0])
                        })
                    }
            }
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