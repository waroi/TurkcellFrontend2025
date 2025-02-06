//Local Storage

// let userName = 444;
// localStorage.setItem("name", userName);
// let name = Number(localStorage.getItem("name"));
// console.log(name);
// console.log(typeof name);
// document.write(name);



// let user = {
//     name:"Ece",
//     age: 23,
//     city: "Giresun",
//     langs: ["Javascript", "Dart", "Python"],
// };
// localStorage.setItem("user", JSON.stringify(user));
// let getUser = JSON.parse(localStorage.getItem(user));
// console.log(user);


// let users = ["Ece", "Ela", "Yunus", "Ahmet"];
// localStorage.setItem("users", JSON.stringify(users));
// let getUsers = JSON.parse(localStorage.getItem("users"));
// console.log(getUsers);
// console.log(typeof getUsers);

//Array Methods

let numbers = [9, 44, 28, 38, 166, 342, 7];

//map metodu
// const map1 = numbers.map((x) => x * 2);
// console.log(map1);

//FOREACH
// let langs = ["Javascript", "Dart", "Python"];
// langs.forEach((lang) => console.log(lang));

//FILTER
// const result = langs.filter((lang) => lang.length > 4);
// console.log(result);

//REDUCE

// const result = numbers.reduce((total, number)=> total+number,0);
// console.log(result);

//SPREAD OPREATOR

// let langs = ["Python", "Java"];
// let langs2= ["JS", "PHP", "C++"];
// let result = [...langs, ...langs2];
// console.log(result);

//DESTRUCTURING

// let user = {
//     name:"Ece",
//     age: 23,
//     city: "Giresun",
//     langs:  ["Javascript", "Dart", "Python"],
// };

// let {name: isim, age: yas, ...geriyeKalanlar} = user;
// console.log(isim);
// console.log(yas);
// console.log(geriyeKalanlar);

let [a, b, ...geriyeKalan] = numbers;
console.log(a);
console.log(b);
console.log(geriyeKalan);