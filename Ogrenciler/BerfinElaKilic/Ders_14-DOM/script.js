let value;

value = document;
value = document.URL;
value = document.title;
value = document.location;
value = document.location.hostname;
value = document.links;
value = document.links[document.links.length -1].getAttribute("class");
value = document.scripts[0];

//ID ile seçme
value = document.getElementById("title");
value = document.getElementById("title").innerHTML = "<p>Merhaba</p>";

//Class ile seçme
value = document.getElementsByClassName("text")[0];


// Tag ile seçme
value = document.getElementsByTagName("a");

// Query Selector ile seçme
value = document.querySelector("#title");
value = document.querySelector(".text");
value = document.querySelector("p");

//Element Oluşturma

value = document.getElementById("denemeButton");

const button = document.createElement("a");
button.id ="newButton";
button.className = "btn btn-danger";
button.href = "http://www.google.com";
const text = document.createTextNode("Google'a git");
button.appendChild(text);
value.appendChild(button);

value = document.getElementById("denemeButton");
value.addEventListener("click", testFunction);

function testFunction(){
    console.log("Tıklandı");
}

const textInput = document.getElementById("text-input");
textInput.addEventListener("keydown", () => console.log(textInput.value));
textInput.addEventListener("focus", () => (textInput.value = ""));

console.log(value);