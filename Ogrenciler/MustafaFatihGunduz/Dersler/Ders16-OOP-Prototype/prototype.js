// const person1 = {
//     name: 'Mustafa',
//     age: 26,
//     showInfos: function(){
//         console.log('Bilgiler gösteriliyor...');
//     },
//     langs: ['Java', 'Python', 'Javascript']
// }

// const person2 = {
//     name: 'Zeki',
//     age: 24,
//     showInfos: function(){
//         console.log('Bilgiler gösteriliyor...');
//     },
//     langs: ['Java', 'Javascript']
// }

// console.log(person1);
// console.log(person2);

 function Person(name, age, city,langs){ //! This parametresi oluşturulacak objeyi temsil eder.
        this.name = name;
        this.age = age;
        this.city = city;
        // this.showInfos = function(){ //! Bu fonksiyonu her obje için ayrı ayrı bellekte yer kaplar.
        //     console.log('Bilgiler gösteriliyor...');
        // }
        this.langs = langs;
    }
    Person.prototype.showInfos = function(){
        console.log('Bilgiler gösteriliyor...');
    } //! Bu fonksiyonu prototype üzerinden ekledik. Bu sayede her obje için ayrı ayrı bellekte yer kaplamaz.

const person1 = new Person('Mustafa', 26, 'Konya', ['Java', 'Python', 'Javascript']);
const person2 = new Person('Zeki', 24, 'Ankara', ['Java', 'Javascript']);
console.log(person1);
console.log(person2);

function Employee(name, age, salary){
    Person.call(this, name, age); //! Bu satır ile Person fonksiyonunun this'ini Employee fonksiyonunun this'ine eşitledik.
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype); //! Employee fonksiyonunun prototype'ını Person fonksiyonunun prototype'ına eşitledik.
const emp = new Employee('Mustafa', 26, 4000);
console.log(emp);
