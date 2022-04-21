function square() {
    var a = 5;
    return function () {
        console.log(a);
    }
}
const res = square();
res();
// console.log(a);

function init() {
    var name = 'Mozilla';
    function displayName() {
        // console.log(name);
    }
    displayName();
}
init();
























