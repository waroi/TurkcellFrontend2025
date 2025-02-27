/*console.log("merhaba dünya");
var a =10;//function scope
b=20;//kapsam ? global scope
console.log(a+b);
foo();//hoisting
function foo(){
    c=30;
    console.log(a+b+c);
}
console.log(a+b+c);*/
var c=[10,20];
var d=c;
console.log("1-",c,d);
c=[20,30,40,50,60];
console.log("2-",c,d);

//tip dönüşümleri
/*
var str="123";
var num=123;
console.log(str,typeof(str));
console.log(num,typeof(num));
str=Number(str);
console.log(str,typeof(str));
num=String(num);
console.log(num,typeof(num));*/

//tip dönüşümleri
var a =1;
var b=3;
var sonuc;
//aritmetik operatörler
console.log(a+b);//toplama
console.log(a-b);//çıkarma
console.log(a*b);//çarpma
console.log(a/b);//bölme
console.log(a%b);//mod alma
console.log(a**b);//üs alma

//Math functions
sonuc=Math.PI;
sonuc=Math.round(3.6);//yuvarlama
sonuc=Math.ceil(3.2);//yukarı yuvarka
sonuc=Math.floor(3.9);//aşağı yuvarla
sonuc=Math.pow(3.9);
sonuc=Math.sqrt(3.9);
sonuc=Math.abs(3.9);
sonuc=Math.random();
sonuc=Math.floor(Math.random()*100);//rastgele sayi 0-100 arası
// console.log(sonuc,typeof sonuc);