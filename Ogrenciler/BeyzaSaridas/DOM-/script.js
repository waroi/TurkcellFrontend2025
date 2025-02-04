let value;
value=document;
value=document.links;
value=document.title;
value=document.location;
value=document.links[document.links.length-1].getAttribute("class");;

//id ile seçme
value=document.getElementById("title");
//tag ile seçme
value=document.getElementsByTagName("a");
//quer selector
value=document.querySelector("#title");//id 
value=document.querySelector(".text");
value=document.querySelector("p");

//element oluşturma
value=document.getElementById("denemeButton");

const button=document.createElement("a");
button.id="newButton";
button.className="btn btn-danger";



console.log(value);