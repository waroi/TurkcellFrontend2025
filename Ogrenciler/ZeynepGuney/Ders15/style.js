// local storage

//string olarak kullanımı

// let userName = "Zeynep";
// localStorage.setItem("name", userName);
// let name = localStorage.getItem("name");
// console.log(name);
// document.write(name);

//number olarak kullanımı

// let userName = "444";
// localStorage.setItem("name", userName);
// let name = Number(localStorage.getItem("name"));
// console.log(name);
// console.log(typeof name);
// document.write(name);

//object olarak kullanımı

// let user = {
//     name: "Zeynep",
//     age: 24,
//     city: "Balıkesir",
//     langs: ["Python", "Java", "Javascript"],
// };
// localStorage.setItem("user", JSON.stringify(user));
// let getUser = JSON.parse(localStorage.getItem("user"));
// console.log(getUser);
// console.log(typeof getUser);

// array olarak kullanımı

// let users = ["Zeynep", "Güney", "Güneş"];
// localStorage.setItem("users", JSON.stringify(users));
// let getUsers = JSON.parse(localStorage.getItem("users"));
// console.log(getUsers);
// console.log(typeof getUsers);

// aynı şeyi session ile yapımı

// let users = ["Zeynep", "Güney", "Güneş"];
// sessionStorage.setItem("users", JSON.stringify(users));
// let getUsers = JSON.parse(sessionStorage.getItem("users"));
// console.log(getUsers);
// console.log(typeof getUsers);

// Array methods

// let numbers = [17,8,20,0,1,9,3,99,5];

// //map methodu
// // const map1 = numbers.map(function (){
// // return
// // });
// const map1 = numbers.map((x) => x*2);
// console.log(map1);

// let users = [
//     {name: "Zeynep", age:24},
//     {name: "Ayşe", age:44},
//     {name: "Fatma", age:55},
// ];
// users.map((user) => console.log(user.name));

// foreach metodu
// let numbers = [17,8,20,0,1,9,3,99,5];
// let langs = ["Python", "Java", "Javascript"];
// langs.forEach(lang => console.log(lang));

//filter methodu

// const result = langs.filter((lang) => lang.length > 4);
// console.log(result);

// reduce methodu
// let numbers = [17,8,20,0,1,9,3,99,5];
// const result = numbers.reduce((total, number) => total + number, 0); // 0 : total'in ilk değeri demek
// console.log(result);

// spread operator

// let langs = ["Python", "Java", "Javascript", "PHP"];
// let langs2 = ["C#", "Ruby", "C++"];
// let result = [...langs, ...langs2]; // burayı kayıttan tekrar dinle, önemli 
// console.log(result);

// spread operator

// let user = {
//     name: "Zeynep",
//     age: 24,
//     city: "Balıkesir",
//     langs: ["Python", "Java", "Javascript"],
// };
// let {name:isim, age:yas, ...geriyeKalanlar} = user;
// console.log(isim);
// console.log(yas);
// console.log(geriyeKalanlar);

// let numbers = [17,8,20,0,1,9,3,99,5];
// let [a,b, ...geriyeKalan] = numbers;
// console.log(a);
// console.log(b);
// console.log(geriyeKalan);

// const[todo, setTodo] = useState("");