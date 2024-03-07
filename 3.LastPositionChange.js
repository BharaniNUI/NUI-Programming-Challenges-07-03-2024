function changePosition(arrayInput, positionToChange) {
    if (Array.isArray(arrayInput) && arrayInput.length > 0 && typeof positionToChange === 'number') {
        for (let i = 0; i < positionToChange; i++) {
            const poppedNumber = arrayInput.pop(); //Popping the last value and storing it to the varaiable
            arrayInput.unshift(poppedNumber); //Appending the popped value to the start of array
        }
        return arrayInput;
    } else {
        return `Invalid Input`;
    }

}

const arr1 = [3, 45, 42, 11, 34];
const positionToChange = 2
console.log(changePosition(arr1, positionToChange))