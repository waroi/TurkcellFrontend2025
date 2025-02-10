//object Literal
const person1 = {
    name: "beyza",
    age: 23,
    showinfos: function () {
        console.log("bilgiler gösteriliyor...");
    },
    langs: ["Python", "c", "java"],
};
const person2 = {
    name: "beyza",
    age: 23,
    showinfos: function () {
        console.log("bilgiler gösteriliyor...");
    },
    langs: ["Python", "c", "java"],
};
console.log(person1);
console.log(person2);
person1.showinfos();

//yapıcı fonksiyon(constructor)

function Person(name, age, langs) {
    this.name = name;
    this.age = age;
    this.langs = langs;
    // this.showinfos=function(){
    //    console.log("bilgiler gösteriliyor...");
    //}
}
//!!!!!!BURASI ÖNEMLİ!!!!!
Person.prototype.showinfos = function () {
    console.log("bilgiler gösteriliyor...");
}
const person3 = new Person("beyzoş", 24, ["html", "css", "js"]);
const person4 = new Person("beyzoşko", 25, ["html", "css", "js", "react"]);
console.log(person3);
console.log(person4);
function employee(name,age,langs,salary){
    Person.call(this,name,age,langs);
    this.salary=salary;
    // this.showinfos=function(){
    //    console.log("bilgiler gösteriliyor...");
    //}
}
employee.prototype=Object.create(Person.prototype);
const emp1=new employee("beyza",23,["python","c","java"],4000);
console.log(emp1);
emp1.showinfos();