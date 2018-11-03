module.exports = {
    dateToNumber: (arr) => {
        let tempArr = arr.split('/');
        if (tempArr[0] < 10 && tempArr[0].charAt(0) != 0) {
            tempArr[0] = '0'+ tempArr[0]
        }
        if (tempArr[1] < 10 && tempArr[1].charAt(0) != 0) {
            tempArr[1] = '0'+ tempArr[1]
        }
        let tempYear = tempArr[2]
        tempArr.splice(2,1);
        tempArr.unshift(tempYear)
        let yearValue = tempArr.join('')
        yearValue = parseInt(yearValue)
        // console.log(yearValue, typeof yearValue)
        return yearValue;
    }
}

// let tempArr = date.split('/');
        // if (tempArr[0] < 10 && tempArr[0].charAt(0) != 0) {
        //     tempArr[0] = '0'+ tempArr[0]
        // }
        // if (tempArr[1] < 10 && tempArr[1].charAt(0) != 0) {
        //     tempArr[1] = '0'+ tempArr[1]
        // }
        // let tempYear = tempArr[2]
        // tempArr.splice(2,1);
        // tempArr.unshift(tempYear)
        // let yearValue = tempArr.join('')
        // yearValue = parseInt(yearValue)
        // console.log(yearValue, typeof yearValue)
        // req.app.get('db').create_workout({

        // })