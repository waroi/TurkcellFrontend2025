// Yapıcı Fonksiyon (Constructor)
function Person (name, age, langs){
    this.name = name;
    this.age = age;
    this.langs = this.langs;
}

Person.prototype.showInfos = function(){
    console.log(this.name, "Bilgiler gösteriliyor...");
}
const person1 = new Person("Ela", 24, ["Python", "Java", "C++"]);
console.log(person1);

function Employee(name, age, langs, salary) {
    Person.call(this, name, age, langs);
    this.salary;
}
Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Varol", 30 , ["Javascript", "Python", "C#"]);
console.log(emp1);
emp1.showInfos();