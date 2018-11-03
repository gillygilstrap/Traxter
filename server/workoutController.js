const _ = require('lodash')
const utils = require('./utils.js')

module.exports = {
    newWorkout: (req, res) => {
        const {completed, workoutName, note, workout, date} = req.body
        const altertedDate = utils.dateToNumber(date)
        // console.log(workout[0].colOne)
        // console.log(altertedDate)
        req.app.get('db').create_workout({
            
            name: workoutName, 
            date: altertedDate,
            completed: completed,
            note: note
        }).then( workouts => {
                // console.log('workouts', workouts[0].id)
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
                            console.log(res[0])
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
        // console.log('----------BANG!!!!----------', "top of get all");
        const {id} = req.params
        // console.log(id)
        req.app.get('db').get_all_workouts({id: id}).then(workouts => {
            // console.log(_.groupBy(workouts, 'workout_id'))

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
                // console.log(bigArray)
                x = 1;
            //   console.log(reduced)
            //   let reduced = testArray.reduce((r,a) => {
            //     r[a.id] = r[a.id] || [];
            //     r[a.id].push(a);
            //     return r
            //   }, Object.create(null));
              
            //   console.log(reduced)

        //    let num = 1
        //    let tempArray = []
        //     let changerArray[num] = 

        //          if (workouts[i].workout_id == 1) {
        //     //         obj[i] = {[x] : workouts[i]};
                    
        //     //         x++
        //     //     }else {x=1}
                
        //     //     // console.log(obj)
                
                    
            //  } //     

            res.status(200).json(bigArray)
        }).catch(error => {
            console.log("error in getAll Workout", error)
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