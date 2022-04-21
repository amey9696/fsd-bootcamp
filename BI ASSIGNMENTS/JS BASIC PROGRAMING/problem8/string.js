function removeSpaces() {
    originalText = prompt("Please enter string:");
    if (originalText==0){
        document.getElementById('string').innerHTML="please enter either sentence or positive numbers like series"
    }
    else if(originalText<0){
        document.getElementById('string').innerHTML="you enter negative values"
    }
    else{   
        removedSpacesText = originalText.split(" ").join("");
        // len=removedSpacesText.length;
        document.getElementById('string').innerHTML=`${removedSpacesText}`
        // console.log(removedSpacesText)
        // console.log(removedSpacesText.length)
    }
}
removeSpaces()