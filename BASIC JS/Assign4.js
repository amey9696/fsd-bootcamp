//3
// const lookUpProfile = (name, prop) => {
//     const profile = profiles.filter(profile => profile.firstName === name);
//     if(profile.length) {
//     return prop in profile ? profile[prop] : 'No such property';
//     } else {
//     return 'No such contact';
//     }
//    }


// Write a JavaScript function to find a word within a string? 
// File name suggestion: searchWord.js 
// Test Data : 
// console.log(searchWord(‘The quick brown fox’, ‘fox’)); // “‘fox’ was found 1 times.” 
// console.log(searchWord(‘aa, bb, cc, dd, aa’, ‘aa’)); // “‘aa’ was found 2 times.”

// function searchWord(string,word){
//     let str=string.split(" ");
//     console.log(str);
    
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === word) {
//             console.log(word,"was found at "+i + " place");
//         }
//         else{
//             console.log("not found");
//         }
//     }
// }
// searchWord("The quick brown fox","fox");

// const seriesNum = (n) =>(n>0) ?  return num*num : return "Error"
// seriesNum(25);

// Write a JavaScript program to find the most frequent item of an array.  
// File name suggestion: frequent.js 
// TestData: 
// console.log(frequent([3, ‘a’, ‘a’, ‘a’, 2, 3, ‘a’, 3, ‘a’, 2, 4, 9, 3])); // a ( 5 times ) 
// console.log(frequent([1, 2, 3, 4, 5])); // 1 ( 1 time ) 
// console.log(frequent([5, 2, 3, 1, 2, 4, 1])); // 2 ( 2 times ) 12:34 pm 
var arr1=[5, 2, 3, 1, 2, 4, 1];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
// return item+" ( " +mf +" times ) ";
console.log(item+" ( " +mf +" times ) ") ;



const frequent = arr => {
    const obj = {};
    for(let item of arr) {
    if(item in obj) {
    obj[item] += 1;
    } else {
    obj[item] = 1;
    }
    }
    let maxCount = 0, result;
    for(let key in obj) {
    if(obj[key] > maxCount) {
    maxCount = obj[key];
    result = [key, obj[key]];
    }
    }
    return `${result[0]} (${result[1]} times)`
   }