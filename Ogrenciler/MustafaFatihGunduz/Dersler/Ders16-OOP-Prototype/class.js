class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    showInfos() {
        console.log("Name: " + this.name + " Age: " + this.age + " City: " + this.city); ;
    }
}

const person1 = new Person("Mustafa", 25, "Konya");
const person2 = new Person("Fatih", 24, "Istanbul");
person1.showInfos();

class Employee extends Person {
    constructor(name, age, city, salary) {
        super(name, age, city);
        this.salary = salary;
    }

    showInfos() {
        super.showInfos();
        console.log("Salary: " + this.salary);
    }
}