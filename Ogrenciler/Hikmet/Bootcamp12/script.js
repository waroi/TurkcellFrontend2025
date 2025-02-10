function Person(name, age, langs) {
	this.name = name;
	this.age = age;
	this.langs = langs;
}

Person.prototype.showInfos = function () {
	console.log(
		this.name + " is " + this.age + " years old and knows " + this.langs
	);
};

const person1 = new Person("Hikmet", 25, ["Python", "Java", "C++"]);
const person2 = new Person("Ali", 30, ["Python", "Java", "C++"]);

function Employee(name, age, langs, salary) {
	Person.call(this, name, age, langs);
	this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Hikmet", 25, ["Python", "Java", "C++"], 5000);
console.log(emp1);
emp1.showInfos();
