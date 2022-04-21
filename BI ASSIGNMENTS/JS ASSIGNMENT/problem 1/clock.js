function showTime(){
    let date=new Date(); //get today date with current time
    let hour=date.getHours(); 
    let minute=date.getMinutes();
    let second=date.getSeconds();

    let day=date.getDate();
    let month=date.getMonth();
    let year=date.getFullYear();

    let time=hour + " : " + minute + " : "+ second ; //seperate time
    let day2=day + " / " + month  + " / "+ year ;//seperate date

    document.getElementsByTagName('p')[0].innerText=time; //display time <p>
    document.getElementsByTagName('h3')[0].innerText=day2;//display date
}
var myVar = setInterval(showTime, 1000); //clock run continously


function myStopFunction() {
    clearInterval(myVar); //stop clock
  }

  function myStartFunction() {
    window.location.reload() //start clock with updated time
  }