//Array Özellikleri
/*
let value;
const numbers = [43,55,33,23,44,35,5];
const langs =["Python", "Java", "C++", "Javascript"];

value = numbers.length;
value = numbers[0];
value = numbers[numbers.length -1];
value = numbers[2];


numbers.push(200); //sona ekler
numbers.unshift(300); //başa ekler
numbers.pop(); //son elemanıı siler.
numbers.shift();  //ilk elemanı siler.
numbers.splice(0,3); //Arrayin 0. elemanından itibaren 3 tane siler.
value = numbers.indexOf(23); //Arrayin içinde varsa 0 döner yoksa -1.
value = numbers.includes(23); //Arrayin içinde var mı yok mu
value = numbers.sort(); //düzgün olmaz.
value = langs.sort(); 
value = numbers.sort((x, y) => x - y); //küçükten büyüğe
value = numbers.sort((x, y) => y - x); //büyükten küçüğe

console.log(numbers);
console.log(value);
console.log(typeof value); 
*/

//Object Özellikleri
let value;

const user = {
  name: "Ela",
  lastName: "Kılıç",
  age: 25,
  department: "Bilişim",
  langs: ["Python", "Java", "Javascript"],
  address: {
    city: "Diyarbakır",
    street: "Bağcılar",
  },
  work: function () {
    console.log("Çalışıyor...");
  },
};
value = user;
value = user.name;
value = user["name"];
value = user.langs;
value = user.langs[0];
value = user.address.city;
user.work();

//Zaman Objesi
let date = new Date();

