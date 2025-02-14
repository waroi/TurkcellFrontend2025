function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;
}

Person.prototype.showInfos = function () {
  console.log(this.name, "Bilgiler gösteriliyor");
};

const person1 = new Person("Varol", 30, ["Python", "Java", "C++"]);
const person2 = new Person("Fahri", 23, ["Python", "Javascript", "CSS"]);

function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Fahri", 22, ["Python", "Javascript", "CSS"], 1000);
console.log(emp1);
emp1.showInfos();
