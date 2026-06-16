let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult");
}

// ternary operator => short hand syntax for if else statement
let is_adult = age >= 18 ? "You are an adult" : "You are not an adult";

let marks = 60;
if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 70) {
  console.log("B grade");
} else if (marks >= 30) {
  console.log("C grade");
} else {
  console.log("D grade");
}

let day = "sunday";
switch (day) {
  case "sunday": // day === "sunday"
    console.log("Sunday");
    break;
  case "monday": //day === "monday"
    console.log("Monday");
    break;
  default:
    console.log("Invalid day");
}

// let test_day=3;

// case 1 :
//     sunday

// case 2 :
//     monday

// case 3 :
//     tuesday

// case 4 :
//     wednesday

// case 5 :
//     thursday

// case 6 :
//     friday

// case 7 :
//     saturday

for (let i = 0; i <= 5; i++) {
  // 3 === 3 true
  if (i === 3) {
    // break;
    continue;
  }
  console.log(i); //0+1 =>1
}
// let i = 0;
// while (i < 5) {
//   // console.log(i);
//   // i++;
// }

// array = ["apple","banana","mango","orange"]
// use for loop
// print fruits name using for loop

const fruits = ["apple", "banana", "mango", "orange"];
//0 , 1 , 2 , 3
console.log(fruits.length, "array length");
for (let i = 0; i < fruits.length; i++) {
  // fruits[0]
  console.log(fruits[i]);
}
