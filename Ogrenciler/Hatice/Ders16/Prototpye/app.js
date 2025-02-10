// Object Literal

// const person1 = {
//   name: "Varol",
//   age: 30,
//   showInfos: function () {
//     console.log("Bilgiler gösteriliyor...");
//   },
//   langs: ["Python", "Java", "C++"],
// };

// const person2 = {
//   name: "Varol",
//   age: 30,
//   showInfos: function () {
//     console.log("Bilgiler gösteriliyor...");
//   },
//   langs: ["Python", "Java", "C++"],
// };

// console.log(person1);
// console.log(person2);

// Yapıcı Fonksiyon (Constructor)
function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;
  // this.showInfos = function () {
  //   console.log("Bilgiler gösteriliyor...");
  // };
}

Person.prototype.showInfos = function () {
  console.log(this.name, "Bilgiler gösteriliyor...");
};

const person1 = new Person("Varol", 30, ["Python", "Java", "C++"]);
// console.log(person1);
const person2 = new Person("Mustafa Cenk", 20, ["Python", "Javascript", "C++"]);
// console.log(person2);

// person1.showInfos();

function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs);
  this.salary = salary;
  // this.showInfos = function () {
  //   console.log("Bilgiler gösteriliyor...");
  // };
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Varol", 30, ["Python", "Java", "C++"], 4000);
console.log(emp1);
emp1.showInfos();
