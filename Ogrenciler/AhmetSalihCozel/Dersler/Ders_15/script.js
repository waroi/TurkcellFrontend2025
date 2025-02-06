// let userName = 444;
// localStorage.setItem("name",userName)

// let name = Number(localStorage.getItem("name"))

// console.log(name);
// console.log(typeof name)
// document.write(name)

// let user = {
//     name: "Ahmet",
//     age: 27,
//     city: "Bandirma",
//     langs: ["Python","JavaScript", "Java"],
// }

// localStorage.setItem(user, JSON.stringify(user));
// let getUser = JSON.parse(localStorage.getItem(user))
// console.log(getUser)

let users = ["Varol", "Ahmet", "Mehmet"]
localStorage.setItem(users,JSON.stringify(users));
let getUsers = JSON.parse(localStorage.getItem(users));
console.log(getUsers);
console.log(typeof getUsers)