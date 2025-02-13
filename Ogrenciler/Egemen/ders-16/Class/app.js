class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {

        console.log(this.name, this.age);

    }
}

// const person1 = new Person("egemen", 27);
// const person2 = new Person("Sila", 25);

// person1.showInfos();


class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    static cube(x) {    //obje oluşturmadan static çağırmamızı sağlar.
        return x * x * x;
    }
}


const emp1 = new Employee("sila", 25, 2000);

console.log(emp1);
emp1.showInfos();

console.log(Employee.cube(5));
