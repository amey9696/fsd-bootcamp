showNotes();

let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    let addTxt=document.getElementById('addTxt');
    let addTitle=document.getElementById('addTitle');
    let notes=sessionStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    let myObj={
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj); 
    sessionStorage.setItem("notes", JSON.stringify(notesObj)); 
    addTxt.value="";
    addTitle.value="";
    showNotes(); 
});

function showNotes(){
    let notes=sessionStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <button id="${index}" onClick="UpdateNote(this.id)" class="btn btn-primary" style="margin-right:30px">Update</button>
                        <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-danger">Delete</button>
                    </div>
                </div> `;
    });
    let notesElem=document.getElementById("notes");
    if(notesObj.length!=0){
        notesElem.innerHTML=html;
    }
    else{
        notesElem.innerHTML=`<h1>You currently have 0 recipes store in your</h1>
        <h1>Recipe App</h1> `;
    }
}

function deleteNote(index){
    let notes=sessionStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    sessionStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

function UpdateNote(index){
    let notes=sessionStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.find((element, index)=>{
        addTitle.value=element.title,
        addTxt.value=element.text
    })
    notesObj.splice(index, 1);
    sessionStorage.setItem("notes", JSON.stringify(notesObj));
}

let search=document.getElementById("searchTxt");
search.addEventListener("input", function(){ 

    let inputVal=search.value.toLowerCase();
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){ 
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
       if(cardTxt.includes(inputVal)){
            element.style.display="block";
       } 
       else{
        element.style.display="none";
       }
    });
})
