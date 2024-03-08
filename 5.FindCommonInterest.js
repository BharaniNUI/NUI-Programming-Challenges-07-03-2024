const students = [
    {
        id: 0,
        name: 'Arun',
        bookUserss: ['Wings of Fire', 'Chakra'],
    },
    {
        id: 1,
        name: 'Ashok',
        bookUserss: ['Chakra', 'War and Peace', 'The Shining']
    },
    {
        id: 2,
        name: 'Balu',
        bookUserss: ['Wings of Fire', 'All about Cricket'],
    },
    {
        id: 3,
        name: 'Cathi',
        bookUserss: ['Against the wind', 'The Shining', 'War and Peace']
    },
];

//Find the common interest in bookUserss for the students
function findCommonInterest(students) {
    let bookUsersArray = [];

    // Storing the bookUsers values in an array
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students[i].bookUserss.length; j++) {
            if (!bookUsersArray.includes(students[i].bookUserss[j])) {
                bookUsersArray.push(students[i].bookUserss[j]);
            }
        }
    }

    let resultObject = {};
    let studentNameArray = [];

    // Checking the each students interest in bookUsers by with elements in bookUsersArray
    for (let i = 0; i < bookUsersArray.length; i++) {
        for (let j = 0; j < students.length; j++) {
            for (let k = 0; k < students[j].bookUserss.length; k++) {
                if (bookUsersArray[i] === students[j].bookUserss[k]) {
                    studentNameArray.push(students[j].name); //Pushing the names into an array
                }
            }
        }
        resultObject[bookUsersArray[i]] = studentNameArray; //Storing the bookUsersName and studentsName in an Object

        studentNameArray = [];
    }

    return resultObject;
}

const commonInterest = findCommonInterest(students);
console.log(commonInterest);

//Find the common interest in bookUserss for the students
function interestWithOther(commonInterest) {

    let resultObject = {};
    let users=[];

    for (const bookUsers in commonInterest) { //Iterating all book users
        if(!users.includes(bookUsers) && commonInterest[bookUsers].length>=2){ //Checking the length of each set of users 
            users=commonInterest[bookUsers]; //Pushing book users to users Array
        }
        
        for (const user of users) { //Adding each user to Object
            if (resultObject[user]) { //Increasing the user count 
                resultObject[user]++;
            }
            else {
                resultObject[user] = 1; //Assigning default user count
            }
        }
    }

    let sharedUsers = [];
    sharedUsers=Object.keys(resultObject); //Assigning each user to a variable

    const result = sharedUsers.filter(user=>{ //Using filter() filtering the user with max count
        return (resultObject[user] === Math.max(...Object.values(resultObject)));
    })
    return result;
   
}

console.log(interestWithOther(commonInterest));
