// const person1 = {
//     name:"Zeynep",
//     age:24,
//     showInfos: function(){
//         console.log("Bilgiler gösteriliyor...");
//     },
//     langs:["Python, Java, Javascript"],
// };
// const person2 = {
//     name:"Zeynep",
//     age:24,
//     showInfos: function(){
//         console.log("Bilgiler gösteriliyor...");
//     },
//     langs:["Python, Java, Javascript"],
// };
// console.log(person1);
// console.log(person2);

/////////////////////////////////////

// function Person(name, age, langs){
//     this.name = name;
//     this.age = age;
//     this.langs = langs;
//     this.showInfos = function(){
//         console.log("Bilgiler gösteriliyor...");
//     };
// }
// let person1 = new Person("zeynep", 24, ["python", "c++"]);
// console.log(person1);
// let person2 = new Person("zeynep", 24, ["python", "c++"]);
// console.log(person2);

/////////////////////////////////////


function Person(name, age, langs){
    this.name = name;
    this.age = age;
    this.langs = langs;
}
Person.prototype.showInfos = function(){
    console.log("Bilgiler gösteriliyor...");
};
let person1 = new Person("zeynep", 24, ["python", "c++"]);
console.log(person1);
let person2 = new Person("zeynep", 24, ["python", "c++"]);
console.log(person2);


// bir yapıcı fonksiyon daha var

function Employee(name, age, langs, salary){
    Person.call(this, name, age, langs);
    this.salary = salary;
    //     this.showInfos = function(){
    //         console.log("Bilgiler gösteriliyor...");
    //     };
}
Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Zeynepp", 25, ["ddd", "aaa"], 400);
console.log(emp1);
emp1.showInfos();

