//alert("Merhaba Dünya");
document.write("Merhaba Dünya");
console.log("Merhaba Dünya");

var a = 20; //Function scope
b = 10; // global sope
// console.log(a + b);

// foo(); //hoisting
// function foo() {
//   var c = 30;
//   console.log(a + b + c);
// }
// console.log(a + b + c);

// {
//   let c = 30; //block scope
//   console.log(a + b + c);
// }
// console.log(a + b + c);

//primitive Type
var str = "2";
console.log(str);
console.log(typeof str);

var num = 10;
console.log(num);
console.log(typeof num);

console.log(num + str); //string dönüşüm
console.log(num - str); //number dönüşüm

//boolen
var isTrue = true;
//undefiend
var x;
console.log(x);
//null
var y = null;
console.log(y);
console.log(typeof y);

//reference type
//object
var user = {
  name: "ahmet",
  age: 30,
};
console.log(user);
console.log(typeof user);

//Array
var items = [1, 2, 3, 4, 5];
var arr = ["Ahmet", 30, null, undefined, [1, 2, 3], user];
console.log(items);
console.log(typeof items);
console.log(arr);
console.log(typeof arr);

//Function
function hello() {
  console.log("merhaba Dünya 3");
}
hello();
console.log(hello);
console.log(typeof hello);

//data type
var date = new Date();
console.log(date);
console.log(typeof date);

var a = [10, 11];
var b = a;
console.log("1-", a, b);
var a = [20, 112];
console.log("1-", a, b);
