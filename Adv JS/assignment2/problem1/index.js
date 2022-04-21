//design
document.body.style.background = "#fff";
document.body.style.color = "#000";
document.body.style.textAlign = "center";
document.body.style.overflowY = "hidden";

const container = document.createElement("div");

const heading=document.createElement("h1");
heading.innerHTML="HEX COLOR :#fff";
heading.style.marginTop="200px";
heading.style.fontFamily="Arial, Helvetica, sans-serif";
heading.style.fontSize="50px";
heading.style.fontWeight="600";
heading.setAttribute("id","colour");

const clickButton=document.createElement("button");
clickButton.innerHTML="CLICK ME";
clickButton.style.border="none";
clickButton.style.borderRadius="5px";
clickButton.style.padding="15px 10px";
clickButton.style.fontSize="20px";
clickButton.style.fontFamily="Arial, Helvetica, sans-serif";
clickButton.style.width="130px";
clickButton.style.color="#fff";
clickButton.style.backgroundColor="#808080";
clickButton.setAttribute("id","change");

container.appendChild(heading);
container.appendChild(clickButton);
document.body.appendChild(container);

//hover
window.onload = function() {
    document.getElementById("change").onmouseover = function()
    {
        this.style.backgroundColor = "#000";
        this.style.cursor = "pointer";
    }

    document.getElementById("change").onmouseout = function()
    {
        this.style.backgroundColor = "#808080";
    }
}

//logic
let btn = document.getElementById('change');
let text = document.getElementById('colour');

let genrator = function () {
    newColour = '#' +
        (Math.random() * 0xFFFFFF << 0).toString(16);
    console.log(newColour.lenth);
    if (newColour.lenth < 7) {
        genrator();
    }
}

btn.addEventListener('click', function () {
    genrator();
    document.body.style.background = newColour;
    text.innerText = `HEX COLOR: ${newColour}`;
});
