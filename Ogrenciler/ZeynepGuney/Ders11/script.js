// JS Giriş
// console.log("merhaba dünya");
// Değişkenler
// Değişken tanımlamala
var a = 10; // Function scope
b = 20; // Kapsam ? Functipn scope - var gibi çalışıyor

// function foo(){
//     c=30;
//     console.log(a+b+c); // dışarıdan c'ye erişilemiyor
// }
//console.log(a+b+c);
// foo();

foo(); //hoisting
function foo(){
    c=30;
    console.log(a+b+c); // dışarıdan c'ye erişilir
}
console.log(a+b+c);

// {
//     c=30; // Block scope - hiçbir şey yazmayınca da var gibi çalışıyor, dışarıdan c'ye erişilebiliyor burada
//     console.log(a+b+c);
// }
// console.log(a+b+c);

// function foo(){
//     c=30;
//     console.log(a+b+c); // dışarıdan c'ye erişilir
// }
// foo();
// console.log(a+b+c);

//Global Execution Context !! Araştır

// Primitive Types
// String
var str = "Merhaba Dünya2";
var str2 = "2";

console.log(str);
console.log(typeof(str));
// number 
var num = 10;
console.log(num);
console.log(typeof(num));

console.log(num + str2); //102
console.log(num - str2); //8

//boolean
var isTrue = true;

var a;
console.log(a)

//Null
var x = null;
console.log(x)
console.log(typeof(x))

// Reference Types
// Object
var user ={
    name :"zeynep",
    age: 24,
};
console.log(user);
console.log(typeof(user));

// array 
var items = [1,2,3,4,5];
var arr = ["Ahmet", 30, null, undefined, [1,2,3], {name:"zeynep"}];
console.log(arr);
console.log(typeof(arr));

//function
function hello(){
    console.log("hello");
}
hello();
console.log(hello);
console.log(typeof(hello));

//date type
var date = new Date();
console.log(date);
console.log(typeof(date));

var date = new Date("2021-01-05");

// var z = 10;
// var w = z;
// console.log(z, w); //10,10
// z = 20;
// console.log(z,w); // 20,10

var z = [10];
var w = z;
console.log(z, w); 
z = [20];
console.log(z,w); 

var z = [10,20,30,40,50];
var w = z;
console.log(z, w); 
z = [20,30,40,50,60];
console.log(z,w); 

var a = [10,20];
var b = a;
console.log(a, b); 
a.push(30)
console.log(a,b); 

var a = [10,20];
var b = a;
console.log(a, b); 
b.push(40)
console.log(a,b); 

// Tip Dönüşmeleri

var str = "123";
var num = 30;
console.log(typeof(str))
console.log(typeof(num))

str = Number(str);
console.log(str, typeof str);

num = String(num);
console.log(num, typeof num);

// Operatörler
var a = 10;
var b = 3;
var sonuc;

//Aritmetik Operatörler
console.log(a+b); // + --> Toplama
console.log(a-b); // - --> Çıkarma
console.log(a*b); // * --> Çarpma
console.log(a/b); // / --> Bölme
console.log(a%b); // % --> Mod
console.log(a**b); // ** --> Üs alma

sonuc = Math.PI;
sonuc = Math.round(3.6); // yuvarlama
sonuc = Math.ceil(3.2); // yukarı yuvarlama
sonuc = Math.floor(3.9); // aşağı yuvarlama
sonuc = Math.abs(-3.9); // mutlak değer
sonuc = Math.sqrt(16); // karekök
sonuc = Math.pow(2,6); // üs alma
sonuc = Math.random(); // rastgele sayı 0-1 arası 
sonuc = Math.floor(Math.random() * 100); // Rastgele Sayı - ile 100 arasında

console.log(sonuc, typeof sonuc);