console.log("start");
// const test=()=>{

// }
setTimeout(() => {
  console.log("middle");
}, 5000); //5 secs
console.log("end");

// function greet(param1,parm2){

// }
// array of fruits
// array = ["apple","banana","mango","orange"]

let greet = (name, callback) => {
    console.log(callback,"callbackcallback");
    console.log(name,"namenamename")
  console.log("Hello" + " " + name);
  callback();
};

let afterGreet = () => {
  console.log("Have a nice day");
};

greet("Rajesh",afterGreet);

// function params number , callback 
//  another function  return square of a number  
// processNumber(4,callbackFunc) => 4 * 4 => 16 output
