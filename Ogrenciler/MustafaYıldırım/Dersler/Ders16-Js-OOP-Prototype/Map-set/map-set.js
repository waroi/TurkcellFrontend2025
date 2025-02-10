//map veri tipi

user = {
  name: "mustafa",
  soyad: "yıldırım",
  age: 24,
};

let myMap = new Map();

const key1 = "name";
const key2 = { a: 10, b: 20 };
const key3 = () => console.log("hello");
const key4 = [1, 2, 3, 4];

myMap.set(key1, "String değer");
myMap.set(key2, "object değer");
myMap.set(key3, "function değer");
myMap.set(key4, "array değer");

//console.log(myMap);

//myMap.forEach((value, key) => console.log(key));

//set veri tipi

let mySet = new Set();
mySet.add(100);
mySet.add([1, 2, 3]);
mySet.add("veri");
mySet.add({ a: 1, b: 2 });

console.log(mySet);

// let myArray = [100, [1, 2, 3], "veri", { a: 1, b: 2 }];
// console.log(myArray);
