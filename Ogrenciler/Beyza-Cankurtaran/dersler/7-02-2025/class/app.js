//class yapısı
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showinfos(){
        console.log("isim:"+this.name+"yaş:"+this.age);
    }
}
const person1=new Person("beyza",23);
const person2=new Person("ahmet",65);
person1.showinfos();
person2.showinfos();
class employee extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary=salary;
    }
    showinfos(){
        console.log("isim:"+this.name+"age:"+this.age+"salary:"+this.salary);
    }
    static cube(x){
        return x*x*x;
    }
}
const emp1=new employee("beyzaa",25,35000);
emp1.showinfos();

console.log(employee.cube(3));