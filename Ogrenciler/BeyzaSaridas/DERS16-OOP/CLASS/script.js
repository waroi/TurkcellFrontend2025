class Person{
   constructor(name,age){
     this.name = name;
     this.age = age;
   }
   showInfos(){
     console.log("isim:" +this.name +"yaş:"+this.age);
   }
  }
  const person1=new Person("beyza",23);
  const person2=new Person("baetyyza",20);
  console.log(person1.name);
  
  class Employee extends Person{
        constructor(name,age,salary){
       super(name,age);
       this.salary=salary;
      }
      showInfos(){
        console.log("isim:" +this.name +"yaş:"+this.age+"maaş:"+this.salary);
      }
      static cube(x){
        return x*x*x;
      }
  }
  
  emp1=new Employee("beyza",32,32000);
  console.log(emp1);
  emp1.showInfos();
  console.log(Employee.cube(3));//sttaatic method