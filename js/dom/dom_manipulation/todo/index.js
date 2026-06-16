const add_fruit = document.getElementById("add_fruit");
const fruitInput = document.getElementById("fruit_input");
const fruits = document.getElementById("fruits_list");

function addActions(li) {
  console.log(li, "lili start");
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  console.log("liiii", li);
  const deleteFruit = () => {
    li.remove();
  };
  const editFruit = () => {
    const currentText = li.firstChild.textContent.trim();
    fruitInput.value = currentText;
    fruitInput.focus();
    li.remove();
  };

  // Delete fruit
  deleteBtn.addEventListener("click", deleteFruit);

  // Edit fruit
  editBtn.addEventListener("click", editFruit);
}

// Add buttons to existing fruits
// document.querySelectorAll("#fruits_list li").forEach((li) => {
//   addActions(li);
// });

// Add new fruit
add_fruit.addEventListener("click", () => {
  const fruitName = fruitInput.value.trim();

  if (fruitName === "") {
    alert("Please enter a fruit name");
    return;
  }

  const newItem = document.createElement("li");
  newItem.textContent = fruitName;

  addActions(newItem);
  fruits.appendChild(newItem);
  fruitInput.value = "";
  fruitInput.focus();
});
