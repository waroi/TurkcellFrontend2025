const person1={
   name:"beyza",
   age:23,
   showInfos:function(){
      console.log("bilgilre gösteriliyor");
   },
   lang:["python","js","css","html"],

};
const person2={
   name:"beyza",
   age:23,
   showInfos:function(){
      console.log("bilgilre gösteriliyor");
   },
   lang:["python","js","css","html"],

};

console.log(person1);
console.log(person2);

//kod tekrarı azaltmam lazım.
//Yapıcı fonksiyon-constructor

function person(name,age,langs){
   this.name = name;
   this.age = age;
   this.langs = langs;
   this.showInfos=function(){
   console.log("bilgilre gösteriliyor");

   }
}
person.prototype.showInfos=function(){
   console.log("bilgilre gösteriliyor");
}

const person3=new Person("beyza",23,["python","js","css","html"]);
console.log(person3);
const person4=new Person("beyzaaa",20,["python","js","css"]);
console.log(person4);
person3.showInfos();
//extend
function employee(name,age,salary){
   Person.call(this,name,age,langs);
   this.salary=salary;

}
employee.prototype=Object.create(Person.prototype);
const emp1=new Employee("beyza",23,["python","js","css","html"],2000);
console.log(emp1);
emp1.showInfos();


