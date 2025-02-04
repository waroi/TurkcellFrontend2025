let value;

value = document;
value = document.URL;
value = document.title;
value = document.location;
value = document.location.hostname;
value = document.links;
value = document.links[document.links.length - 1].getAttribute("class");
value = document.scripts[0];

// id ile seçme
value = document.getElementById("title");
value = document.getElementById("title").innerHTML = "<p>Miriba</p>";
// güvenlik olarak sıkıntılı bir durum sürekli kullanmamak lazım innerHTML 
// performansı da düşürüyor

// class ile seçme
value = document.getElementsByClassName("text");
value = document.getElementsByClassName("text")[0];

// query selector ile seçme
value = document.querySelector("#title"); //id
value = document.querySelector(".title"); //class
value = document.querySelector("p");

// element oluşturma
value = document.getElementById("denemeButon");
const button = document.createElement("a");
button.className = "btn btn-danger";
button.target = "_blank"
button.href = "http://www.google.com"
const text = document.createTextNode("Google'a Git");
button.appendChild(text); //text ve butonu birleştiriyor
value.appendChild(button);

value = document.getElementById("denemeButon");
value.addEventListener("click", testFunction);

function testFunction(){
    console.log("Tıklandı");
}

const textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", () => console.log(textInput.value)); //tuşa basıldıktan sonra
textInput.addEventListener("keydown", () => console.log(textInput.value)); //tuşa basıldığı an
textInput.addEventListener("focus", () => console.log(textInput.value = "")); //içinde yazan bir değer varsa bu elemena odaklanıldığında (tıklanma vs) boşluk yazdırıyor console'da 

console.log(value);