const students = [
    {
        id: 0,
        name: 'Arun',
        books: ['Wings of Fire', 'Chakra'],
    },
    {
        id: 1,
        name: 'Ashok',
        books: ['Chakra', 'War and Peace', 'The Shining']
    },
    {
        id: 2,
        name: 'Balu',
        books: ['Wings of Fire', 'All about Cricket'],
    },
    {
        id: 3,
        name: 'Cathi',
        books: ['Against the wind', 'The Shining', 'War and Peace']
    },
];

//Find the common interest in books for the students
function findCommonInterest(students) {
    let bookArray = [];

    // Storing the book values in an array
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students[i].books.length; j++) {
            if (!bookArray.includes(students[i].books[j])) {
                bookArray.push(students[i].books[j]);
            }
        }
    }

    let resultObject = {};
    let studentNameArray = [];

    // Checking the each students interest in book by with elements in bookArray
    for (let i = 0; i < bookArray.length; i++) {
        for (let j = 0; j < students.length; j++) {
            for (let k = 0; k < students[j].books.length; k++) {
                if (bookArray[i] === students[j].books[k]) {
                    studentNameArray.push(students[j].name); //Pushing the names into an array
                }
            }
        }
        resultObject[bookArray[i]] = studentNameArray; //Storing the bookName and studentsName in an Object

        studentNameArray = [];
    }

    return resultObject;
}

const commonInterest = findCommonInterest(students);
console.log(commonInterest);

// Find the user who shares most interest with other users
function interestWithOther(commonInterest) {
    let tempArray = [];
    let resultObject = [];
    let studentString = "";

    for (let item in commonInterest) {
        if (commonInterest[item].length >= 2 && !studentString.includes(commonInterest[item])) { //Filtering unique pairs of studentName
                studentString += ',' + commonInterest[item]; //Storing the student name into string
                commonInterest[item] = null;
        }
    }

    studentString = studentString.split(',')
    //console.log(studentString)

    for (let i = 0; i < studentString.length; i++) {
        if (!tempArray.includes(studentString[i])) {
            tempArray.push(studentString[i]);
        } else {
            if (!resultObject.includes(studentString[i])){
                resultObject.push(studentString[i]);
            } 
        }
    }
    return resultObject;
    // const map = new Map()
    // for (let i of studentString) {
    //     let j = 1
    //     if (map.has(i)) {
    //         map.set(i, map.get(i) + 1)
    //     } else {
    //         map.set(i, j)
    //     }
    // }
    // console.log(map)
    // for(let value of map.values()){
    //     tempArray.push(value)
    // }
    // console.log(tempArray)
    // function getKey(val) {
    //     return [...map].find(([key, value]) => val === value)[0]
    //   }
    // for(i=0;i<tempArray;i++){
    //     if(tempArray[i]>1){
    //         resultObject.push(getKey(tempArray[i]))
    //     }
    // }
    // return resultObject
}

console.log(interestWithOther(commonInterest));
