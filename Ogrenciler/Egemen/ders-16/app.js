function Person(name, age) {    // yapıcı fonksyon constructor gibi calisir.
    this.name = name;
    this.age = age;

}


Person.prototype.showInfos = function () {
    console.log("Bilgiler Gösteriliyor");

}

const person1 = new Person("egemen", 27);
const person2 = new Person("sila", 25);

function Employee(name, age, salary) {
    Person.call(this, name, age, salary);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("egemen", 27, 65000);
console.log(emp1);