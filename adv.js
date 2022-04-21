// "use strict"
// this

// console.log(this);
// const user={
//     fname:"aniket",
//     lname:"chavan",
//     fullName:function(){
//         return this.fname+" "+this.lname;
//     }
// }
// console.log(user.fullName());

// function myFunc(){
//     return this; 
// }
// console.log(myFunc());


//call 

// var person={
//     fullName:function(city,country){
//         return this.fname+" "+this.lname+","+city+","+country;
//     }
// }
// var person1={
//     fname:"aniket",
//     lname:"chavan",
// }


// console.log(person.fullName.call(person1,"mumbai","india"))
// console.log(person.fullName.apply(person1,["mumbai","india"]));
// var bound=person.bind(person1);
// console.log(bound("pune","india"))

//object constructor
// function person(fname,lname,contact){
//     this.fistName=fname;
//     this.lastName=lname;
//     this.contactNum=contact;
//     this.fullName=function(){
//         return this.fistName+" "+this.lastName;
//     }
// }
// const person1=new person("ani","chavan",100);
// console.log(person1.fullName())

//class 
// class Car{
//     constructor(brand){
//         this.brandName=brand;
//     }
//     displayName(){
//         return "car name is "+this.brandName;
//     }
// }
// class Model extends Car{
//     constructor(brand,model){
//         super(brand);
//         this.modelName=model;
//     }
//     displayCarName(){
//         return "car name is "+this.brand & "model is"+this.modelName;
//     }
// }
// const person1=new Model("Maruti","swift");
// console.log(person1.displayCarName())


setTimeout(function() {
    console.log('Hello'); // alerts Hello after 3 seconds
  }, 3000)

  setTimeout();