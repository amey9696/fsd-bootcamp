function numberSum() {
    let num = prompt("Please enter nth term:");
    let total = 0;
    if(num>0){
        for(var i = 1; i <= num; i++){
            total=total+i;
            document.getElementById("sum").innerHTML=`Sum of all number is ${total}`
        }
    }
    else if(num==0){
        document.getElementById("sum").innerHTML=`you enter 0`;
    }
    else{
        document.getElementById("sum").innerHTML=`you enter negative value`;
    }
}
numberSum()