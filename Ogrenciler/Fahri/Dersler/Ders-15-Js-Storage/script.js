//! local storage
//? String olarak kullanımı
// let userName = "Fahri";

// localStorage.setItem("name", userName);

// let name = localStorage.getItem("name");

// console.log(name);
// document.write(name);

//? Number olarak kullanımı

// let userName = 444; // hep string olarak tutar bunu da "444" oalrak alır

// localStorage.setItem("name", userName);

// let name = Number(localStorage.getItem("name"));

// console.log(name);
// console.log(typeof name);
// document.write(name);

// //? Object olarak kullanımı

// let user = {
//   name: "Fahri",
//   age: 23,
//   city: "Sakarya",
//   langs: ["Html", "Javascript", "Css"],
// };
// localStorage.setItem("user", JSON.stringify(user));

// let getUser = JSON.parse(localStorage.getItem("user"));
// console.log(getUser);
// console.log(typeof getUser);

//? Array olarak kullanımı

// let users = ["Fahri", "İsmail", "Umut"];
// sessionStorage.setItem("uers", JSON.stringify(users));
// let getUsers = JSON.parse(sessionStorage.getItem("users"));
// console.log(getUsers);
// console.log(typeof getUsers);

//? Array methods

// let numbers = [9, 44, 23, 54, 156, 57];
// let langs = ["Html", "Css", "Javascript"];

//? Map methodu

// const map1 = numbers.map((x) => x * 2);
// console.log(map1);

// let users = [
//   { name: "Fahri", age: 23 },
//   { name: "İsmail", age: 22 },
//   { name: "Umut", age: 22 },
// ];

// users.map((user) => console.log(user.name));

//? foreach metodu

// langs.forEach((lang) => console.log(lang));

//? Filter methodu

// const result = result.filter((lang) => lang.length > 3);
// console.log(result);

//? reduce methodu

// const result = numbers.reduce((total, number) => total + number, 0); // buradaki 0 totalin ilk değeri, ilk değer hep toplamı tuttuğun değer 2.değer de arrayden gelen tekli değer
// console.log(result);

//? Spread operator

// let langs = ["Html", "Css", "Javascript"];
// let langs2 = ["React", "Python", "Bootstrap"];

// let result = [...langs, ...langs2];
// console.log(result);

//? Destructuring

let user = {
  name: "Fahri",
  age: 23,
  city: "Sakarya",
  langs: ["Css", "Javascript", "Java"],
};

let { name: isim, age: yas, ...geriyeKalanlar } = user;
console.log(isim);
console.log(yas);
console.log(geriyeKalanlar);
