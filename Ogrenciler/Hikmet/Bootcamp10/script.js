value = document.getElementById("manuButton");

const button = document.createElement("a");
button.id = "newButton";
button.className = "btn btn-primary";
button.href = "https://hikmetmelik.tech/en";
button.target = "_blank";
const text = document.createTextNode("Go to my website");

button.appendChild(text);
value.appendChild(button);

value = document.getElementById("manuButton");
value.addEventListener("click", testFunction);

function testFunction() {
	alert("Hello World");
}
