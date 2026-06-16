const title = document.querySelector("#title");

const changeTitleBtn = document.getElementById("change_title_btn");
console.log(changeTitleBtn, "changeTitleBtn");
changeTitleBtn.addEventListener("click", () => {
  console.log("i am clicked");
  title.textContent = "New Document";
});

console.log(title, "titletitletitletitle");
// return first matching element
const paragraph = document.querySelector(".paragraph");
console.log(paragraph, "paragraphparagraph");

// return all matching elements
const paragraphs = document.querySelectorAll(".paragraph");
console.log(paragraphs, "paragraphsparagraphs");

const content = document.getElementById("content");
console.log(content, "content");
content.innerHTML = "<p>Hello <span>World</span></p>";
