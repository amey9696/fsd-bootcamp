function equiArea() {
    a = prompt("Please enter value of a:");
    area = ( 1.732 * a*a) / 4 ;
    let ar=area.toFixed(2)
    document.getElementById('equi').innerHTML=`area of equilateral triangle is ${ar}`
}
equiArea()