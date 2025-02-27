//Local Storage
//string olarak kullanımı
/*let userName="beyza";
localStorage.setItem('name:',userName);//ikiside string olmalı
let name=localStorage.getItem("name");
console.log(name);
document.write(name);
*/
//number olarak kullanımı
let username = "444";
localStorage.setItem("name", username);
let name = Number(localStorage.getItem("name"));

console.log(name); 
console.log(typeof name); 

document.write(name); 
//object olarak kullanımı
let user={
    name:"beyza",
    age:23,
    city:"konya",
    langs:["python","js","c++"],
}
localStorage.setItem("user",JSON.stringify(user));
let getUser=JSON.parse(localStorage.getItem("user"));
console.log(getUser);
console.log(typeof getUser);
//array olarak kullanımı
let users=["beyza","ali","veli"];
localStorage.setItem("users",JSON.stringify(users));
let getUsers=JSON.parse(localStorage.getItem("users"));
console.log(getUsers);
console.log(typeof getUsers);

//LOCAL İLE SESSION ARASINDA HERHANGİ BİR FARK YOK!!!
//array methodları
let numbers=[23,1,2,3,4,5,6,7,8,9,17];
let langs=["python","java","c","php"];
//map methodu ===arrayla kullanabiliyoruz objeyle kullanmaıyoruz
const map1=numbers.map((x)=> x*2);
console.log(map1);
langs.forEach((lang)=>console.log(lang));
//filter methodu
const result=langs.filter((lang)=>lang.length>3);
console.log(result);
//reduce methodu
const resultt=numbers.reduce((total,number)=>total+number,0);//0 totalin sıfır olduğunu söylüyor
console.log(resultt);
//spread operatör
let lan=["python","java","c","php"];
let lang2=["c#","javascript","html","css"];
let rsult=[...lan, ...lang2];//havalııı
console.log(rsult)
//destructing
let uuser={
    name:"beyzoş",
    age:24,
    city:"New York",
    langs:["python","js","c++"],
};
let {name:isim,age:yas, ...geriyeKalanlar}=uuser;
console.log(isim);
console.log(yas);
console.log(geriyeKalanlar);
let numberss=[23,1,2,3,4,5,6,7,8,9,17];
let [a,b, ...geriyeKalanlarr]=numberss;
console.log(a);
console.log(b);
console.log(geriyeKalanlarr);