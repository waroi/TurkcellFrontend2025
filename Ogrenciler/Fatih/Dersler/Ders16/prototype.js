function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;
}

Person.prototype.showInfos = function () {
  console.log(`Name: ${this.name} Age: ${this.age} Langs: ${this.langs}`);
};

const person1 = new Person("Fatih", 25, ["Python", "Java", "C++"]);
const person2 = new Person("Mehmet", 24, ["JavaScript", "HTML", "CSS"]);

function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Fatih", 25, ["Python", "Java", "C++"], 4000);
console.log(emp1);
emp1.showInfos();
