let name = 26;

localStorage.setItem("name", name);

let number = Number(localStorage.getItem("name")); 
console.log(number);


let user = {
    name: "Mustafa",
    age: 26,
    city: "Konya",
    langs: ["Flutter", "Swift", "JavaScript"]
}

localStorage.setItem("user",JSON.stringify(user)); //! JSON VERİSİNE ÇEVİRİP KAYDETTİK! LocaleStorage sadece string değerler alır.
let getUser = JSON.parse(localStorage.getItem("user")); //? JSON VERİSİNİ PARSE EDİP ALDIK! 
console.log(getUser);
console.log(typeof getUser);

let users = ["Mustafa", "Fatih", "Gündüz"];
localStorage.setItem("users", JSON.stringify(users));
let getUsers = JSON.parse(localStorage.getItem("users"));
console.log(getUsers);
console.log(typeof getUsers);

let numbers = [42,55,86,123,90,23,67];
let langs = ["JavaScript", "Python", "Dart", "Java", "Swift"];

//forEach
langs.forEach((lang) => {lang.length > 4 ? console.log(lang) : console.log("Daha kısa!")});

//Map
numbers.map((number) => {
    return number * 2;
});

//Filter
numbers.filter((number) => {
    return number > 50;
});

//Reduce
numbers.reduce((acc, number) => {
    return acc + number;
}, 0);