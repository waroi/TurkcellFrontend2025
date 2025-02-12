// Class

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + "Yaş: " + this.age);
    }
}
const person1 = new Person("Ela", 25);

class Employee extends Person{
    constructor(name, age, salary){
        super(name, age);
        this.salary;
    }
    showInfos(){
        console.log("İsim: " + this.name + "Yaş: " + this.age + "Maaş: " + this.salary);
    }
}
