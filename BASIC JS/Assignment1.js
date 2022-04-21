// 1. Comment Your JavaScript Code
//This is a comment 
/*this is
multiline 
comment */

// 2. Declare JavaScript Variables :
var myName="Amey";

// 3. Storing Values with the Assignment Operator:
var a;
a=7;

// 4. Assigning the Value of One Variable to Another :
var b;
b=a;

// 5. Initializing Variables with the Assignment Operator:
var myNum=9;

// 6. Understanding Uninitialized Variables:
// var a=5nam; //NaN
var a=5;
var b=10;
var c=15
var d="i am a";

// 7. Understanding Case Sensitivity in Variables:
var myVar="amey";
var MyVar="amey";

// 8. Add Two Numbers with JavaScript:
var sum=a+b;
console.log(sum);

// 9. Subtract One Number from Another with JavaScript:
var sub=a-b;
console.log(sub);

// 10. Multiply Two Numbers with JavaScript:
var mux=a*b;
console.log(mux);

// 11. Divide One Number by Another with JavaScript:
var div=a/b;
console.log(div);

// 12. Increment a Number with JavaScript:
var num=5;
num++;
console.log(num);

// 13. Decrement a Number with JavaScript:
var number=5;
number--;
console.log(number);

// 14. Create Decimal Numbers with JavaScript:
var myDecimal=5.7;

// 15. Multiply Two Decimals with JavaScript:
var num1=2.5;
var num2=2.0;
var result=num1*num2;
console.log(result.toFixed(1));

//16. Divide One Decimal by Another with JavaScript:
var result2=num1/num2;
console.log(result2.toFixed(1));

//17. Finding a Remainder in JavaScript:
var ans=11%3;
console.log(ans);

// 18. Compound Assignment With Augmented Addition:
var a=5;
var b=5;
var c=5;
a+=5
b+=5
c+=5
console.log(a,b,c);

// 19. Compound Assignment With Augmented Subtraction:
var a=5;
var b=5;
var c=5;
a-=5
b-=5
c-=5
console.log(a,b,c);

// 20. Compound Assignment With Augmented Multiplication:
var a=5;
var b=5;
var c=5;
a*=5
b*=5
c*=5
console.log(a,b,c);

// 21. Compound Assignment With Augmented Division:
var a=5;
var b=5;
var c=5;
a/=5
b/=5
c/=5
console.log(a,b,c);

// 22. Declare String Variables:
var myFirstName="Amey"
var myLastName="Palshetkar"

// 23. Escaping Literal Quotes in Strings:
var myStr="I am a \"double quoted\" string inside \"double quotes\" ";
console.log(myStr);

//24. Quoting Strings with Single Quotes:
var myStr='hey amey "how\ are you?\"';
console.log(myStr);

// 25. Escape Sequences in Strings:
var myStr='firstLine \n \t \\secondLine \n thidLine';
console.log(myStr);

// 26. Concatenating Strings with Plus Operator:
var myStr='This is the start'+' and This is the end.';
console.log(myStr);

// 27. Concatenating Strings with the Plus Equals Operator:
var myStr='This is the first sentence.';
myStr+='and This is the second sentence.';
console.log(myStr);

// 28. Constructing Strings with Variables:
var myName="amey";
var myStr='My name is'+ myName + 'and I am well';
console.log(myStr);

// 29. Appending Variables to Strings:
var someAdjective="amey";
var myStr="My name is";
myStr+=someAdjective;
console.log(myStr);

// 30. Use Bracket Notation to Find the First Character in a String:
var lastName="Palshetkar";
var firstLetterOfLastName=lastName[0];
console.log(firstLetterOfLastName);

// 31. Find the Length of a String:
var firstName = "Ada";
var lastNameLength=firstName.length;
console.log(lastNameLength);

// 32. Understand String Immutability:
var myStr="Hello World";
myStr[0] = "J";
console.log(myStr);

// 33. Use Bracket Notation to Find the Nth Character in a String:
var lastName="Palshetkar";
var thirdLetterOfLastName=lastName[2];
console.log(thirdLetterOfLastName);

// 34. Use Bracket Notation to Find the Last Character in a String:
var lastName="Palshetkar";
var lastLetter = lastName[lastName.length - 1];
console.log(lastLetter);

// 35. Use Bracket Notation to Find the Nth-to-Last Character in a String:
var lastName="Palshetkar";
var thirdToLastLetter = lastName[lastName.length - 3];
console.log(thirdToLastLetter);

// 36. Word Blanks:
var myAdjective="hot"
var myVerb="laughed"
var myAdverb="silly";
var sentence = "It was really " + myAdjective + ", and we " + myVerb + " ourselves " +myAdverb + ".";
console.log(sentence);

// 37. Store Multiple Values in one Variable using JavaScript Arrays:
var myArray=["Mango","Rose", 12, 100, true];

// 38. Nest one Array within Another Array:
var myArrays=[["name","amey"],["lastName","Palshetkar"]];

// 39. Access Array Data with Indexes:
var myData=myArray[0];

// 40. Modify Array Data With Indexes:
myArray[0]=45;