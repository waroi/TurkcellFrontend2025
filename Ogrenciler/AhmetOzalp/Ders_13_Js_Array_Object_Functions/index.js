// Array Özellikleri

// let value;
// const numbers = [43, 56, 33, 23, 44, 35, 5];
// const langs = ["Python", "Java", "C++", "Javascript"];

// value = numbers.length; // Arrayin eleman sayısını verir.
// value = numbers[0]; // Arrayin 0. index yani ilk elemanını verir.
// value = numbers[numbers.length - 1]; // Arrayin son elemanını verir.
// value = numbers[2]; // Arrayin 2. indexdeki değeri verir.
// // value = numbers[3] = 1000; // Arrayin 3. indexdeki değeri değiştirir.
// // numbers.push(200); // Arrayin sonuna 200 ekler.
// // numbers.unshift(300); // Arrayin başına 300 ekler.
// // numbers.pop(); // Arrayin son elemanını siler.
// // numbers.shift(); // Arrayin başındaki elemanı siler.
// // numbers.splice(0, 3); // Arrayin 0. indexinden başlayarak 3 elemanı siler.
// // numbers.reverse(); // Arrayi ters çevirir.
// value = numbers.indexOf(23); // Arrayin içinde 23 değerinin indexini verir.
// value = numbers.includes(23); // Arrayin içinde 23 değeri var mı yok mu kontrol eder.
// value = numbers.sort();
// // value = langs.sort();
// value = numbers.sort((x, y) => x - y); // Küçükten büyüğe sıralama
// value = numbers.sort((x, y) => y - x); // Büyükten küçüğe sıralama

// console.log(numbers);
// console.log(value);
// console.log(typeof value);

// Object Özellikleri

// let value;

// const user = {
//   name: "Varol",
//   lastName: "Maksutoğlu",
//   age: 25,
//   department: "Bilişim",
//   langs: ["Python", "Java", "Javascript"],
//   adress: {
//     city: "İstanbul",
//     street: "Mecidiyeköy",
//   },
//   work: function () {
//     console.log("Çalışıyor...");
//   },
// };

// value = user;
// value = user.name; // Objectin name özelliğini verir.
// value = user["name"]; // Objectin name özelliğini verir.
// value = user.langs; // Objectin langs özelliğini verir.
// value = user.langs[0]; // Objectin langs özelliğinin 0. indexini verir.
// value = user.adress.city; // Objectin adress özelliğinin city özelliğini verir.
// user.work(); // Objectin work fonksiyonunu çalıştırır.

// Zaman Objesi

// let date = new Date();

// value = date;
// value = date.getFullYear();
// value = date.getMonth();
// value = date.getDate();
// value = date.getDay();
// value = date.getHours();
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

// console.log(user);

// ==========================================================

// Karşılaştırma Operatorleri

// == Eşit mi? Eşitse true, değilse false
// a = 10;
// b = "10";
// console.log(a == b); // true

// === Veri tipi ve değer kontrolü
// a = 10;
// b = "10";
// console.log(a === b); // false

// // != Eşit değil mi? Eşit değilse true, eşitse false
// a = 10;
// b = "10";
// console.log(a != b); // false

// // !== Veri tipi ve değer kontrolü
// a = 10;
// b = "10";
// console.log(a !== b); // true

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

// const user = {
//   name: "Varol",
//   lastName: "Maksutoğlu",
//   age: 25,
//   department: "Bilişim",
//   langs: ["Python", "Java", "Javascript"],
//   adress: {
//     city: "İstanbul",
//     street: "Mecidiyeköy",
//   },
//   work: function () {
//     console.log("Çalışıyor...");
//   },
// };

// console.log(user?.adress?.city);

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
// merhaba("Varol", "Maksutoğlu");

// function merhaba(name = "Bilgi Yok", lastName = "Bilgi Yok") {
//   console.log(`Merhaba ${name} ${lastName}`);
// }
// merhaba("Varol");

// Return ile fonksiyondan değer döndürme
// function square(x) {
//   return x * x;
// }
// console.log(square(3) * 2);

// Arrow Function
// const cube = (x) => x * x * x;
// console.log(cube(3));
