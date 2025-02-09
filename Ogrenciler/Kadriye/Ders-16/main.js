// function Person(name, age, langs) {
//   this.name = name;
//   this.age = age;
//   this.langs = langs;
// }
// Person.prototype.showInfos = function (){
//     console.log(this.name, "Bilgi")
// }
// const person1 = new Person("varol", 30, ["python", "java", "C++"])
// const person2 = new Person("onur", 30, ["python", "java", "C++"])

// function Employee(name, age, langs, salary){
//     Person.call(this, name, age,langs)
//     this.salary = salary
// }
// Employee.prototype = Object.create()

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos = function () {
    console.log(this.name, "Bilgi");
  };
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  showInfos() {
    console.log(this.name, "Bilgi", this.salary, "Maaş");
  }
  static cube(x) {
    return x * x * x;
  }
}

e = new Employee("onur", 24, "--");
e.showInfos();
