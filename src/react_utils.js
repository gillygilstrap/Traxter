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
function sorter(a,b) {
    return a- b
}
export function dateSorter(data) {
    let tempArr = [];
    let sortedArray = [];
    for (let i = 0; i < data.length; i++) {
         tempArr.push(data[i][0].date)

    }
    // console.log(tempArr)
    tempArr.sort(function(a,b){return b-a})
    // console.log(tempArr[0])
    // console.log(data)
    
    for (let x = 0; x < data.length; x++) {
        if (tempArr[x] == data[x][0].date) {
            sortedArray.push(data[x])
            data.slice(x,1)

        }
        
    }
    // console.log(sortedArray)
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
