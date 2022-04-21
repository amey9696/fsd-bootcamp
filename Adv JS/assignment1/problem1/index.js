function dis(val) {
    document.getElementById("screen").value += val
}

//function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("screen").value
    let y = eval(x)
    document.getElementById("screen").value = y
}

//function that clear the display
function clr() {
    document.getElementById("screen").value = ""
}

//function that delete one value the display
function del(){
    let num=document.getElementById("screen").value;
    let len=num.length-1;
    let newNum=num.slice(0,len);
    document.getElementById("screen").value=newNum;
}