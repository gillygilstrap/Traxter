const initialState = {
    currentUser: null,
    workout: [],
    editClicked: false
}

const EDIT_WORKOUT = 'EDIT_WORKOUT'

function reducer(state = initialState, action) {
    switch(action.type) {

        case EDIT_WORKOUT:
        console.log('EDIT_WORKOUT got hit', action.payload)
        return Object.assign( {}, state, {workout: action.payload, editClicked: true});

        default:
        return state;
    }
    
}



export function editWorkout(workout) {
    return {
        type: EDIT_WORKOUT,
        payload: workout
    }
}


export default reducer;


// -------------------------------------------------------


// case UPDATE_HOUSE:
// console.log(action.payload)
// const { name, address, city, St, zipcode} = action.payload
// return Object.assign( {}, state, { name: name, address: address, city: city, St: St, zipcode: zipcode } );





// export function updateHouse( name, address, city, St, zipcode ) {
//     console.log('----------BANG!!!!----------', "Function got hit");
//     return {
//       type: UPDATE_HOUSE,
//       payload: {
//           name: name,
//           address: address,
//           city: city,
//           St: St,
//           zipcode: zipcode
//       }
         
//   }
// }






// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case USER_LOGIN:
//         return {...state, user: action.payload}
 

//     default:
//     return state;
// }
// }
// export function userLogin(user) {
// return {
//     type: USER_LOGIN,
//     payload: user
// }
// }

