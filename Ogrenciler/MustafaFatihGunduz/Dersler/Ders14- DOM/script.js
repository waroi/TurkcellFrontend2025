let value;

value = document.getElementsByClassName("denemeButton");
const button = document.createElement("a");
button.className = "btn btn-danger";
button.href = "https://www.google.com";
button.target = "_blank";
const text = document.createTextNode("Google'a Git");
button.appendChild(text);
value[0].appendChild(button);




console.log(value);