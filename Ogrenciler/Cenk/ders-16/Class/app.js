// Class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log(`Ad: ${this.name} Yaş: ${this.age}`);
  }
}

const person1 = new Person("Cenk", 25);
const person2 = new Person("Varol", 30);

// console.log(person1);
// console.log(person2);

// person1.showInfos();
// person2.showInfos();

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  showInfos() {
    console.log(`Ad: ${this.name} Yaş: ${this.age} Maaş: ${this.salary}`);
  }
}

emp1 = new Employee("Cenk", 25, 4000);
console.log(emp1);
emp1.showInfos();

console.log(Math.PI);
