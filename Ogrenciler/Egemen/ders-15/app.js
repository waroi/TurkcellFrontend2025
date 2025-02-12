// let userName = "egemenaksoz";


// localStorage.setItem("name", userName);


// let name = localStorage.getItem("name");

// document.write(name);



// let userName = 444;


// localStorage.setItem("name", userName);


// let name = Number(localStorage.getItem("name"));

// document.write(name);
// console.log(typeof name);


// let user = {
//     name: "egemen",
//     city: "Adana",
//     age: 26,
//     langs: ["python", "java", "cpp"]
// }

// localStorage.setItem("user", JSON.stringify(user));

// let getUser = JSON.parse(localStorage.getItem("user"));

// console.log(getUser);


// let users = ["egemen", "demir"];

// localStorage.setItem("users", JSON.stringify(users));

// let getUsers = JSON.parse(localStorage.getItem("users"));

// console.log(getUsers);


let numbers = [9, 4, 28, 12, 44, 77, 65];



// const map1 = numbers.map((x) => x * 2);

// console.log(map1);

// let users = [
//     { name: "Egemen ", salary: 100 },
//     { name: "Sila", salary: 500 }

// ]

// users.map((user) => console.log(user.name));

// langs = ["python", "c++", "java"];

// const emptyArr = [];
// langs.forEach((lang) => emptyArr.push(lang));
// console.log(emptyArr);


// const result = numbers.filter((number) => number > 30);

// console.log(result);


// const result = numbers.reduce((total, number) => total + number, 0);

// console.log(result);

// let langs1 = ["python", "c", "cpp", "java"];
// let langs2 = ["egemen", "sila", "bekciler", "aksoz"];


// let result = [...langs1, ...langs2];

// console.log(result);



// let user = {
//     name: "egemen",
//     city: "Adana",
//     age: 26, langs: ["python", "java", "cpp"]
// }


// let { name: isim, city: sehir, ...geriyeKalanlar } = user;

// console.log(isim);
// console.log(sehir);
// console.log(geriyeKalanlar);


let [a, b, ...geriyeKalanlar] = numbers;

console.log(a);
console.log(b);
console.log(geriyeKalanlar);