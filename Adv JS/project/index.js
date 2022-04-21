const row=document.createElement("input");
row.type="number";

var br=document.createElement("br");
const column=document.createElement("input");
column.type="number";

var br2=document.createElement("br");
const button=document.createElement("button");
button.innerHTML="Create table";
button.addEventListener("click",()=>{
    if(row.value<1 || column.value<1){
        alert("invalid input");
    }
    else{
        createTable(row.value,column.value);
    }
})

const table=document.createElement("table");
function createTable(rowCount,columnCount){
    for(let i=0;i<rowCount;i++){
        const tr=document.createElement("tr");
        for(let j=0;j<columnCount;j++){
            const td=document.createElement("td");
            td.style.height="20px";
            td.style.width="50px";
            td.style.border="1px solid black";
            td.appendChild(td);
        }
        table.appendChild(tr);
    }
}

document.body.appendChild(row);
document.body.appendChild(br);
document.body.appendChild(column);
document.body.appendChild(br2);
document.body.appendChild(button);
document.body.appendChild(table);