//Object Literal
// const person1 = {
//     name: "Mehmet",
//     age: 24,
//     showInfos: function () {
//         console.log("Bilgiler gösteriliyor...");
//     },
//     langs: ["Python", "Java", "Javascript"]
// }

// const person2 = {
//     name: "Mehmet",
//     age: 24,
//     showInfos: function () {
//         console.log("Bilgiler gösteriliyor...");
//     },
//     langs: ["Python", "Java", "Javascript"]
// }

// console.log(person1);
// console.log(person2);

//Yapıcı Fonksiyon (Constructor)
    // function Person(name, age, langs) {
    //     this.name = name;
    //     this.age = age;
    //     this.langs = langs;
    //     // this.showInfos = function () {
    //     //     console.log("Bilgiler gösteriliyor...");
    //     // }
    // }

// Person.prototype.showInfos = function () {
//     console.log("Bilgiler gösteriliyor...");
// }

// const person1 = new Person("Mehmet", 24, ["Python", "Java", "Javascript"]);
// console.log(person1);
// const person2 = new Person("Ahmet", 24, ["Python", "Java", "Javascript"]);
// console.log(person2);

// person1.showInfos();


// function Employee(name, age, langs, salary) {
//     Person.call(this, name, age, langs);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);

// const emp1 = new Employee("Mehmet", 24, ["Python", "Java", "Javascript"], 4000);
// console.log(emp1);
// emp1.showInfos();



//class

class Person {
    constructor(name, age, langs) {
        this.name = name;
        this.age = age;
        this.langs = langs;
    }

    showInfos() {
        console.log("İsim" + this.name + "Yaş: " + this.age + "Diller: " + this.langs);
    }
}

const person1 = new Person("Mehmet", 24, ["Python", "Java", "Javascript"]);
const person2 = new Person("Ahmet", 24, ["Python", "Java", "Javascript"]);

// console.log(person1);
// console.log(person2);
// person1.showInfos();
// person2.showInfos();

class Employee extends Person {
    constructor(name, age, langs, salary) {
        super(name, age, langs);
        this.salary = salary;
    }

    showInfos() {
        console.log("İsim" + this.name + "Yaş: " + this.age + "Diller: " + this.langs + "Maaş: " + this.salary);
    }
    static cube(x) {
        console.log(x * x * x);
    }
}

emp1 = new Employee("Mehmet", 24, ["Python", "Java", "Javascript"], 4000);
console.log(emp1);
emp1.showInfos();

console.log(Employee.cube(3));