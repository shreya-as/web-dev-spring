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
  return new Promise((resolve) => {
    resolve({ id: orderId, price: 1000 });
  });
}

getUser()
  .then((user) => {
    return getOrders(user.id);
  })
  .then((orders) => {
    return getOrderDetails(orders[0].id);
  })
  .then((details) => {
    console.log(details);
  });

getData();
async function greet() {
  return "Hello";
}
console.log(greet());

// async function getData() {
//     const user = await getUser();
//     const orders = await getOrders(user.id);
//     const details = await getOrderDetails(orders[0].id);

//     console.log(details);
// }
