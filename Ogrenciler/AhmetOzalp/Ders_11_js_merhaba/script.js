//Js Giriş
console.log("Merhaba Dünya");

//Değişkenler
//Değişken tanımlama

// var a=10;    // Function scope
// b= 20;      // Kapsam ? Global scope

//console.log(a + b);

// foo();     // hoisting  (Bellekte bilgi olduğu için önceden çağırabiliyoruz)
// function foo() {
//     c=30;
//     console.log(a + b + c);
// }
// console.log(a + b + c);

// {   
//     let c= 30; //Block scope
//     console.log(a + b + c);
// }

// console.log(a + b + c);

//Değişken Türleri

// Primitive Types
// String
// var str = "2";

// console.log(str);
// console.log(typeof str);


// //Number
// var num = 10;
// console.log(num);
// console.log(typeof num);

// console.log(num + str); // "102"  Burada otomatik tip dönüştürücü ile stringe dönüştürüyor
// console.log(num - str); //  "8"   Burada otomatik tip dönüştürücü ile numbera dönüştürüyor

//boolean 

// var isTrue = true;

//Undefined
// var a;
// console.log(a);

//null  Objedir.  primitive yapıdır direk gösterdiğini tutar

// var b =null;
// console.log(b);
// console.log(typeof b);

//Reference TYpes
//Object
// var user = {
//     name:"Ahmet",
//     age:30,
// };
// console.log(user);
// console.log(typeof user);

//Array
// var items= [1,2,3,4,5];
// var arr = ["Ahmet",30, null, undefined, [1,2,3],{name:"Ahmet"}];
// console.log(arr);
// console.log(typeof arr);



//Functions
// function hello() {
//     console.log("Hello World");
// }
// hello();
// console.log(hello);
// console.log(typeof hello);


//Date Type
// var date = new Date();
// console.log(hello);
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
// console.log("2- ", a, b); // total sonuç 1- [10] [10] 2- [20] [10] çıkar tek rakam olunca böyle yapar

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

                    //Tip Dönüşümleri
// var str="123";
// var num=10;

// console.log(str, typeof str);
// console.log(num, typeof num);

// str = Number(str);
// console.log(str,typeof str);
// num = String(num);
// console.log(num,typeof num);

                    //Operatörler
var a=10;
var b=3;
var sonuc;

//arithmetic operatörler
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

//Math Functions

sonuc=Math.PI;
sonuc=Math.round(3.6); //Yuvarlama
sonuc=Math.ceil(3.2);   //Yukarı yuvarlama
sonuc=Math.floor(3.9);  //Aşşağı Yuvarlama
sonuc=Math.abs(-10);    //Mutlak Değer
sonuc=Math.sqrt(16);    //Karekök
sonuc=Math.pow(2,4);    //üs alma
sonuc=Math.random();    //Rastgele sayı 0-1 arasında
sonuc=Math.floor(Math.round()*100); //ratgele sayı 0-100

console.log(sonuc, typeof sonuc);