function numberOfPairs(arrayInput, sum) {
    if(Array.isArray(arrayInput) && arrayInput.length > 0 && typeof sum === 'number'){
        let count = 0;
        
        for (let i = 0; i < arrayInput.length; i++) {
            for (let j = i + 1; j < arrayInput.length; j++) {
                if (i + j === sum) { //Comparing the sum by adding array values
                    count++;
                }
            }
        }
        return count;
    }
}

const arr1 = [4, 2, 5, 6, 8, 1];
const sum = 6;
console.log(numberOfPairs(arr1, sum));