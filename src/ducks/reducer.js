const initialState = {
    currentUser: null,
    workout: [],
    editClicked: false
}

const EDIT_WORKOUT = 'EDIT_WORKOUT';
const EDIT_TO_FALSE = 'EDIT_TO_FALSE';
const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';

function reducer(state = initialState, action) {
    switch(action.type) {

        case EDIT_WORKOUT:
        // console.log('EDIT_WORKOUT got hit', action.payload)
        return Object.assign( {}, state, {workout: action.payload, editClicked: true});

        case EDIT_TO_FALSE: 
        return Object.assign({}, state, {editClicked: false});

        case UPDATE_CURRENT_USER:
        return Object.assign( {}, state, {currentUser: action.payload})

        default:
        return state;
    }
    
}

export function setEditToFalse() {
    return {
        type: EDIT_TO_FALSE,
        payload: null
    }
}

export function editWorkout(workout) {
    return {
        type: EDIT_WORKOUT,
        payload: workout
    }
}

export function currentUserToState(user) {
    return {
        type: UPDATE_CURRENT_USER,
        payload: user
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

