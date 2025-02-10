//class
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log("isim: " + this.name + " yas: " + this.age);
  }
}

const person1 = new person("ahmet", 30);
const person2 = new person("veli", 30);
// console.log(person1);
// person1.showInfos();
// console.log(person2);
// person2.showInfos();

class employe extends person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  showInfos() {
    console.log(
      "isim: " + this.name + " yas: " + this.age + " maaş: " + this.salary
    );
  }

  static cube(x) {
    return x * x * x;
  }
}

// const emp1 = new employe("zeki", 35, 4520);
// console.log(emp1);
// emp1.showInfos();

console.log(employe.cube(4));
