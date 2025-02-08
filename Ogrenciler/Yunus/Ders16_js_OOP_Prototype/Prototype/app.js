// Object Literal

// const person1 = {
//     // Object Literal
//     name: 'Yunus',
//     age: 23,
//     showInfos: function () {
//         console.log("Bilgiler gösteriliyor...")
//     },
//     langs: ["Python", "JavaScript", 'c++']
// }

// const person2 = {
//     // Object Literal
//     name: 'Yunus',
//     age: 23,
//     showInfos: function () {
//         console.log("Bilgiler gösteriliyor...")
//     },
//     langs: ["Python", "JavaScript", 'c++']
// }

// console.log(person1)
// console.log(person2)

// Yapıcı fonksiyon (Constructor)
function Person(name, age, langs) {
    // this oluşturacağımız objeyi gösteriyor oluşturacağımız objenni nameini dışarıdan aldığımız name'E aynısı diğerleri için de
    this.name = name
    this.age = age
    this.langs = langs
    // this.showInfos = function () {
    //     console.log('Bilgiler gösteriliyor...')
    // }
}

Person.prototype.showInfos = function () { // içlerinde yok ama ikisinin de prototypeınde showInfso methodu var çoklamadık bir tane var artık ramde artık yarısı kadar yer kaplıyor (2den 1 tane varsa tabi :D)
    console.log('Bilgiler gösteriliyor...')
}

const person1 = new Person('yunus', 23, ['js', 'html', 'nextjs'])
console.log(person1)
const person2 = new Person('varol', 30, ['js', 'html', 'nextjs'])
console.log(person2)

// this bir üst scope u gösterir

// kalıtım başka bir prototypeını başka bir prototype a vermek


function Employee(name, age, langs, salary) {
    // this.name = name
    // this.age = age
    // this.langs = langs
    // bu üstteki 3 ü diğer personelde var
    Person.call(this, name, age, langs) // MİRAS ALMA BUUUUU----this referanslarını göndericek, almak yok gönderiyoruz

    this.salary = salary
    // this.showInfos = function () {
    //     console.log('Bilgiler gösteriliyor...')
    // }
}


Employee.prototype = Object.create(Person.prototype)
// personın prototypeı var, methodla yazdık employeede öyle bir method yok ya tekrar yazıcaz DRY'a girecek ya personınkini alıcaz

const emp1 = new Employee('yunus', 23, 'Turkish', 32698235239493)

console.log(emp1)
emp1.showInfos()