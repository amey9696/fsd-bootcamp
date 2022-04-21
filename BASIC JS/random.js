// let a=5;
// let b=5;
// console.log(a++); //5
// console.log(a); //6
// console.log(++a); //7
// console.log(b--); //5
// console.log(b); //4
// console.log(--b); //3
// console.log(a++ + ++a); //7+9=15
// console.log(a); //9
// console.log(b-- + --b - --a); //3+1-8=-4
// console.log(a++ * b--); //8*1

// console.log(typeof 10);
// console.log(typeof '10');
// console.log(typeof true);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof undefined);

// var num=[];
// console.log(num instanceof Number);
// console.log(num instanceof Array);

//TYPE CONVERSION
// console.log(Number('10'));
// console.log(Number('10sa'));
// console.log(Number(true));

// console.log(5 + null)	// returns 5 because null is converted to 0
// console.log("5" + null)	// returns "5null" because null is converted to "null"
// console.log("5" + 2	)// returns "52" because 2 is converted to "2"
// console.log("5" - 2	)// returns 3 because "5" is converted to 5
// console.log("5" * "2")	// returns 10 because "5" and "2" are converted to 5 and 2


// const random=()=>{
//    let a= Math.ceil(Math.random);
//    console.log(a);
// }
// random()
// return Math.ceil(Math.random());

// const random=()=> {
//     let a= Math.ceil(Math.random()*1000);
//     console.log(a);
// }
// random()

// let cars=["a","b","c"];
// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

// cars.forEach(element => {
//     console.log(element);
// });

// const numbers = [1, 2, 3,4,5];
// const result = numbers.reduce((accumulator, current) => {
//  return accumulator * current;
// });
// console.log(result);


//hello world reverse program (olleh dlrow)
// const reverse=(str)=>
//     str.split(' ').map((word) => 
//         word.split('').reverse().join(''))
//     .join(' ').toLowerCase();
// console.log(reverse("Hello World"));

//[12,20,32,65,78,15,65] convert into [[12,20],[32,65],[78,15],[65]]
// const arrOfArr=(arr)=>{
//     const result=[];
//     let smallArr=[];
//     arr.forEach((num) => {
//         if(smallArr.length===2){
//             result.push(smallArr);
//             smallArr=[];
//         }
//         smallArr.push(num);
//     });
//     if(smallArr.length){
//         result.push(smallArr);
//     }
//     return result;
// }
// console.log(arrOfArr([12,20,32,65,78,15,65]));

// let a=10;
// let b=a++;
// let c=++a;
// console.log(a,b,c); //12 10 12

// let d=5;
// console.log(d++ + ++d); //12
// console.log(d); //7

// console.log(++d + d++); //12
// console.log(d); //7

// console.log(d++ + d++); //11
// console.log(d); //7

// console.log(d-- % --d); //2
// console.log(d); //3

// self invoking function
// (function () { // anonymous self-invoking function  
//     var x = "Hello!!";  // I will invoke myself
//     console.log(x);
// })();

// let sayHi = function func(who) {
//     if (who) {
//         console.log(`Hello, ${who}`);
//     } else {    
//         func("Guest"); // use func to re-call itself
//     }
// };
// sayHi(); // Hello, Guest
// func(); // Error, func is not defined (not visible outside of the function)

// pure function
// var tax = 20;
// function calculateGST( productPrice ) {
//     console.log(productPrice * (tax / 100) + productPrice);
// }
// calculateGST(100);

// Arrow function					
// const hello = () => {			  
//     console.log("Hello World!");
// }											
// hello();

// If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword. Ex. 
// hello = () => console.log("Hello World!");
// hello();

// If you have parameters, you pass them inside the parentheses. Ex.
// hello = (fname,lname) => console.log(`Hello ${fname} ${lname}`);
// hello("amey","palshetkar");

// In fact, if you have only one parameter, you can skip the parentheses as well. Ex.
// hello = wor => console.log(`Hello ${wor}`);
// hello("world");
 
// scope
// 1. global
// let carName;//global we use var here also but can't use const
// function car(){
//     carName="bmw"
//     console.log(carName);//bmw
// }
// car()
// console.log(carName);//bmw

// function myFunction() {
//     carName = "Volvo"; //this is also global scope (if u use let/const/var here then it convert function scope)
//     console.log(carName);//bmw
// }
// myFunction();
// console.log(carName);//bmw

// 2.local
// 1 Function scope
// function car(){
//     let carName="bmw"; //function scope same for const/var also
//     console.log(carName); //bmw
// }
// car()
// console.log(carName); //error carName is not defined

// 2 block scope
// {
//     let x = 2;  //block scope
//     const y = 2; //block scope
//     var z=2; //global scope
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// console.log(x);
// console.log(y);
// console.log(z);
  

// let 
// let x=10;
// x=20; //allow
// console.log(x); //20

// var y=10;
// y=20; //allow
// console.log(y); //20

// const z=10;
// z=20; //not allow
// console.log(z); //error

// let x=10;
// let x=20; //not allow
// console.log(x); //error

// const y=10;
// const y=20; //not allow
// console.log(y); //error

// var z=10;
// var z=20; //allow
// console.log(z); //20


// {									
//     // var x = 4;   // Allowed				 	  
//     // let x = 5   // Not allowed	
//     // console.log(x);
//     let x = 5   // allowed
//     var x = 4;  // Not allowed
//     console.log(x);
// }


// const
// constant array						
// const cars = ["Saab", "Volvo", "BMW"]; 			
// console.log(cars[0] = "Toyota"); // change an element			
// console.log(cars.push("Audi")); // add an element
// console.log(cars);			
// cars = ["Toyota", "Volvo", "Audi"]; // ERROR			

// constant object
// const car = {type:"Fiat", model:"500", color:"white"};
// console.log(car.color = "red"); // change a property:
// console.log(car.owner = "Johnson"); // add a property:
// console.log(car);
// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR


// const a=5;
// let a=5;
// let b=10.256
// // var a=5;
// a++;
// // console.log(a);
// console.log(a.toString());
// console.log(b.toFixed(2));
// console.log(b.toFixed(0));
// console.log(b.toExponential(2));
// console.log(b.toPrecision());
// console.log(isNaN(5));
// console.log(isNaN('5na'));
// let mySttr='hey amey "how\ are you?\"';
let mySttr='firstLine \n \t \\secondLine \n thidLine';
// console.log(mySttr);
// console.log("FirstLine ")

// const golfScore=(par, strokes)=> {
//     if (strokes == 1) {
//         return "Hole-in-one!";
//     } else if (strokes <= par - 2) {
//         return "Eagle";
//     } else if (strokes == par - 1) {
//         return "Birdie";
//     } else if (strokes == par) {
//         return "Par";
//     } else if (strokes == par + 1) {
//         return "Bogey";
//     } else if (strokes == par + 2) {
//         return "Double Bogey";
//     } else {
//         return "Go Home!";
//     }
// }
// console.log(golfScore(4, 1));
// console.log(golfScore(4, 2));
// console.log(golfScore(5, 2));
// console.log(golfScore(4, 3));
// console.log(golfScore(4, 4));
// console.log(golfScore(1, 1));
// console.log(golfScore(5, 5));
// console.log(golfScore(4, 5));
// console.log(golfScore(4, 6));
// console.log(golfScore(4, 7));
// console.log(golfScore(5, 9));

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


var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  //if a value is set...
  if(value !==""){
    //first check if the property is not 'tracks'. If it's anything else, update
    //that entry with the new value.
    if(prop !== "tracks"){
      collection[id][prop] = value;
    }
    //otherwise if the property IS 'tracks'...
    else{
      //see if the collection id already has a 'tracks' property. If it does
      //push the new value to the array.
      if(collection[id].hasOwnProperty("tracks")){
        collection[id][prop].push(value);
      }
      //if there is no tracks property create one and add the array.
      else{
        var arr = [value];
        collection[id][prop] = arr;
      }
    }
  } //end if there's a value
  
  //if there's no value set for the property then delete that property
  else{
    delete collection[id][prop];
  }
  
  return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(2548, "artist", ""));
console.log(updateRecords(1245, "tracks", "Addicted to Love"));
console.log(updateRecords(2468, "tracks", "Free"));
console.log(updateRecords(2548, "tracks", ""));
console.log(updateRecords(1245, "albumTitle", "Riptide"));