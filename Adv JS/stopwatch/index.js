const button = document.createElement("button");
button.innerHTML = 'Create Button';




















// const row = document.createElement("input");
//  row.type="number";
 
//  const column = document.createElement("input");
//  column.type="number";
 
//  const button = document.createElement("button");
//  button.innerHTML = 'Create Button';
//  button.addEventListener("click", () => {
//    if(row.value < 1 || column.value < 1) {
//      alert('Invalid input');
//    } else {
//      createTable(row.value, column.value);
//    }
//  });
 
//  const table = document.createElement("table");
//  table.style.borderCollapse = "collapse";
 
//  function createTable(rowCount, columnCount) {
//    for(let i=0; i<rowCount; i++) {
//      const tr = document.createElement("tr");
//      for(let j=0; j<columnCount; j++) {
//        const td = document.createElement("td");
//        td.style.height = "20px";
//        td.style.width = "50px";
//        td.style.border = "3px solid black";
//        td.addEventListener("click", () => {
//          if(td.style.borderColor === 'green') {
//            td.style.borderColor = 'black';
//          } else {
//            td.style.borderColor = 'green';
//          }
//        });
//        tr.appendChild(td);
//      }
//      table.appendChild(tr);
//    }
//  }
 
//  document.body.appendChild(row);
//  document.body.appendChild(column);
//  document.body.appendChild(button);
//  document.body.appendChild(table);