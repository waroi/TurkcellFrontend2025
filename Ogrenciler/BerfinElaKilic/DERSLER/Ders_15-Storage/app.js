//Local Storage
/* string olarak
let userName = "Ela";

localStorage.setItem("name", userName);
let name = localStorage.getItem("name");
console.log(name);
document.write(name);
*/

/*Number
let userName = 444;

localStorage.setItem("name", userName);
let name = Number(localStorage.getItem("name"));
console.log(name);
console.log(typeof name);

document.write(name);
*/
/* Object olarak kullanımı
let user = {
    name: "Ela",
    age:24,
    city:"Diyarbakır",
    langs:["Python", "Java", "Javascript"],
};

localStorage.setItem("user", JSON.stringify(user));
let getUser = JSON.parse(localStorage.getItem("user"));

console.log(getUser);
console.log(typeof getUser);
*/
/*Array olarak kullanımı
let users = ["Ela", "Aram", "Erol"];
localStorage.setItem("users", JSON.stringify(users));
let getUsers = JSON.parse(localStorage.getItem("users"));
console.log(getUsers);
*/

/*
//session storage
let users = ["Ela", "Aram", "Erol"];
sessionStorage.setItem("users", JSON.stringify(users));
let getUsers = JSON.parse(sessionStorage.getItem("users"));
console.log(getUsers);
*/
/*
//Array Methods
let numbers = [9, 44,28,38,166,342,7];
let langs= ["Python", "Java", "Javascript"];
//map methodu
const map1 = numbers.map((x) => x *2);
console.log(map1);

let users =[
    {name: "Ela", age: 24},
    {name: "Aram", age: 2},
    {name: "Gül", age: 44},
];
users.map((user) => console.log(user.name));

//foreach
langs.forEach((lang)=> console.log(lang));

//Filter methodu
const result = numbers.reduce((total, number) => total + number, 0);
console.log(result);
*/
/*
//spread operator
let langs = ["Python", "Java", "Javascript"];
let langs2 = ["C#", "Ruby", "C++"];

let result = [...langs, ...langs2];
console.log(result);
*/

//Destructuring
/*
let user = {
    name:"Ela",
    age:30,
    city: "İstanbul",
    langs:["Python", "Java", "Javascript"],
};
let {name: isim, age: yas, ...geriyekalan} = user;
console.log(isim);
console.log(yas);
console.log(geriyekalan);
*/
/*
let numbers = [9 , 44, 28, 38, 166, 342, 7];
let [a, b, ...geriyekalan] = numbers;
console.log(a);
console.log(b);
console.log(geriyekalan);
*/