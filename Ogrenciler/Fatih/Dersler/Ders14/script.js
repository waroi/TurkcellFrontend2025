value = document.getElementById("denemeButton");

const button = document.createElement("a");
button.id = "button";
button.className = "button";
button.href = "https://www.google.com";
button.target = "_blank";

const text = document.createTextNode("Google");
button.appendChild(text);
value.appendChild(button);

value = document.getElementById("denemeButton");
value.addEventListener("click", function1);

function function1() {
  alert("Hello World!");
}
