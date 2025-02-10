class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
}

const person1 = new Person("Fatih", 25);
const person2 = new Person("Mehmet", 24);

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  showInfos() {
    super.showInfos();
    console.log(`Salary: ${this.salary}`);
  }
  static cube(x) {
    return x * x * x;
  }
}

const emp1 = new Employee("Fatih", 25, 4000);
console.log(emp1);
emp1.showInfos();

console.log(Employee.cube(3));
