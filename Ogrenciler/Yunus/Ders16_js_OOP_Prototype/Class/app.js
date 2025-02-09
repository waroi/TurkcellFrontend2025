// Class
// aslında class diye bir şey yok :D karşılığı prototype

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    showInfos() {
        console.log(`İsim: ${this.name}, yaş: ${this.age}`)
    }
}

const yunus = new Person('Yunus', 23)
const varolHocam = new Person('Varol', 30)
console.log(yunus)
console.log(varolHocam)

// bu üstteki showinfosu bu yapıyor aslında bu kadar kolay es+6 sonrasında
// showInfos() {
//     console.log(`İsim: ${this.name}, yaş: ${this.age}`)
// }


class Employee extends Person {
    constructor(name, age, salary) {
        // this.name = name
        // this.age = age
        super(name, age) // süper demek üstekini alıyor
        this.salary = salary
    }
    // yukarıdakini ezer bunu kullanır çünkü bu prototypeda var EZMEKKKKKKKKKKKKKKKK
    static showInfos() {
        console.log(`22222222`)
    }
    static cube(x) {
        return x * x * x
    }
}

const emp1 = new Employee('asdasd', 24, 325623523)
console.log(emp1)
emp1.showInfos() // BU EN ÜSTTEKİ PROTOTYPEI ALIR EZEMEYİZ KENDİ İÇİNDEKİYLE Çünkü static o :D onun kullanımı altta
Employee.showInfos()

console.log(Employee.cube(62))