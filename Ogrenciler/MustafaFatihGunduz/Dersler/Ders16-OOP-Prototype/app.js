// Map Veri Tipi

// Map veri tipi, key-value çiftlerini saklamak için kullanılan bir veri tipidir. Map veri tipi, 
// Object veri tipine benzer bir yapıya sahiptir. 
// Ancak Object veri tipinden farklı olarak, Map veri tipi key olarak herhangi bir veri tipini kullanabilir. 
// Object veri tipinde ise key olarak sadece string ve symbol veri tipleri kullanılabilir.

user = {
    name: "Mustafa",
    age: 26,
    city: "Konya",
    langs : ["Java", "Python", "Javascript"]
}

const key1 = "Mustafa";
const key2 = {a:10, b:20};
const key3 = () => console.log("Merhaba");
const key4 = [1,2,3];

const myMap = new Map();

myMap.set(key1, "String Değer");
myMap.set(key2, "Object Değer");
myMap.set(key3, "Function Değer");
myMap.set(key4, "Array Değer");

console.log(myMap);
console.log(typeof myMap);

myMap.forEach(function(value, key){
    console.log(key, value);
});

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));
console.log(myMap.get(key4));

//Set Veri tipi
// Set veri tipi, bir değeri sadece bir defa saklamak istediğimizde kullanılan bir veri tipidir.
const mySet = new Set();
mySet.add(100);
mySet.add("Mustafa");
mySet.add([1,2,3]);
mySet.add({a:1, b:2});

console.log(mySet);
console.log(typeof mySet);
console.log(mySet.has([1,2,3]));
