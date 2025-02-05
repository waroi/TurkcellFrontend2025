// Storageler sadece STRING DEĞER TUTUYORRRRRRRRRRRRR


// Local Storage - string olarak*********

// let userName = 'Yunus'

// localStorage.setItem('username', userName) // localstoragedeki username keyinde 'username' değişkenini yaz-ekle

// let name = localStorage.getItem('username') // localstoragedeki username keyine sahip valueyi al

// console.log(name)


// local storage - number olarak*********
// let userName = 444

// localStorage.setItem('name', userName) // numberı otomatik string ypaıyor

// let name = Number(localStorage.getItem('name'))

// console.log(name)
// console.log(typeof name) // alırken de string veriyor ama biz yukarıda number'a çevirdik

// document.write(name)


// Object olarak kullanımı*********

// let user = {
//     name: ' Yunus',
//     age: 23,
//     city: 'Antalya',
//     langs: ['css', 'html', 'js', 'nextjs']
// }

// localStorage.setItem('user', JSON.stringify(user)) // içeriği alıp stringe çeviriyor başına vev sonuna tırnak atıyor
// // geri alırken de parse etmeliyiz
// let getUser = JSON.parse(localStorage.getItem('user')) // stringify başına ve sonuna tırnak ekliyordu parse da tırnağı kaldırıyor

// console.log(getUser)
// console.log(typeof getUser)


// Array olarka kullanımı************

// let users = ['Yunus', 'Ahmet', 'Ece', 'Varol', 'Barış']

// sessionStorage.setItem('users', JSON.stringify(users))
// localStorage.setItem('users', JSON.stringify(users))

const getUsers = JSON.parse(localStorage.getItem('users'))
console.log(getUsers)
console.log(typeof getUsers)

// Array-Methodları**************************************************

// let numbers = [32, 737, 3, 6, 135, 23, 735, 8, 68, 5, 763, 52, 4, 12, 432, , 435, 756, 9, 6, 67, 65]

// map methodu --- For döngüsünden daha performanslı -- foreachden de hızlı

// const map = numbers.map(x => x / 2)

// console.log(map)

// let users2 = [
//     { name: 'Yunus', age: 23 },
//     { name: 'Ece', age: 24 },
//     { name: 'Ahmet', age: 27 }
// ]

// users.map(user => console.log(user.name))


// Foreach**********
// users2.forEach(element => {
//     console.log(element.age)
// });


// const result = numbers.filter(number => number > 350)
// console.log('result', result)

// Reduce**********
// const result = numbers.reduce((total, num) => total + num, 0) // 0 buradaki totalin ilk değeri
// console.log(result)


// REST-SPREAD OPERATÖRÜÜÜÜÜÜÜÜÜ

// spread******

// let userss = ['Yunus', 'Ahmet', 'Ece', 'Varol', 'Barış']
// let langs = ['css', 'html', 'js', 'nextjs']

// let result = [...userss, ...langs] // spread operatörü

// console.log(result)


// Distructing************

let user = {
    name: ' Yunus',
    age: 23,
    city: 'Antalya',
    langs: ['css', 'html', 'js', 'nextjs']
}

// let { isim, yas, sehir, dil } = user
let { name: isim, age: yas, ...geriyeKalanlar } = user // name i isim age i yaş olarak aldık


console.log(isim)
console.log(yas)
console.log(geriyeKalanlar)


let users = ['Yunus', 'Ahmet', 'Ece', 'Varol', 'Barış']
let [isim1, isim2, ...geriyeKalanlar2] = users

console.log(isim1)
console.log(isim2)
console.log(geriyeKalanlar2)