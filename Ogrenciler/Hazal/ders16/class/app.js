class Person{
    constructor(name, age){
        this.name= name;
        this.age=age;  
    }
    showInfos(){
        console.log("İsim: " + this.name + "Yaş: " + this.age);
    }
}

const person1= new Person("Hazal", 26);
const person2= new Person("Ahmet", 30);

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
      console.log(
        "İsim: " + this.name + " Yaş: " + this.age + " Maaş: " + this.salary
      );
    }
    static cube(x) {
      return x * x * x;
    }
  }
  
  emp1 = new Employee("Hazal", 26, 4000);
  console.log(emp1);
  emp1.showInfos();
  
  console.log(Employee.cube(3)); // static method