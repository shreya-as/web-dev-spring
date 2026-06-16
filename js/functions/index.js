// parameters 
function add(a,b){
    console.log(a,b,"a and b");
    // console.log(a,b,"a and b inside function");
    // let a=10;
    // let b=20;
    let c=a+b;
    console.log(c,"c inside function");
    return c;
}
// arguments
let result = add(10,20);
console.log(result,"result");
let result2 = add(30,40);
console.log(result2,"result2");
let result3 = add(30,20);
console.log(result3,"result3");


// function expression
let greet = function(name){
    console.log("Hello" + name);
}
greet("Rajesh");