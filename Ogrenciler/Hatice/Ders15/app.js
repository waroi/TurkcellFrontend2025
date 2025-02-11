// Local Storage

// String olarak kullanımı
// let userName = "Varol";

// localStorage.setItem("name", userName);

// let name = localStorage.getItem("name");

// console.log(name);

// document.write(name);

// Number olarak kullanımı
// let userName = 444;

// localStorage.setItem("name", userName);

// let name = Number(localStorage.getItem("name"));

// console.log(name);
// console.log(typeof name);

// document.write(name);

// // Object olarak kullanımı

// let user = {
//   name: "Varol",
//   age: 30,
//   city: "İstanbul",
//   langs: ["Python", "Java", "Javascript"],
// };

// localStorage.setItem("user", JSON.stringify(user));

// let getUser = JSON.parse(localStorage.getItem("user"));

// console.log(getUser);
// console.log(typeof getUser);

// Array olarak kullanımı

// let users = ["Varol", "Ahmet", "Mehmet"];
// sessionStorage.setItem("users", JSON.stringify(users));
// let getUsers = JSON.parse(sessionStorage.getItem("users"));
// console.log(getUsers);
// console.log(typeof getUsers);

// Array Methods

// let numbers = [9, 44, 28, 38, 166, 342, 7];
// let langs = ["Python", "Java", "Javascript", "Php"];

// map methodu

// const map1 = numbers.map((x) => x * 2);
// console.log(map1);

// let users = [
//   { name: "Varol", age: 30 },
//   { name: "Ahmet", age: 25 },
//   { name: "Mehmet", age: 22 },
// ];

// users.map((user) => console.log(user.name));

// foreach methodu
// langs.forEach((lang) => console.log(lang));

// filter methodu

// const result = langs.filter((lang) => lang.length > 4);
// console.log(result);

// reduce methodu

// const result = numbers.reduce((total, number) => total + number, 0);
// console.log(result);

// spread operator

// let langs = ["Python", "Java", "Javascript", "Php"];
// let langs2 = ["C#", "Ruby", "C++"];

// let result = [...langs, ...langs2];
// console.log(result);

// Destructuring

// let user = {
//   name: "Varol",
//   age: 30,
//   city: "İstanbul",
//   langs: ["Python", "Java", "Javascript"],
// };

// let { name: isim, age: yas, ...geriyeKalanlar } = user;

// console.log(isim);
// console.log(yas);
// console.log(geriyeKalanlar);

// let numbers = [9, 44, 28, 38, 166, 342, 7];

// let [a, b, ...geriyeKalan] = numbers;
// console.log(a);
// console.log(b);
// console.log(geriyeKalan);

// const [todo, setTodo] = useState("");
