// const person1 = {
//   name: "Cenk",
//   age: 25,
//   showInfos: function () {
//     console.log("Bilgiler gösteriliyor...");
//   },
//   langs: ["Python", "Java", "Javascript"],
// };

// const person2 = {
//   name: "Cenk",
//   age: 25,
//   showInfos: function () {
//     console.log("Bilgiler gösteriliyor...");
//   },
//   langs: ["Python", "Java", "Javascript"],
// };

// Yapıcı Fonksiyonlar (Constructor)
function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;
  //   this.showInfos = function () {
  //     console.log("Bilgiler gösteriliyor...");
  //   };
}

Person.prototype.showInfos = function () {
  console.log("İsim: " + this.name + " Yaş: " + this.age);
};

const person1 = new Person("Cenk", 25, ["Python", "Java", "Javascript"]);
// console.log(person1);

const person2 = new Person("Emre", 24, ["C#", "Python", "Javascript"]);
// console.log(person2);

// person1.showInfos();
// person2.showInfos();

function Employee(name, age, langs, salary) {
  //   this.name = name;
  //   this.age = age;
  //   this.langs = langs;
  Person.call(this, name, age, langs);
  this.salary = salary;
  //   this.showInfos = function () {
  //     console.log("Bilgiler gösteriliyor...");
  //   };
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Cenk", 25, ["Python", "Java", "Javascript"], 4000);
console.log(emp1);
emp1.showInfos();
