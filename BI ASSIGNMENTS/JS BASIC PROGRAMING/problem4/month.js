function myFunction() {
    let month = prompt("Please enter month number:");
    if (month != null) {
        if(month==1){
            document.write("jan has 31 days");
        }
        else if(month==2){
            document.write("feb has 28 days");
        }
        else if(month==3){
            document.write("march has 31 days");
        }
        else if(month==4){
            document.write("april has 30 days");
        }
        else if(month==5){
            document.write("may has 31 days");
        }
        else if(month==6){
            document.write("june has 30 days");
        }
        else if(month==7){
            document.write("july has 31 days");
        }
        else if(month==8){
            document.write("august has 31 days");
        }
        else if(month==9){
            document.write("september has 30 days");
        }
        else if(month==10){
            document.write("october has 31 days");
        }
        else if(month==11){
            document.write("november has 30 days");
        }
        else if(month==12){
            document.write("december has 31 days");
        }
        else{
            document.write("you enter wrong number");
        }
    }
  }
myFunction()  