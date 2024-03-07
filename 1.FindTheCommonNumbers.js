function findCommon(arrayInput1, arrayInput2) {
    if (arrayInput1.length > 0 && arrayInput2.length > 0
        && Array.isArray(arrayInput1) && Array.isArray(arrayInput2)) {
        let resultArray = [];

        //filter() is used to find common value between two arrays
        resultArray = arrayInput1.filter(x => arrayInput2.includes(x));
        
        resultArray.sort(); //Sorting the common number
        return resultArray;
    } else {
        return `Invalid Input`;
    }

}

const arr1 = [3, 45, 42, 11, 34];
const arr2 = [35, -7, 87, 11, 1, 45];
console.log(findCommon(arr1, arr2));