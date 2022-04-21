// //1 5 6
// let a=1;
// let b=5;
// let c=6;

// let tot=(-b+Math.sqrt(b*b-4*a*c))/2*a;
// let tot2=(-b-Math.sqrt(b*b-4*a*c))/2*a;

// console.log(tot);
// console.log(tot2);

function sqrtFind() {
    
let a=1;
let b=5;
let c=6;
    // let a = prompt("Please enter a:");
    // let b = prompt("Please enter b:");
    // let c = prompt("Please enter c:");
  
    let tot=(-b+Math.sqrt(b*b-4*a*c))/2*a;
    tot=tot.toFixed(2);
    let tot2=(-b-Math.sqrt(b*b-4*a*c))/2*a;
    tot2=tot2.toFixed(2);

    console.log(tot);
    console.log(tot2);
    // document.getElementById("sqr").innerHTML=`answer is ${tot}`;
    // document.getElementById("sqrt").innerHTML=`answer is ${tot2}`;
}
sqrtFind()