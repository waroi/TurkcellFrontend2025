function Person(name,age,langs){
    this.name=name;
    this.age=age;
    this.langs=langs;
}

Person.prototype.showInfos = function(){
    console.log(this.name, "Bilgiler Gösteriliyor...");
};

const person1= new Person("Seda",23 ,["Python", "Java"]);
const person2= new Person("Zeyno",2 ,["Python", "Java"]);


function Employee(name,age,langs,salary){
    Person.cal(this,name,age,langs);
    this.salary=salary;
}

Employee.prototype=Object.create(Person.prototype);

const emp1 =new Employee("Seda",23,["Python", "Java"],4000);
console.log(emp1);
emp1.showInfos();