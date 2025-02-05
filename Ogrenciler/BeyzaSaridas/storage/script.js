/*depolamadan
let userName="beyza";
//iki değer de string olacak 
localStorage.setItem("name:",userName);
//varsa o value'yü atar.
let name=localStorage.getItem("name");
//number alırsam 
let numberS=444;
localStorage.setItem("numberS:",numberS);
let number=Number(localStorage.getItem("numberS"));
console.log(number);
console.log(name);
document.write(name);*/

//başına "" atıp string olarak tutar.
let user={
   name:"Beyza",
   age:24,
   city:"Kütahya",
   langs:["js","css"],
};
localStorage.setItem("user",JSON.stringify(user));
//tırnakları kaldıırp obje haline tekrar getiriyor.
let getUser=JSON.parse(localStorage.getItem("user"));
console.log(getUser);
console.log(typeof getUser);

//session storage için de 
let users=["beyza","ahmet","mehmet"];
localStorage.setItem("users",JSON.stringify("users"));
let getUsers = JSON.parse(localStorage.getItem("users"));
console.log(getUsers);
console.log(typeof getUsers);
let numbers=[2,5,3545,6354,53];
let langs=["js","css"];
//array methos
//let numbers=[2,3,5,2,4434,5433,5342,7785,868,689,7];
//map methos(hızlı çalışır): içinde function veya arrow function
/*const map1=numbers.map(function(){
   return 0;
});
console.log(map1);
const map2=numbers.map((x)=> x*2);
console.log(map2);

/*let userw=[
   {name:"beyza",age:23},
   {name:"beyza",age:23},
];
userw.map()*/
//foreach method
langs.foreach((langs) =>console.log(lang));
//filter
const result=langs.filter((lang)=>lang.length>3);
console.log(result);
//reduce method
const result2=numbers.reduce((total,number)=>total+number,0);//0:total'in ilk değeri-totaldaki değer hiçbir zaman sıfırlanmıyor.
console.log(result2);
//spread 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];
console.log(mergedArray);