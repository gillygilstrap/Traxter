export function dateShaper(num) {
    let tempArr = num.toString().split('')
    tempArr.splice(4,0,'/')
    tempArr.splice(7,0,'/')
    let newTempArr = tempArr.join('').split('/')
    let year = newTempArr[0];
    newTempArr.shift()
    newTempArr.push(year)
    newTempArr.splice(1,0,'/')
    newTempArr.splice(3,0,'/')
    return newTempArr.join('')
}

export function dateSorter(data) {

    const sortedData = data.sort((a,b) => {
        return b[0].date-a[0].date
    })
 
    return sortedData;
}

export function workoutArrayFormatter(arr) {
    let tempArr = []
    for(let i = 0; i< arr.length; i++) {
        if (arr[i].type === "Cardio") {
            tempArr.push({
                colOne: arr[i].type_value,
                colTwo: arr[i].distance,
                colThree: arr[i].time,
                colFour: '',
                id: arr[i].id,
                type: arr[i].type,
                completed: arr[i].completed,
                workout_id: arr[i].workout_id,
                date: arr[i].date,
                name: arr[i].name,
                note: arr[i].note
            })
        }else {
            tempArr.push({
                colOne: arr[i].type_value,
                colTwo: arr[i].weight,
                colThree: arr[i].reps,
                colFour: arr[i].sets,
                id: arr[i].id,
                type: arr[i].type,
                completed: arr[i].completed,
                workout_id: arr[i].workout_id,
                date: arr[i].date,
                name: arr[i].name,
                note: arr[i].note
            })
        }
    }
    return tempArr
}

export function distanceMultiplesRemoved(arr) {
        let filteredArray = []
        for(let i = 0;i < arr.length; i++){
            if(filteredArray.indexOf(arr[i]) === -1 && arr[i] !== ""){
                filteredArray.push(arr[i])
            }
        }
        return filteredArray
}

export function nameMultiplesRemoved(arr) {
    let names = arr.map(elem => {
        return elem[0].name
    })

    let filteredArray = []
        for(let i = 0;i < names.length; i++){
            if(filteredArray.indexOf(names[i]) === -1 && names[i] !== ""){
                filteredArray.push(names[i])
            }
        }
        return filteredArray
    
}
