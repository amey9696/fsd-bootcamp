function fact() {
    let i;
    let fact = 1;
    let number = prompt("enter a number");
    if (number < 0) {
        // console.log("You enter -ve number");
        // document.write("You enter -ve number");
        document.getElementById('fact').innerHTML ="You enter -ve number";
    }
    else if (number == 0) {
        // console.log("You enter 0");
        // document.write("You enter 0");
        document.getElementById('fact').innerHTML ="You enter 0";
    }
    else {
        for (i = 1; i <= number; i++) {
            fact = fact * i;
        }
        document.getElementById('fact').innerHTML = `Factorial of ${number} is: ${fact}`;
        // document.write(`Factorial of ${number} is: ${fact}`);
        // console.log(`Factorial of ${number} is: ${fact}`);    
    }
}
fact()