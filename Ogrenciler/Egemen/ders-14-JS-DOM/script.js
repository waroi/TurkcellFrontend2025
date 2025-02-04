let value;

value = document;
value = document.URL;
value = document.title;
value = document.location;

value = document.links;
value = document.scripts[0];



value = document.getElementById("title");
value = document.getElementById("title").innerHTML = "<p>Hello World</p>";


value = document.getElementsByClassName("text")[0];

value = document.getElementById("denemeButton");
console.log(value);

const button = document.createElement("a");

button.id = "newButton";
button.className = "btn btn-danger";
button.href = "#";
button.targer = "_blank";

const text = document.createElement("p");
textNode = document.createTextNode("Egemen");
text.appendChild(textNode);
document.body.appendChild(text);

value.appendChild(button);
value.appendChild(text);


value = document.addEventListener("click", testFunction);


function testFunction() {
    console.log("Tiklandi");
}



