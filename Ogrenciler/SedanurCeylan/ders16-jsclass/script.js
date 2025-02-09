class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfos(){
        console.log("isim: "+ this.name + "Yaş: " + this.age);
    }
}

const person1= new Person("Seda",23);
const person2= new Person("Zeyno",2);
