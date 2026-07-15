fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); //another promise
  })
  .then((users) => {
    console.log("Users:");
    console.log(users, "users");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
const userList = document.getElementById("userList");

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //data lina time 2secs
    const users = await response.json();
    users.forEach(myFunction);
    function myFunction(value) {
      console.log(value, "valuevalue");
      const li = document.createElement("li");
      li.textContent = value.name;
      userList.appendChild(li);
      console.log(value.name, "name");
    }
    console.log(users, "Users using async");
  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();

// const userList = document.getElementById("userList");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     users.forEach((user) => {
//       const li = document.createElement("li");
//       li.textContent = `${user.name} - ${user.email}`;
//       userList.appendChild(li);
//     });
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });
const numbers = [65, 44, 12, 4];
// output: [650,440,120,40]
const newNumbers = numbers.map(myNewNumbers);
function myNewNumbers(value) {
  console.log(value, "value inside map");
  return value * 10;
}

// newNumbers => [40, 40 ....] //new array
console.log(newNumbers, "newNumbers");
console.log(numbers, "numbers");

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// use map method
// output => ["Alice","Bob","Charlie"]

const newUsers = users.map((value) => value.name);
console.log(newUsers, "new users");

const fruits = ["apple", "mango", "banana", "grapes"];
// ouput ["apple"]

const apple = fruits.filter(myFilterFunction);
function myFilterFunction(value) {
  console.log(value, "valuevaluevalue");
  return value === "apple";
}

console.log(apple, "appleappleapple");
// use filter method
// output [{id: 1, name: "Alice", active: true },{ id: 3, name: "Charlie", active: true }]

const activeUsers = users.filter((value) => value.active);
console.log(activeUsers, "activeUsers");
