let myPromise = new Promise(function (resolve, reject) {
  // Code that may take some time
  const success_msg = "Order received successfully.";
  const reject_msg = "Failed to receive order.";
  const promise_resolved = false;
  promise_resolved ? resolve(success_msg) : reject(reject_msg);
});

console.log(myPromise, "myPromise");
myPromise
  .then((data) => console.log("Data found:", data)) //when promise is resolved
  .catch((error) => console.log("Failed to get Data", error)); // when promise is rejecteds

function getUser() {
  return new Promise((resolve) => {
    resolve({ id: 1, name: "Ram" });
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    resolve([{ id: 101, item: "Laptop" }]);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve, reject) => {
    // resolve({ id: orderId, price: 1000 });
    ("Failed to get Order Details");
  });
}
reject;
// promise chaining
getUser()
  .then((user) => {
    return getOrders(user.id);
  })
  .then((orders) => {
    return getOrderDetails(orders[0].id);
  })
  .then((details) => {
    console.log(details);
  })
  .catch((error) => console.log("Failed to get Data", error));

async function greet() {
  return "Hello";
}
console.log(greet());

async function getData() {
  try {
    //Code that might cause an error
    const user = await getUser();
    console.log(user, "useruser");
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);
    console.log(details, "detailsdetails");
  } catch (error) {
    // Code that runs only if an error happens
    console.log("failed to get data using async await", error);
  } finally {
    // Optional: Code that ALWAYS runs, no matter what
    console.log("i am finally block");
  }
}
getData();
