// object literal

const person1 = {
  name: "mıstık",
  age: 20,
  showinfos: function () {
    console.log("bilgiler gösteriliyor");
  },
  langs: ["python", "java", "css"],
};

const person2 = {
  name: "mıstık",
  age: 20,
  showinfos: function () {
    console.log("bilgiler gösteriliyor");
  },
  langs: ["python", "java", "css"],
};

// console.log(person1);
// console.log(person2);

//constructor

function person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;
  //   this.showinfos = function () {
  //     console.log("bilgiler gösteriliyor");
  //   };
}
person.prototype.showinfos = function () {
  console.log("bilgiler gösteriliyor");
};

const person11 = new person("mıstıko", 30, ["java", "css", "python"]);
const person22 = new person("busem", 30, ["java", "css", "python"]);
person11.showinfos();
// console.log(person11);
person22.showinfos();
// console.log(person22);

function Employee(name, age, langs, salary) {
  //   this.name = name;
  //   this.age = age;
  //   this.langs = langs;
  person.call(this, name, age, langs);
  this.salary = salary;
  //   this.showinfos = function () {
  //     console.log("bilgiler gösteriliyor");
  //   };
}
Employee.prototype = Object.create(person.prototype);

const employe1 = new Employee("mistiko", 30, ["c", "js", "tp"], 4000);
employe1.showinfos();
console.log(employe1);
