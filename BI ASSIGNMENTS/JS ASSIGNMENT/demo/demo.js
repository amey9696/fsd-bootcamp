let ele=document.getElementById("demo");
let today=new Date();
let hourNow=today.getHours();
// console.log(hourNow)
let greeting;
if (hourNow >18){ //6.pm
    greeting ='Evening';
    ele.style.color='red';
    // document.body.style.backgroundColor = "red";
}
else if(hourNow>12){ //12 pm
    greeting='Afternoon';
    ele.style.color='red';
     // document.body.style.backgroundColor = "red";
}
else if(hourNow>0){ //12am
    greeting='Morning';
    ele.style.color='red';
       // document.body.style.backgroundColor = "red";
}
else{
    greeting='welcome';
}
document.getElementById("demo").innerHTML=`let's start our ${greeting} with a new quotes`