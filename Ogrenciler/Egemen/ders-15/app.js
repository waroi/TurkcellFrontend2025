// let userName = "egemenaksoz";


// localStorage.setItem("name", userName);


// let name = localStorage.getItem("name");

// document.write(name);



let userName = 444;


localStorage.setItem("name", userName);


let name = Number(localStorage.getItem("name"));

document.write(name);
console.log(typeof name);


let user = {
    name: "egemen",
    city: "Adana",
    age: 26,
    langs: ["python", "java", "cpp"]
}

localStorage.setItem("user", JSON.stringify(user));

let getUser = JSON.parse(localStorage.getItem("user"));

console.log(getUser);


let users = ["egemen", "demir"];

localStorage.setItem("users", JSON.stringify(users));

let getUsers = JSON.parse(localStorage.getItem("users"));

console.log(getUsers);


let numbers = [9, 4, 28, 12, 44, 77, 65];

const map1 = numbers.map(function () {

})