class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	showInfos() {
		console.log(this.name + " is " + this.age + " years old");
	}
}

const person2 = new Person("Hikmet", 25);
const person3 = new Person("Ali", 30);

class Employee extends Person {
	constructor(name, age, salary) {
		super(name, age);
		this.salary = salary;
	}
	showInfos() {
		console.log(
			this.name + " is " + this.age + " years old and earns " + this.salary
		);
	}
	static cube = (x) => x * x * x;
}

const emp1 = new Employee("Hikmet", 25, 5000);

console.log(Employee.cube(3));

console.log(emp1);
