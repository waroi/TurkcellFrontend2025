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
// let value;
/*
const user = {
  name: "Cansu",
  lastName: "Cevik",
  age: 25,
  department: "Bilişim",
  langs: ["Python", "Java", "Javascript"],
  address: {
    city: "Balıkesir",
    street: "Bigadic",
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
console.log(user);
*/
//Zaman Objesi
/*
let date = new Date();

value = date;
value = date.getFullYear();
value = date.getMonth();
value = date.getDate();
value = date.getHours();
value = `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`
*/

//Karşılaştırma Operatörleri
/*
// == Eşit mi?
a = 10;
b ="10";
console.log (a==b); //true, çünkü type a bakmaz.
// === Veri tipi ve değer eşit mi?
console.log(a === b); //false
// != eşit değilse true
console.log(a != b); //false
// !== veri tipi ve değer
console.log(a !== b); //true
*/

// < Küçük mü?
// a = 10;
// b = 5;
// console.log(a < b); // false

// > Büyük mü?
// a = 10;
// b = 5;
// console.log(a > b); // true

// <= Küçük eşit mi?
// a = 10;
// b = 10;
// console.log(a <= b); // true

// >= Büyük eşit mi?
// a = 10;
// b = 20;
// console.log(a >= b); // false

// And (ve) Operatörü (&&) - Her iki koşul da doğruysa true, diğer durumda false
// console.log(5 == 5 && 5 == 6); // false
// console.log(5 == 5 && 5 == "5"); // true

// Or (veya) Operatörü (||) - Her iki koşuldan biri doğruysa true, ikisi birden yanlış ise false
// console.log(5 == 5 || 5 == 6); // true
// console.log(5 == 2 || 5 == 6); // true
// console.log(5 == 5 && 5 == "5"); // true

// Not (değil) Operatörü (!) - Koşulun tersini alır
// console.log(!(5 == 5)); // false

// Koşullar

// if (koşul)

// a = 20;
// b = 20;

// if (a < b) {
//   console.log("a, b'den küçüktür.");
// } else if (a > b) {
//   console.log("a, b'den büyüktür.");
// } else {
//   console.log("a, b'ye eşittir.");
// }

// Switch Case
// const islem = 2;

// switch (islem) {
//   case 1:
//     console.log("İşlem 1");
//     break;
//   case 2:
//     console.log("İşlem 2");
//     break;
//   case 3:
//     console.log("İşlem 3");
//     break;
//   default:
//     console.log("Geçersiz işlem");
//     break;
// }

// Döngüler

// For Döngüsü

// const langs = ["Python", "Java", "Javascript"];

// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i]);
// }

// while Döngüsü
// i = 0;
// while (i < langs.length) {
//   console.log(langs[i]);
//   i++;
// }

// do while Döngüsü
// i = 0;
// do {
//   console.log(langs[i]);
//   i++;
// } while (i < langs.length);

// Functions

// merhaba();

// function merhaba() {
//   console.log(`Merhaba`);
// }

// Parametre alan fonksiyon
// merhaba("Cansu", "Cevik");

// function merhaba(name = "Bilgi Yok", lastName = "Bilgi Yok") {
//   console.log(`Merhaba ${name} ${lastName}`);
// }
// merhaba("Cansu");

// Return ile fonksiyondan değer döndürme
// function square(x) {
//   return x * x;
// }
// console.log(square(3) * 2);

// Arrow Function
// const cube = (x) => x * x * x;
// console.log(cube(3));