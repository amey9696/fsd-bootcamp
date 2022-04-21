showcards();

let addBtn=document.getElementById('addBtn');

addBtn.addEventListener("click", function(e){
    let addTitle=document.getElementById('addTitle');
    let addCourse=document.getElementById('addCourse');
    let addAuthor=document.getElementById('addAuthor');
    let cards=sessionStorage.getItem("cards");
    if(cards==null){
        cardsObj=[]; 
    }
    else
    {
        cardsObj=JSON.parse(cards);
    }
    let myObj={
        title:addTitle.value,
        course:addCourse.value,
        author:addAuthor.value
    }
    cardsObj.push(myObj); 
    sessionStorage.setItem("cards", JSON.stringify(cardsObj));
    addTitle.value="";
    addCourse.value="";
    addAuthor.value="";
    showcards();
});

function showcards(){
    let cards=sessionStorage.getItem("cards");
    if(cards==null){
        cardsObj=[];
    }
    else
    {
        cardsObj=JSON.parse(cards);
    }
    let html="";
    cardsObj.forEach(function(element){
        html+=`
                <div class="noteCard card" style="width: 15rem;border:none;">
                    <div class="card-body">
                        <img src="https://source.unsplash.com/user/erondu/200x200">
                        <h5 class="card-title" style="margin-top:10px;"><span style="background-color: yellow;border-radius:5px;">Name:</span> ${element.title}</h5>
                        <h5 class="card-title" style="margin-top:10px;"><span style="background-color: green;border-radius:5px;">Course:</span> ${element.course}</h5>
                        <h5 class="card-title" style="margin-top:10px;"><span style="background-color: red;border-radius:5px;">Author:</span> ${element.author}</h5>
                    </div>
                </div> `;
    });
    let cardsElem=document.getElementById("cards");
    if(cardsObj.length!=0){
        cardsElem.innerHTML=html;
    }
    else{
        cardsElem.innerHTML=`Nothing to show...! Use "Add a Card" section above to add cards....`;
    }
}