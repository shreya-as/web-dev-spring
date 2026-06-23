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
    console.log(value,"valuevalue")
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
