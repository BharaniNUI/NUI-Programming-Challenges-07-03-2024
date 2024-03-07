function groupOfMultiples(arrayInput) {
    if (Array.isArray(arrayInput) && arrayInput.length > 0) {
        let tempArray = [];
        let resultArray = [];
        let resultObject = {};

        for (let i = 1; i <= 10; i++) {
            for (let j = 0; j < arrayInput.length; j++) {
                if (arrayInput[j] % i === 0) {
                    tempArray.push(arrayInput[j]);
                }
            }
            resultObject = {};
            resultObject[i] = tempArray; //Pushing the array to object
            tempArray = [];
            resultArray.push(resultObject); //Pushing the object to the array
        }
        return resultArray;
    } else {
        return `Invalid Input`;
    }

}
const arr1 = [34, 12, 10, 15, 7, 21, 81];
console.log(groupOfMultiples(arr1));