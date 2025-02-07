//let userName= 444;

//localStorage.setItem("name", userName);

//let name= Number(localStorage.getItem("name"));

//console.log(name);
//console.log(typeof name);

//document.write(name);

//let user={
    //name:"Hazal",
    //age:26,
    //city:"adana",
    //langs:["Python", "Java", "Javascript"],

//};

//localStorage.setItem("user", JSON.stringify(user));

//let getUser= JSON.parse(localStorage.getItem("user"));

//console.log(getUser);
//console.log(typeof getUser);

//let users=["Hazal"," Ahmet", "Ayşe"];
//sessionStorage.setItem("users", JSON.stringify(users));
//let getUsers=JSON.parse(sessionStorage.getItem("users"));
//console.log(getUsers);
//console.log(typeof getUsers);


//let numbers= [9, 44, 28, 38, 166, 342, 7];
//let langs=["Python", "Java", "Javascript", "PhP"];

//const map1= numbers.map((x) => (x*2));
//console.log(map1);

//let users=[
//    {name:"Hazal", age:26},
//    {name:"Ahmet", age:28},
//    {name:"Ayşe", age:30},

//];

//users.map(user => console.log(user.name));

//langs.forEach(lang => console.log(lang));

//const result= langs.filter((lang) => lang.length > 4);
//console.log(result);

//const result= numbers.reduce((total, number) => total+number, 0);
//console.log(result);

//let langs=["Python", "Java", "Javascript", "PhP"];
//let langs2=["C#", "Ruby", "C++"];

//let result= [...langs, ...langs2];
//console.log(result);

//let user={
//    name:"Hazal",
//    age:26,
//    city:"adana",
//    langs:["Python", "Java", "Javascript"],
//};

//let {name:isim, age:yas, ...geriyeKalanlar}= user;
//console.log(isim);
//console.log(yas);
//console.log(geriyeKalanlar);

let numbers= [9, 44, 28, 38, 166, 342, 7];
let [a, b, ...geriyeKalanlar] = numbers;
console.log(a);
console.log(b);
console.log(geriyeKalanlar);

