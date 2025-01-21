// Js Giriş

// console.log("Merhaba Dünya")

// Değişkenler
// Değişken tanımlama
// var a = 10; // Function scope
// b = 20; // Kapsam ? global scope

// console.log(a+b)

// foo() // hoisting - burada çağırırsak --------Global Execution Context
// function foo() {
//     c = 30;
//     console.log(a + b + c)
// }

// console.log(a + b + c)


// {
//     let c = 30 // Block Scope
//     console.log(a + b + c)
// }

// console.log(a + b + c)


// JS derleyiic önce okuyup hafızaya alıyor sonra mantıklı bir şekilde çalıştırıyor
// fonksiyonlar - referans değerdir(PRIMITIVE) olduğu gibi tutuyor belleğe öyle atıyor 'execution' çalıştırma aşamasına gelince
// değişkenler içinse *********************üsttekiler çok önemli*************************


// Primitive Types
// String
// var str = "Merhaba Gezegen 2346";
// var str = "2"
// console.log(str)
// console.log(typeof str)

// // Number
// var num = 10;
// console.log(num)
// console.log(typeof num)

// console.log(num + str) // 102 --> String dönüşümü yapar
// console.log(num - str) // 8 --> Number dönüşümü yapar

// // Boolean
// var isTrue = true

// Undefined
// var a;
// console.log(a)

// Null --> Null'ın Primitive bir değer olması js'in bir hatası********
// var b = null
// console.log(b)
// console.log(typeof b)


// Referance Types
// Object
// var user = {
//     name: 'Yunus',
//     age: 23
// }
// console.log(user)
// console.log(typeof user)

// Array
// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var arr = ['Varol', 2356, null, undefined, [1, 532, 632], { name: 'Yunus' }]
// console.log(items)
// console.log(typeof items)
// console.log(arr)
// console.log(typeof arr)

// Functions
// function hello() {
//     console.log('Hello WORLDDDDDDDDD')
// }
// hello()
// console.log(hello)
// console.log(typeof hello)

// Date Types
// var date = new Date()
// console.log(date)
// console.log(typeof date)

// var a = 10
// var b = a
// console.log('1-', a, b)
// a = 20
// console.log('2-', a, b)

// var a = [10];
// var b = a;
// console.log("1- ", a, b);
// a = [20];
// console.log("2- ", a, b);


// var a = [10, 20, 30, 40, 50];
// var b = a;
// console.log("1- ", a, b);
// a = [20, 30, 40, 50, 60]
// console.log("2- ", a, b);

// var a = [10, 20]
// var b = a
// console.log("1- ", a, b)
// a.push(30)
// console.log("2- ", a, b)


// Tip Dönüşümleri

// var str = "1sadafgas23" // -- > String'e çevirirken NaN verir
// var num = 10
// console.log(typeof str)
// console.log(typeof num)

// str = Number(str)
// console.log(str, typeof str)

// num = String(num)
// console.log(num, typeof num)

// Operatörler
// var a = 134
// var b = 346
// var sonuc;

// // Aritmetik Operatörler
// console.log(a + b, "Toplama"); // Toplama
// console.log(a - b, "Çıkarma"); // Çıkarma
// console.log(a * b, "Çarpma"); // Çarpma
// console.log(a / b, "Bölme"); // Bölme
// console.log(a % b, "Mod alma"); // Mod Alma
// console.log(a ** b, "Üs alma"); // Üs Alma

// Matematik Fonksiyonları
sonuc = Math.PI // Pİ sayısı
sonuc = Math.round() // [0.0-0.5) aşağı üstünü üste
sonuc = Math.ceil(3.2); // Yukarı yuvarlar
sonuc = Math.floor(3.9); // Aşağı yuvarlar
sonuc = Math.abs(-1900) // Mutlak değer
sonuc = Math.sqrt(16); // Karekök
sonuc = Math.pow(8, 3) // üs alma
sonuc = Math.floor(Math.random() * 100); // random sayı üretir ve deafultu [0-1) bu ise [0-100) üretir


console.log(sonuc, typeof sonuc)