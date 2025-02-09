class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("isim: " + this.name + " Yaş: " + this.age);
    }
}
const person1 = new Person("Ahmet", 25);
const person2 = new Person("Zey", 24);

// console.log(person1);
// console.log(person2);
// person1.showInfos();
// person2.showInfos();

class Employee extends Person{
    constructor(name, age, salary){
        super(name, age);
        this.salary = salary;
    }
    showInfos(){
       console.log( "isim: " + this.name + " Yaş: " + this.age + "maaş: " +this.salary);
    }
    static cube(x){
        return x*x*x;
    }
}
const emp1 = new Employee("z", 22, 444);
console.log(emp1);
emp1.showInfos();

console.log(Employee.cube(3)); //static method