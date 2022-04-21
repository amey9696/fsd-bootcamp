function myFun(a, b, ...rest) {
    // console.log(a); // "one" 
    // console.log(rest); // ["three", "four", "five", "six"]
}
myFun("one", "two", "three", "four", "five", "six");

let options = { 
    title: "Menu",  
    width: 100,  
    height: 200
};
let { title,  ...rest} = options; // title = title property & rest = object with rest of properties, now title="Menu", rest={height: 200, width: 100}
console.log(rest.height); // 200
console.log(rest.width); // 100
