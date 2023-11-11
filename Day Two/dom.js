const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}

// button alert

const button = document.querySelector(".event-button");
button.addEventListener("click", function () {
  alert("Hey there!");
});

// input targeting

const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");

input.addEventListener("keyup", function () {
  paragraph.innerText = input.value;
});

// changing color

const inputColor = document.querySelector(".color-input");
const paragraphColor = document.querySelector(".color-box");

input.addEventListener("change", function () {
  paragraphColor.style.backgroundColor = inputColor.value;
});

// multiple elements

document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    alert(`You clicked on button ${event.target.innerText}`);
  });
