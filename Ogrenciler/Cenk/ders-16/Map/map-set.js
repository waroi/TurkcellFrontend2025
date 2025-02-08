// map veri tipi

user = {
  name: "Cenk",
  age: 25,
};

const key1 = "name";
const key2 = {a: 10, b: 20};
const key3 = () => console.log("merhaba");
const key4 = ["a", "b", "c"];

const denemeMap = new Map();

denemeMap.set(key1, "String Değer");
denemeMap.set(key2, "Object Değer");
denemeMap.set(key3, "Function Değer");
denemeMap.set(key4, "Array Değer");

// console.log(denemeMap);
// console.log(typeof denemeMap);

// console.log(denemeMap.get("name"));
// console.log(denemeMap.get(key2));

// denemeMap.forEach((value, key) => {
//   console.log(key, value);
// });

const mySet = new Set();
mySet.add(100);
mySet.add("Cenk");
mySet.add({a: 10, b: 20});
mySet.add([1, 2, 3, 4, 5]);

console.log(mySet);
