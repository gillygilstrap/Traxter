export function dateShaper(num) {
    let tempArr = num.toString().split('')
    
    tempArr.splice(4,0,'/')
    tempArr.splice(7,0,'/')
    let newTempArr = tempArr.join('').split('/')
    let year = newTempArr[0];
    newTempArr.shift()
    newTempArr.push(year)
    // newTempArr.join('/')
    newTempArr.splice(1,0,'/')
    newTempArr.splice(3,0,'/')
    return newTempArr.join('')
}

export function dateSorter(data) {
//     let tempArr = [];
//     let sortedArray = [];
//     for (let i = 0; i < data.length; i++) {
//         tempArr.push(data[i][0])

//    }



    // for (let i = 0; i < data.length; i++) {
    //      tempArr.push(data[i][0].date)

    // }
    // console.log("data",data)
    // tempArr.sort(function(a,b){
    //     return b.date-a.date
    // })
    const sortedData = data.sort((a,b) => {
        return b[0].date-a[0].date
    })
    // console.log('sortedData',sortedData)
    // console.log(data)
    
    // for (let x = 0; x < data.length; x++) {
    //     // console.log(data[x][0].date)
    //     if (tempArr[x] === data[x][0].date) {
    //         sortedArray.push(data[x])
    //         data.splice(x,1)
    //         console.log('sortedArray', sortedArray)
    //     }
        
    // }
    return sortedData;
}

export function workoutArrayFormatter(arr) {
    // console.log(arr)
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



// tempArr.push(tempArr.shift())
// tempArr.push(tempArr.shift())
// tempArr.push(tempArr.shift())
// tempArr.push(tempArr.shift())
// tempArr.splice(4,0,'/')
// tempArr.splice(7,0,'/')
// return tempArr.join('')


    // const finalDate =  newTempArr.join('')
    // console.log(finalDate)
    // console.log(newTempArr.splice)
    // let arr = Array.from(String(num), Number);
    // console.log(newTempArr)
