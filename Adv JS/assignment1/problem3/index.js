//design
document.body.style.margin = "0%";
document.body.style.padding = "0%";
document.body.style.backgroundColor = "#ffa500";

const container = document.createElement("div");
container.style.margin = "100px auto";
container.style.textAlign = "center";

const heading=document.createElement("h1");
heading.innerHTML="STOPWATCH";
heading.style.fontSize="4em";
heading.style.fontFamily="sans-serif";
heading.style.color="#fff";

const heading2=document.createElement("h1");
heading2.innerHTML="JAVASCRIPT STOPWATCH";
heading2.style.fontSize="4em";
heading2.style.fontFamily="sans-serif";
heading2.style.color="#fff";

const para=document.createElement("p");
para.style.fontSize="5em";
para.style.color="#fff";

const span1=document.createElement("span");
span1.innerHTML="00"
span1.setAttribute("id","minute");

const span2=document.createElement("span");
span2.innerHTML=":"

const span3=document.createElement("span");
span3.innerHTML="00"
span3.setAttribute("id","second");

const span4=document.createElement("span");
span4.innerHTML=":"

const span5=document.createElement("span");
span5.innerHTML="00"
span5.setAttribute("id","tens");

const startButton=document.createElement("button");
startButton.innerHTML="Start";
startButton.style.border="2px solid white";
startButton.style.borderRadius="5px";
startButton.style.padding="18px 10px";
startButton.style.fontSize="1.2em";
startButton.style.width="180px";
startButton.style.margin="18px";
startButton.style.color="#fff";
startButton.style.backgroundColor="#ffa500";
startButton.setAttribute("id","btn-start");
startButton.setAttribute("class","btn");

const stopButton=document.createElement("button");
stopButton.innerHTML="Stop";
stopButton.style.border="2px solid white";
stopButton.style.borderRadius="5px";
stopButton.style.padding="18px 10px";
stopButton.style.fontSize="1.2em";
stopButton.style.width="180px";
stopButton.style.margin="18px";
stopButton.style.color="#fff";
stopButton.style.backgroundColor="#ffa500";
stopButton.setAttribute("id","btn-stop");
stopButton.setAttribute("class","btn");

const resetButton=document.createElement("button");
resetButton.innerHTML="Reset";
resetButton.style.border="2px solid white";
resetButton.style.borderRadius="5px";
resetButton.style.padding="18px 10px";
resetButton.style.fontSize="1.2em";
resetButton.style.width="180px";
resetButton.style.margin="18px";
resetButton.style.color="#fff";
resetButton.style.backgroundColor="#ffa500";
resetButton.setAttribute("id","btn-reset");
resetButton.setAttribute("class","btn");

para.appendChild(span1);
para.appendChild(span2);
para.appendChild(span3);
para.appendChild(span4);
para.appendChild(span5);
container.appendChild(heading);
container.appendChild(heading2);
container.appendChild(para);
container.appendChild(startButton);
container.appendChild(stopButton);
container.appendChild(resetButton);
document.body.appendChild(container);

//hover
window.onload = function() {
    // document.getElementsByClassName(".btn").onmouseover = function()
    // {
    //     this.style.backgroundColor = "#000";
    //     this.style.cursor = "pointer";
    // }
    // document.getElementsByClassName(".btn").onmouseout = function()
    // {
    //     this.style.backgroundColor = "#ffa500";
    // }
    document.getElementById("btn-start").onmouseover = function()
    {
        this.style.backgroundColor = "#000";
        this.style.cursor = "pointer";
    }

    document.getElementById("btn-start").onmouseout = function()
    {
        this.style.backgroundColor = "#ffa500";
    }
    document.getElementById("btn-stop").onmouseover = function()
    {
        this.style.backgroundColor = "#000";
        this.style.cursor = "pointer";
    }

    document.getElementById("btn-stop").onmouseout = function()
    {
        this.style.backgroundColor = "#ffa500";
    }
    document.getElementById("btn-reset").onmouseover = function()
    {
        this.style.backgroundColor = "#000";
        this.style.cursor = "pointer";
    }

    document.getElementById("btn-reset").onmouseout = function()
    {
        this.style.backgroundColor = "#ffa500";
    }
}

// logic
let minute=00;
let second = 00;
let tens = 00;
let outputMinute = document.getElementById("minute");
let outputSecond = document.getElementById("second");
let outputTens = document.getElementById("tens");
let buttonStart = document.getElementById("btn-start");
let buttonStop = document.getElementById("btn-stop");
let buttonReset = document.getElementById("btn-reset");
let interval;

buttonStart.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTime, 10);
})

buttonStop.addEventListener("click", () => {
    clearInterval(interval);
})

buttonReset.addEventListener("click", () => {
    clearInterval(interval);
    tens = "00";
    second = "00";
    outputSecond.innerHTML = second;
    outputTens.innerHTML = tens;
})

function startTime() {
    tens++;
    if (tens <= 9) {
        outputTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        outputTens.innerHTML = tens;
    }
    if (tens > 99) {
        second++;
        outputSecond.innerHTML = "0" + second;
        tens=0;
        outputTens.innerHTML="0"+tens;
    }
    if(second>9){
        outputSecond.innerHTML=second;
    }
    if(second>59){
        minute++;
        outputMinute.innerHTML="0" +minute;
        second=0;
        outputSecond.innerHTML="0"+second;
    }

}