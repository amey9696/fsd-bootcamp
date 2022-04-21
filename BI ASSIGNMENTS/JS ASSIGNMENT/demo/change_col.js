let color = ["red", "green", "blue", "grey", "pink"];
let i = 0;
document.querySelector("button").addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];
})