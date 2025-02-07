let variable = "Hello World";

localStorage.setItem("variable", variable);

console.log(localStorage.getItem("variable"));

let number = 5;

localStorage.setItem("number", number);

let numberValue = Number(localStorage.getItem("number"));

console.log(numberValue + 5);

let hikmet = {
	name: "Hikmet",
	age: 22,
	langs: ["TypeScript", "Flutter", "JavaScript"],
};

localStorage.setItem("hikmet", JSON.stringify(hikmet));

let hikmetValue = JSON.parse(localStorage.getItem("hikmet"));

console.log(hikmetValue.langs[0]);
