let fetchBtn=document.getElementById("fetchBtn");

fetchBtn.addEventListener("click",eventHandler);

function eventHandler(){
    // console.log("You clicked");

    const xhr=new XMLHttpRequest(); //request created 1

    xhr.open("GET","abc.txt",true);  //open request 2

    xhr.onprogress=function(){ //show loader (optional) 4
        console.log("request is in progress");
    }

    xhr.onload=function(){ //close loader & show output 5
        console.log(this.responseText);
    }

    xhr.send(); //send request 3
}