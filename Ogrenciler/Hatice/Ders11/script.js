// Js Giriş
// console.log("Merhaba Dünya");

// Değişkenler
// Değişken tanımlama - Scope
// var a = 10; // var: Function scope
// let a = 10; // let /const: Block scope

// b = 20; // Kapsam ? global scope

// console.log(a + b);
// foo(); // hoisting
// function foo() {
//   c = 30;
//   console.log(a + b + c);
// }
// console.log(a + b + c);

// {
//   let c = 30; // Block scope
//   console.log(a + b + c);
// }
// console.log(a + b + c);

// Değişken Türleri

// Primitive Types
// String
// var str = "2";

// console.log(str);
// console.log(typeof str);

// // Number
// var num = 10;
// console.log(num);
// console.log(typeof num);

// console.log(num + str); // 102 -> String dönüşümü yapar
// console.log(num - str); // 8 -> Number dönüşümü yapar

// // Boolean
// var isTrue = true;

// Undefined
// var a;
// console.log(a);

// Null
// var b = null;
// console.log(b);
// console.log(typeof b);

// Reference Types
// Object
// var user = {
//   name: "Ahmet",
//   age: 30,
// };
// console.log(user);
// console.log(typeof user);

// Array
// var items = [1, 2, 3, 4, 5];
// var arr = ["Ahmet", 30, null, undefined, [1, 2, 3], { name: "Ahmet" }];
// console.log(arr);
// console.log(typeof arr);

// Functions
// function hello() {
//   console.log("Hello World");
// }
// hello();
// console.log(hello);
// console.log(typeof hello);

// Date Type
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var a = 10;
// var b = a;
// console.log("1- ", a, b);
// a = 20;
// console.log("2- ", a, b);

// var a = [10];
// var b = a;
// console.log("1- ", a, b);
// a = [20];
// console.log("2- ", a, b);

// var a = [10, 20, 30, 40, 50];
// var b = a;
// console.log("1- ", a, b);
// a = [20, 30, 40, 50, 60];
// console.log("2- ", a, b);

// var a = [10, 20];
// var b = a;
// console.log("1- ", a, b);
// a.push(30);
// console.log("2- ", a, b);

// Tip Dönüşümleri

// var str = "123";
// var num = 10;
// console.log(str, typeof str);
// console.log(num, typeof num);

// str = Number(str);
// console.log(str, typeof str);
// num = String(num);
// console.log(num, typeof num);

// Operatörler
var a = 10;
var b = 3;
var sonuc;

// Arithmetic Operators
// console.log(a + b, "Toplama"); // + -> Toplama Operatörü
// console.log(a - b, "Çıkarma"); // - -> Çıkarma Operatörü
// console.log(a * b, "Çarpma"); // * -> Çarpma Operatörü
// console.log(a / b, "Bölme"); // / -> Bölme Operatörü
// console.log(a % b, "Mod"); // % -> Mod Alma Operatörü
// console.log(a ** b, "Üs"); // ** -> Üs Alma Operatörü

// Math Functions

sonuc = Math.PI; // Pi sayısı
sonuc = Math.round(3.6); // Yuvarlama
sonuc = Math.ceil(3.2); // Yukarı yuvarlama
sonuc = Math.floor(3.9); // Aşağı yuvarlama
sonuc = Math.abs(-10); // Mutlak Değer
sonuc = Math.sqrt(16); // Karekök
sonuc = Math.pow(2, 4); // Üs Alma
sonuc = Math.random(); // Rastgele Sayı - 0 ile 1 arasında
sonuc = Math.floor(Math.random() * 100); // Rastgele Sayı - ile 100 arasında

console.log(sonuc, typeof sonuc);
