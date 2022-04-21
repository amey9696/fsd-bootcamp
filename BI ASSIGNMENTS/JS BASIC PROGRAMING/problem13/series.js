//2,6,12,20,30...
let n=prompt("enter the nth term of series");
function term(n)
{
     
    // Loop to add numbers
    let ans;
    for(let i = 1; i <= n; i++){
        ans =(i*i)+i;
    }  
    document.getElementById('series').innerHTML=`The ${n}th term of series is ${ans}`; 
}
term(n);