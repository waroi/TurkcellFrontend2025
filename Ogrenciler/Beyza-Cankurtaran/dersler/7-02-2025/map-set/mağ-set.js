//Map veri tipi
user={
    name:"beyza",
    age:23,
}
const key1="name";
const key2={a:10,b:20};
const key3=()=> console.log("merhaba");
const key4=key2;

const denemeMap=new Map();
denemeMap.set(key1,"String Değer");
denemeMap.set(key2,"Object Değer");
denemeMap.set(key3,"function değer");
denemeMap.set(key4,"array değer");

console.log(denemeMap);
console.log(typeof denemeMap);

console.log(denemeMap.get("name"));
console.log(denemeMap.get(key2));

denemeMap.forEach((value,key) => console.log(key,value));

//set veri tpi

const mySet=new Set();
mySet.add(10);
mySet.add("varol");
mySet.add({a:10,b:20});
mySet.add([1,2,3,4,5,6]);

console.log(mySet);
console.log(typeof mySet);
//set içindeki değerleri unique olarak oluşturuyor
console.log(mySet.has(20));
