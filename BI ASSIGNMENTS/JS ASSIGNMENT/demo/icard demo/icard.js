// let inName=document.getElementById("inName").value;
// let inCollege=document.getElementById("inCollege").value;
// let inLocation=document.getElementById("inLocation").value;
    
let preview=document.getElementById("preview");
preview.addEventListener("click",function prev(){

    const inName=document.getElementById("inName").value;
    const inCollege=document.getElementById("inCollege").value;
    const inLocation=document.getElementById("inLocation").value;
    
    const name=document.getElementById("name");
    const college=document.getElementById('college');
    const location=document.getElementById('location');

    name.innerHTML=inName;
    college.innerHTML=inCollege;
    location.innerHTML=inLocation;
})

function loadImage(event){
    const image=document.getElementById('imgDisplayed');
    image.src=URL.createObjectURL(event.target.files[0]);
}