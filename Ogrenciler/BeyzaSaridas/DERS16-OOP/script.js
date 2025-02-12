//map veri tipi
user ={
   name:"beyza",
   age:23,
};
//value kısmında herhangi bir veri türü olabilir.
//map de dönebiliriz, foreach gibi  

//map veri tipi tanımlama
const key1="name";
const key2={a:10,b:20};
const key3=()=> console.log("merhaba");
const key4=key2;

const denemeMap=new Map();

denemeMap.set(key1,"string");
denemeMap.set(key2,"object");
denemeMap.set(key3,"function");
denemeMap.set(key4,"array");

console.log(denemeMap);
console.log(typeof denemeMap);
console.log(denemeMap.get("name"));
console.log(denemeMap.get(key2));
denemeMap.forEach((value,key)=>console.log(key,value));


//set
const mySet=new Set();
mySet.add(100);
mySet.add("beyza");
mySet.add({a:10,b:20});
mySet.add([1,23,4312,3,42]);
console.log(mySet);
console.log(typeof mySet);


