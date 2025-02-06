// Local Storage

// let userName = "Cenk";

// localStorage.setItem("name", userName);

// let name = localStorage.getItem("name");

// console.log(name);

// document.write(name);

// let userName = 444;

// localStorage.setItem("name", userName);

// let name = localStorage.getItem("name");

// console.log(name);
// console.log(typeof name);

// document.write(name);

// let user = {
//   name: "Cenk",
//   age: 22,
//   city: "Giresun",
//   langs: ["Python", "Javascript", "C++"],
// };

// localStorage.setItem("user", JSON.stringify(user));

// let getUser = JSON.parse(localStorage.getItem("user"));

// console.log(getUser);

// let users = ["Cenk", "Ahmet", "Mehmet"];
// localStorage.setItem("users", JSON.stringify(users));
// let getUsers = JSON.parse(localStorage.getItem("users"));
// console.log(getUsers);

// let numbers = [9, 44, 28, 38, 166, 342, 7];
// let langs = ["Python", "Javascript", "C++", "Java", "C#"];

// const map1 = numbers.map((x) => x * 2);
// console.log(map1);

// let users = [
//   {name: "Cenk", age: 22},
//   {name: "Ahmet", age: 23},
//   {name: "Mehmet", age: 24},
// ];

// users.map((user) => console.log(user.name));

// langs.forEach((lang) => console.log(lang));

// const result = langs.filter((lang) => lang.length > 4);
// console.log(result);

// const result = numbers.reduce((total, number) => total + number, 0);
// console.log(result);

// let langs = ["Python", "Java", "Javascript", "Php"];
// let langs2 = ["C#", "Ruby", "C++"];

// let result = [...langs, ...langs2];
// console.log(result);

let user = {
  name: "Cenk",
  age: 22,
  city: "Giresun",
  langs: ["Python", "Javascript", "C++"],
};

let {name: isim, age: yas, ...geriyeKalanlar} = user;
console.log(isim);
console.log(yas);
console.log(geriyeKalanlar);
