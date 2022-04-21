// Q1- Practice comparing different values
const compareEquality=(a,b)=>
    (a===b) ?  "Equal":  "Not Equal";

console.log(compareEquality(10,"10"));
console.log(compareEquality("20",20));

// Q2- Comparison with the Inequality Operator
let num=99;
const testNotEqual=a=> num!=a? "Not Equal":"Equal"
console.log(testNotEqual(99));
console.log(testNotEqual("99"));
console.log(testNotEqual(12));
console.log(testNotEqual("12"));
console.log(testNotEqual("bob"));


// Q3- Comparison with the Strict Inequality Operator
let number=17;
const testStrictNotEqual=num=> number!==num? "Not Equal":"Equal";
console.log(testStrictNotEqual(17));
console.log(testStrictNotEqual("17"));
console.log(testStrictNotEqual(12));
console.log(testStrictNotEqual("bob"));

// Q4- Comparison with the Greater Than Operator
const testGreaterThan=(num)=>{
    if(11>num){
        return "10 or under";
    }else if(num>100){
        return "over 100";
    }else{
        return "over 10";
    }
}
console.log(testGreaterThan(0));
console.log(testGreaterThan(10));
console.log(testGreaterThan(11));
console.log(testGreaterThan(99));
console.log(testGreaterThan(100));
console.log(testGreaterThan(101));
console.log(testGreaterThan(150));

// Q5- Comparison with the Greater Than Or Equal To Operator
const testGreaterOrEqual=(num)=>{
    if(9>=num){
        return "Less than 10";
    }else if(19>=num){
        return "10 or over";
    }else{
        return "20 or over";
    }
}
console.log(testGreaterOrEqual(0));
console.log(testGreaterOrEqual(9));
console.log(testGreaterOrEqual(10));
console.log(testGreaterOrEqual(11));
console.log(testGreaterOrEqual(19));
console.log(testGreaterOrEqual(100));
console.log(testGreaterOrEqual(21));

// Q6-Comparison with the Less Than Or Equal To Operator
const testLessOrEqual=(num)=>{
    if(num<=12){
        return "smaller than or equal to 12"
    }else if(num<=24){
        return "smaller than or equal to 24"
    }else{
        return "more than 24";
    }
}    
console.log(testLessOrEqual(0));
console.log(testLessOrEqual(11));
console.log(testLessOrEqual(12));
console.log(testLessOrEqual(23));
console.log(testLessOrEqual(24));
console.log(testLessOrEqual(25));
console.log(testLessOrEqual(55));

// Q7- Comparisons with the Logical And Operator
const testLogicalAnd=(num)=>{
    if(num>=25 && num<=50){
        return "Yes";
    }
    else{
        return "No";
    }
}
console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));

// Q8-Comparisons with the Logical Or Operator
const testLogicalOr=(num)=>{
    if (num >= 10 && num <= 20 || num <0){
        return "Inside";
    }else{
        return "Outside";
    }
}
console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(25));

// Q9-Introducing Else Statements
const testElse=(num)=>{
    if(num<=5){
        return "5 or Smaller";
    }
    else{
        return "Bigger than 5";
    }
}
console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));


// Q10- Introducing Else If Statements
// Q11-Introducing Else If Statements
const testElseIf=(num)=>{
    if(num<5){
        return "Smaller than 5";
    }
    else if(num>=5 && num<=10){
        return "between 5 and 10";
    }
    else{
        return "Greater than 10";
    }
}
console.log(testElseIf(0));
console.log(testElseIf(5));
console.log(testElseIf(7));
console.log(testElseIf(10));
console.log(testElseIf(12));

// Q12- Logical Order in If Else Statements
const orderMyLogic=(num)=>{
    if(num<5){
        return "Less than 5";
    }
    else if(num<10){
        return "Less than 10";
    }
    else{
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(11));

// Q13-Chaining If Else Statements
const testSize=(num)=>{
    if(num<5){
        return "Tiny";
    }
    else if(num<10){
        return "Small";
    }
    else if(num<15){
        return "Medium";
    }
    else if(num<20){
        return "Large";
    }
    else{
        return "Huge";
    }
}
console.log(testSize(0));
console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(8));
console.log(testSize(10));
console.log(testSize(14));
console.log(testSize(15));
console.log(testSize(17));
console.log(testSize(20));
console.log(testSize(25));

// Q14- Golf Code
const golfScore=(par, strokes)=> {
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }
}
console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));

// Q15-Selecting from Many Options with Switch Statements
const caseInSwitch=(num)=>{
    switch(num){
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
    }
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

// Q16-Adding a Default Option in Switch Statements
const switchOfStuff=(value)=>{
    switch(value){
        case "a":
            return "apple";
            break;
        case "b":
            return "bird";
            break;
        case "c":
            return "cat";
            break;
        default:
            return "stuff";
    }
}
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff(4));

// Q17- Multiple Identical Options in Switch Statements
const sequentialSizes=(num)=>{
    switch(num){
        case 1:
        case 2:
        case 3:
            return "Low";
            break;
        case 4:
        case 5:
        case 6:
            return "Medium";
            break;
        case 7:
        case 8:
        case 9:
            return "High";
            break;
        default:
            return "wrong choice";
    }
}
console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(3));
console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(6));
console.log(sequentialSizes(7));
console.log(sequentialSizes(8));
console.log(sequentialSizes(9));

// Q18- Replacing If Else Chains with Switch
const chainToSwitch=(value)=>{
    switch(value){
        case "bob":
            return "Marley";
            break;
        case 42:
            return "The Answer";
            break;
        case 1:
            return "There is no #1";
            break;
        case 99:
            return "Missed me by this much!";
            break;
        case 7:
            return "Ate Nine";
            break;
        default:
            return '" "';
    }
}
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(42)); 
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));
console.log(chainToSwitch("John")); 
console.log(chainToSwitch(156));

// Q19- Returning Boolean Values from Functions
const isLess=(a,b)=> a<b;
console.log(isLess(10,15));
console.log(isLess(15,10));

// Q20-Return Early Pattern for Functions
const myFun=(num1,num2)=> num1<0 || num2<0 ? "undefined": num1+num1*num2;
    
console.log(myFun(2,2)); 
console.log(myFun(-2,2)); 
console.log(myFun(2,-2)); 
console.log(myFun(2,8));
console.log(myFun(3,3));
console.log(myFun(0,0));