// Collection Of Quote(in array format=we use this as api)
const quotes = [{
    quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
    author: `- Kent Beck`
}, {
    quote: `Talk is cheap. Show me the code.`,
    author: `- Linus Torvalds`
}, {
    quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
    author: `- Harold Abelson`
}, {
    quote: `Truth can only be found in one place: the code.`,
    author: `- Robert C`
}, {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: `- Muhammad Waseem`
}, {
    quote: `How you look at it is pretty much how you'll see it`,
    author: `- Steve Jobs`
}, {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: `- Alan Kay`
}, {
    quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
    author: `- C.A.R. Hoare`
}, {
    quote: `i am committed to push my branch to the master.`,
    author: `- Halgurd Hussein`
}, {
    quote: `Coding is not just code, that is a live thing to serve everyone!`,
    author: `- Ming Song`
}, ]

// New Quote Button
const quoteBtn = document.getElementById('quote-btn'); // select only those element from document(html) where id is quote-btn

// Get Quote and author Section
const quote = document.querySelector('.quote'); //query selector can select multiple elements present in quote class
const author = document.querySelector('.author');

let color = ["red", "green", "blue", "grey", "pink","#EBAE32","#C06AEB","yellow","violet","greenyellow"]; //colors declare in array
let i = 0; //index for color(array)

// Event Handler
quoteBtn.addEventListener('click', () => { //addEventListener means which action perform after click on button is decided
    let random = Math.floor(Math.random() * quotes.length);//generate random quotes number here
    // console.log(random);
    quote.innerHTML = quotes[random].quote; //quoteNo7 quoteLine write in html where the element which class is quote 
    author.innerHTML = quotes[random].author;//quoteNo7 authorname write in html where the element which class is author
    i = i < color.length ? ++i : 0; //turnary operator
    // if(i<color.length){
    //     ++i;
    // }
    // else{
    //     0
    // }
    document.querySelector("body").style.background = color[i]; //background color changes
    document.querySelector("button").style.background = color[i]; //button color change
    let ele=document.getElementById("qout");
    ele.style.color=(color[i]);//text color color changes
    let ele2=document.getElementById("auth");
    ele2.style.color=(color[i]);
    // console.log(str);ele.style.color='red';

    // document.getElementsByClassName("quote").style.fontcolor = color[i];
})

// var result = str.fontcolor(color[i]);
//   document.getElementById("demo").innerHTML = result;

let ele=document.getElementById("demo");
let today=new Date();// provide current date and time 
let hourNow=today.getHours();
// console.log(hourNow)
let greeting;
if (hourNow >18){ //6.pm
    greeting ='Evening';
    ele.style.color='white';
}
else if(hourNow>12){ //12 pm
    greeting='Afternoon';
    ele.style.color='white';

}
else if(hourNow>0){ //12am
    greeting='Morning';
    ele.style.color='white';

}
else{
    greeting='welcome';
}
document.getElementById("demo").innerHTML=`let's start our ${greeting} with a new quotes`;  //in document display this line
//template literal 
