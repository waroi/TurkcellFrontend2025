// let username = 400;

// localStorage.setItem("username", username);

// console.log(localStorage.getItem("username"));
// connsole.log(typeof username);

// document.write(username);

let user = {
  name: "Name",
  age: 30,
  city: "city",
  langs: ["Python", "Java", "C++"],
};

localStorage.setItem("user", JSON.stringify(user));

let users = ["Fatih", "Ali", "Veli"];
sessionStorage.setItem("users", JSON.stringify(users));
let getUsers = JSON.parse(sessionStorage.getItem("users"));
console.log(getUsers);
