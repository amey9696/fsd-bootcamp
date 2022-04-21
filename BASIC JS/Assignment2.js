// 1. Access Multi-Dimensional Arrays With Indexes:
var arr = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(arr[2][1]);

// 2. Manipulate Arrays With push():
let myArray=[1, 2, 3, 4];
myArray.push(["dog", 3]);

// 3. Manipulate Arrays With pop():
console.log(myArray.pop());

// 4. Manipulate Arrays With shift():
console.log(myArray.shift());

// 5. Manipulate Arrays With unshift():
console.log(myArray.unshift(["Paul",35]));

// 6. Shopping List:
var myList=[["Chocolate Bar", 15],["milk",30],["cold-drink",30]];
myList.unshift(["potato",35]);
myList.push(["powder",50]);
console.log(myList);

// 7. Write Reusable JavaScript with Functions:
const reusableFunction=()=>"Hi World";
console.log(reusableFunction());

// 8. Passing Values to Functions with Arguments:
const testFun=(param1, param2)=> {
    return param1,param2
}
console.log(testFun("Hello", "World"));

// 9. Global Scope and Functions:
var myGlobal=10;
const fun1=()=>{
    oopsGlobal=5;
    console.log(myGlobal);
    console.log(oopsGlobal);
}
fun1()
console.log(myGlobal);
console.log(oopsGlobal);

// 10. Local Scope and Functions:
const myLocalScope=()=>{
    var myVar=10;
    return myVar;
}
console.log(myLocalScope());
// console.log(myVar); //error

// 11. Global vs. Local Scope in Functions:
var outerWear="jacket";
const myOutfit=()=>{
    var outerWear="sweater";
    return outerWear;
}
console.log(myOutfit());

// 12. Return a Value from a Function with Return:
const timesFive=(num)=>num * 5;
console.log(timesFive(5));

// 13. Understanding Undefined Value returned from a Function:
const addFive=()=>{
    var sum = sum + 5;
}
console.log(addFive());

// 14. Assignment with a Returned Value:
const processArg=(processed)=> processed;
console.log(processArg(7));

// 15. Stand in Line:
const nextInLine=(arr,item)=>{
    arr.push(item);
    return arr.shift();
}
console.log(nextInLine([1,2,3,4],5));

// 16. Understanding Boolean Values:
const welcomeToBooleans=button=> button=="clicked" ?  true : false;
console.log(welcomeToBooleans("clicked"));
console.log(welcomeToBooleans("not clicked"));

// 17. Use Conditional Logic with If Statements:
const test =wasThatTrue=> {
    if (wasThatTrue) {
        return "That was true";
    }else{
        return "That was false";
    }
}
console.log(test(true));
console.log(test(false));

// 18. Comparison with the Equality Operator:
// 19. Comparison with the Equality Operator:
const equalityTest=val=> val == 12 ? "Equal": "Not Equal";   
console.log(equalityTest(12));
console.log(equalityTest('12'));
console.log(equalityTest('13'));

// 20. Comparison with the Strict Equality Operator:
const strictEqualityTest=val=> val === 12 ? "Equal": "Not Equal";
console.log(strictEqualityTest(12));
console.log(strictEqualityTest('12'));