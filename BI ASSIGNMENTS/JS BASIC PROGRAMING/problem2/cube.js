function findCube(){
    let n = prompt("Please enter number:");
    if(n<0){
        document.getElementById("cube").innerHTML ="Please Enter positive number.."
    }
    else if(n==0){
        document.getElementById("cube").innerHTML ="The value must be greater than 0"
    }
    else{
        let cube=n*n*n;
        document.getElementById("cube").innerHTML =`cube is ${cube}`;
        // document.write("cube is: "+cube);
    }   
}
findCube();

