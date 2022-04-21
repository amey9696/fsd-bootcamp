function findSeries(){
    let n = prompt("Please enter nth term of series:");
    if(n>0){
        let square=n*n;
        document.getElementById("series").innerHTML =`${n}th term of series is ${square}`;
        // document.write("cube is: "+cube);
    }
    else if(n==0){
        document.getElementById("series").innerHTML ="you enter 0";
    }
    else{
        document.getElementById("series").innerHTML ="you enter negative value";
    }
    
}
findSeries();