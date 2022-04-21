// function nextInLine(arr,item){
//     console.log(arr.push(item));
//     console.log(arr);
//     console.log(arr.shift());
//     console.log(arr);

// }
// nextInLine([1,2,3,4],5)

//Diff between forEach and Map

const fruits = ["banana", "mango", "orange", "chiku"];
// console.log(fruits.sort());

const copy = fruits.forEach(fruit => {
    // console.log(fruit); //"banana", "mango", "orange", "chiku"
})
// console.log(copy); //undefined

const cut = fruits.map(fruit => {
    // return `${fruit}s`;
})
// console.log(cut);

//Remove duplicate element from array
const numbers = [100, 21, 3, 4, 1, 2, 3, 4];
// console.log(numbers.sort());

const set = new Set(numbers);
// console.log(set);
const arr = Array.from(set);
// console.log(arr);

//sort number array
const numbs = [100, 21, 3, 4, 1, 2, 3, 4];
console.log(numbs.sort((a, b) => a - b));
console.log(numbs.sort((a, b) => b - a));

//tiemout
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         // console.log(i);
//     }, 1000);
// }

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         // console.log(i);
//     }, 1000);
// }

// for (var i = 0; i < 5; i++) {
//     setTimeout(((j) => {
//         // console.log(j);
//     })(i), 1000);
// }


