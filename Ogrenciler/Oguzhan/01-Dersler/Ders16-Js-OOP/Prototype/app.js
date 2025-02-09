function Person(name, age, langs) {
    this.name = name;
    this.age = age;
    this.langs = langs;
}

Person.prototype.showInfos = function () {
    console.log(this.name, "bilgiler yükleniyor")
}

const person1 = new Person("Oguz", 40, ["Python", "Flutter"])


function Employee(name, age, langs, salary) {

    Person.call(this, name, age, langs)
    this.salary = salary
}

Employee.prototype = Object.create(Person.prototype)