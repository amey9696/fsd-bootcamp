// Q1- Build JavaScript Objects
var myDog = {
    "name": "moti",
    "legs": 4,
    "tail": 1,
    "friend": ["spike", "bob", "skooby doo"]
}

// Q2- Accessing Object Properties with Dot Notation
var testObj = {
    hat: "ballcap",
    shirt: "jersey"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// Q3- Accessing Object Properties with Bracket Notation
// Q4- Accessing Object Properties with Bracket Notation
var testObj = {
    "entreeValue": "hamburger",
    "drinkValue": "water"
};
testObj["entreeValue"];
testObj['drinkValue'];

// Q5- Accessing Object Properties with Variables
var testObj = {
    "playerNumber": 16,
    "playerName": "Montana"
};
var player = 'playerName';
var myPlayer = testObj[player];
console.log(myPlayer);

// Q6- Updating Object Properties
var myDog = {
    "name": "moti",
    "legs": 4,
    "tail": 1,
    "friend": ["spike", "bob", "skooby doo"]
}
myDog["name"] = "happy coder";

// Q7-Add New Properties to a JavaScript Object
var myDog = {
    "name": "moti",
    "legs": 4,
    "tail": 1,
    "friend": ["spike", "bob", "skooby doo"]
}
myDog.bark = "woof";

// Q8-Delete Properties from a JavaScript Object
var myDog = {
    "name": "moti",
    "legs": 4,
    "tail": 1,
    "friend": ["spike", "bob", "skooby doo"]
}
delete myDog.tails;

// Q9- Using Objects for Lookups
var phoneticLookup = {
    "alpha": "Adams",
    "bravo": "Bostan",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
    "": undefined
}

// Q10- Testing Objects for Properties
var checkObj = {
    "gift": "pony",
    "pet": "kitten",
    "bed": "sleigh",
    "city": "Seattle",
}
checkObj.hasOwnProperty("gift") ? console.log(checkObj['gift']): console.log("String Not Found");
checkObj.hasOwnProperty("pet") ? console.log(checkObj['pet']): console.log("String Not Found");
checkObj.hasOwnProperty("house") ? console.log(checkObj['house']): console.log("String Not Found");
checkObj.hasOwnProperty("city") ? console.log(checkObj['city']): console.log("String Not Found");
checkObj.hasOwnProperty("district") ? console.log(checkObj['district']): console.log("String Not Found");
var checkObj2 = {
    pet: "kitten",
    bed: "sleigh",
}
checkObj2.hasOwnProperty("gift") ? console.log(checkObj2['gift']): console.log("String Not Found");

// Q11- Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Romy",
        "title": "Challa",
        "release_year": 2019,
        "formats": [
            "CD",
            "PD",
        ],
    }
]

// Q12- Accessing Nested Objects
var myStorage={
    "glovebox":{
        "gloveBoxContents":"maps"
    },
}
console.log(myStorage.glovebox.gloveBoxContents);

// Q13- Accessing Nested Arrays
var myPlants=[
    {
        secondTree:"pine",
    }
]
console.log(myPlants[0].secondTree);

// Q14- Record Collection


// Q15- Iterate with JavaScript While Loops
var myArray = [];
var i = 5;
while(i >= 0) {
    myArray.push(i);
    i--;
}
console.log(myArray);

// Q-16 Iterate with JavaScript For Loops
var myArray = [];
for (var i = 1; i <= 5; i++) {
    myArray.push(i);
}
console.log(myArray);

// Q17- Iterate Odd Numbers With a For Loop
var myArray = [];
for (var i = 1; i < 10; i+=2) {
    myArray.push(i);
}
console.log(myArray);

// Q18- Count Backwards With a For Loop
var myArray = [];
for (var i = 9; i >= 1; i -= 2) {
    myArray.push(i);
}
console.log(myArray);

// Q19-Iterate Through an Array with a For Loop
// Q20- Iterate Through an Array with a For Loop
let myArr=[6,5,4,3,2];
let total=0;
for (let i=0;i<myArr.length;i++){
    total=total+myArr[i];
}
console.log("Total is",total);

// Q21- Nesting For Loops
var multiplyAll=[
    // [1],[2],[3]
    // [1,2],[3,4],[5,6,7]
    [5,1],[0.2, 4, 0.5],[3, 9]
]
var result = 1;
for(var i=0; i<multiplyAll.length; i++){
    for(var j=0; j<multiplyAll[i].length; j++){
        result *= multiplyAll[i][j];
    }
}
console.log(result);

// Q22- Replace Loops using Recursion
const sum = (arr,n) => --n<0 ? 0 : sum(arr,n) +arr[n];
console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));

// Q23- Profile Lookup
const profiles = [
    {
        "firstName": "Akira",
        "lastName": "kapoor",
        "number": "100",
        "likes": ["Movie", "Cooking"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "101",
        "likes": ["Magic","Hollywood"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "102",
        "likes": ["Intriguing Cases","Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "108",
        "likes": ["NewsPaper", "Gaming", "Books"]
    }
];

const lookUpProfile=(name,prop)=>{
    const profile=profiles.filter(profile=>profile.firstName===name);
    if(profile.length===0){
        return 'no such contact';
    }
    else{
        return profile[0][prop] ? profile[0][prop] :'no such property';
    }
}
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));
// Q23- Generate Random Fractions with JavaScript
const randomFraction=()=>Math.ceil(Math.random()*100);
console.log(randomFraction());

// Q24- It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.
const randomWholeNum=()=>Math.floor(Math.random()*10);
console.log(randomWholeNum());

// Q25-Generate Random Whole Numbers within a Range
const myMin=Math.floor(Math.random()*100);
const myMax=Math.floor(Math.random()*100);
const randomRange=(min,max)=>Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomRange(myMin,myMax));

// Q26- Use the parseInt Function
const convertToInteger=num=>parseInt(num);
console.log(convertToInteger("56"));
console.log(convertToInteger("77"));
console.log(convertToInteger("JamesBond"));

// Q27- Use the Conditional (Ternary) Operator
const checkEqual=(a,b)=> a===b ? "Equal" : "Not Equal"
console.log(checkEqual(1,2));
console.log(checkEqual(1,1));
console.log(checkEqual(1,-1));

// Q28- Use Multiple Conditional (Ternary) Operators
const checkSign=num=>  num>0 ? "Positive" : num<0 ? "Negative" : "Zero";
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));

// Q29- Use Recursion to Create a Countdown
// Q30- Use Recursion to Create a Countdown
// Q32- Use Recursion to Create a Countdown
const countdown=num=> {
    if (num < 1) {
        return [];
    } else {
        const countArray = countdown(num - 1);
        countArray.unshift(num);
        return countArray;
    }
}
console.log(countdown(-1));
console.log(countdown(10));
console.log(countdown(5));

// Q31- Use Recursion to Create a Range of Numbers
// Q33- Use Recursion to Create a Range of Numbers
const rangeOfNumbers=(startNum, endNum)=> {
    if (startNum === endNum) {
        return [startNum];
    } else {       
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}
console.log(rangeOfNumbers(1, 5)); 
console.log(rangeOfNumbers(6,9)); 
console.log(rangeOfNumbers(4,4)); 