let value;

// value = document;
value = document.getElementById("denemeButton");

const button = document.createElement("a");
button.id = "newButton";
button.className = "btn btn-danger";
button.href = "https://www.google.com";
button.target = "_blank";

const text = document.createTextNode("Google'a git");
button.appendChild(text);
value.appendChild(button);

value = document.getElementById("denemeButton");
value.addEventListener("click", testFunction);

function testFunction() {
  console.log("Tıklandı");
}

const textInput = document.getElementById("text-input");
textInput.addEventListener("keydown", () => console.log(textInput.value));
textInput.addEventListener("focus", () => (textInput.value = ""));

console.log(value);
