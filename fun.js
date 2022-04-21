// "use strict"

var fruits=["mango","banana","orange"];
let [m,b,o]=fruits;
// console.log(m)
// console.log(b)
// console.log(o)

// const copy=fruit.forEach(fruit=>{
//     console.log(fruit);
// })
// const copy=fruit.map(fruit=>{
//     return fruit;
// })
// console.log(copy);

// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i]);
// }

for (let fruit of fruits){
    // console.log(fruit);
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
//   txt += numbers[x] + "<br>"; 
    // console.log(txt += numbers[x]+"<br>") //txt =txt+ numbers[x]
}
// console.log(...fruits); //spread
// console.log(fruits); 

let ans=
[    {
        id:1,
        name:"aaa",
        age:25
    },
    {
        id:2,
        name:"aaa",
        age:25
    },
]

let {id,name,age}=ans;
// console.log(id)
// console.log(name)
// console.log(age)

//remove duplicate elements
// const num=[1,2,3,1,2,3,4,5,6,4,7,8,9,3,2,1];
const num=["aa","aa","bcs"];
// console.log(new Set(num));

// console.log(Math.ceil(Math.random()*10));
// console.log(Math.random()*100);

// check given number is even or not? 11

// let number=21;
// if(number <10){
//     console.log("num less than 10");
// }
// else if(number >10 && number <20){
//     console.log("num greater than 10 & less than 20");
// }
// else{
//     console.log("num greater than 20");
// }

//turnary
// (number%2==0) ? console.log("even num") : console.log("odd num")

// (number <10) ? console.log("num less than 10") : (number >10 && number <20) ? 
// console.log("num greater than 10 & less than 20") :console.log("num greater than 20")

// {
//     const a=5;
//     console.log(a);
// }
// console.log(a);

// function add(){
//     let a=5;
//     // console.log(a);
// }
// add()
// console.log(a);

a=10;
// console.log(a);
var a;

// console.log(func);
// var func=function add(){
//     var a=5;
//     // console.log(a);
//     return a;
// }

// function add(){
//     let a=5;
//     function mux(){
//         console.log(a);
//         var ab=55;
//         console.log(ab);
//     }
//     mux()
//     console.log(ab);
// }
// add()

for (let i=0;i<10;i++){
    // console.log(i)
    if(i==3){
        continue;
    }
    // console.log(i)
}


//switch
// let day=1;
// switch(day){
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("monday");
//         break;
//     case 3:
//         console.log("tuesday");
//         break;
//     case 4:
//         console.log("wednesday");
//         break;
//     case 5:
//         console.log("thursday");
//         break;
//     case 6:
//         console.log("friday");
//         break;
//     case 7:
//         console.log("saturday");
//         break;
//     default:
//         console.log("wrong choice")
// }


x=5;
console.log(typeof x);
var x;