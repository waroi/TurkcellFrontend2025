class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
  }
}

const person1 = new Person("Fahri", 23);
const person2 = new Person("Umut", 22);

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  showInfos() {
    console.log(
      "İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
    );
  }
  static cube(x) {
    return x * x * x;
  }
}

const emp1 = new Employee("Fahri", 22, 1000);
console.log(emp1);
emp1.showInfos();

console.log(Employee.cube(3));
