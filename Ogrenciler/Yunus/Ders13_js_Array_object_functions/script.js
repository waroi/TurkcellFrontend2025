// // Array Özellikleri

// let value;
// const numbers = [43, 247, 743, 532, 523, 742, 724, 53, 431]
// const langs = ['Python', 'Java', 'javascript', 'r', 'NEXTJS']

// value = numbers.length
// value = numbers[0]
// value = numbers[numbers.length - 1]
// value = numbers[2]
// // value = numbers[3] = 1000
// // numbers.push(200) // dizinin sonuna ekler
// // numbers.unshift(200) // dizinin başına ekler
// // numbers.pop() // dizinin sondakini siler
// // numbers.shift() // dizinin başındakini siler
// // numbers.splice(0, 3) // dizinin 0.indexten başlayarak 3 elemanı siler

// // value = numbers.indexOf(532) // dizinin içinde eleman varsa indexi döner yoksa -1 döner
// // value = numbers.includes(742) // dizide varsa true yoksa flase
// value = numbers.sort() // alfabetik sıralıyor
// value = langs.sort()

// value = numbers.sort((x, y) => x - y) // küçükten büyüğe sıralar
// value = numbers.sort((x, y) => y - x) // büyükten küçüğe sıralar - array fonksiyonu tek satırda yazdığı için oto return ediyor
// // value = numbers.some(function (x, y) { // bu bir üst satırdaki fonksiyonlar aynı anlama geliyor üstteki array fonksiyonu
// //     return x - y
// // })


// console.log(value)
// console.log(typeof value)


// Objeler**********

// let value;
// const user = {
//     name: 'Yunus',
//     surName: 'ORAK',
//     age: 23,
//     department: 'Bilişim',
//     langs: ['Javascript', 'HTML', 'CSS'],
//     addres: {
//         city: 'Antalya',
//         street: 'DOKUMA'
//     },
//     work: function () {
//         console.log('çalışıyor...')
//     }
// }

// value = user // objeyi verir
// value = user.name // objenin name özelliğini verir
// value = user['name'] // objenin name özelliğini verir
// value = user.langs // objenin langs özelliğini veerir
// value = user.addres.city // objenin içindeki adres objesinin şehrini verir
// user.work()



// Zaman Objesi***********

// let date = new Date()

// value = date
// value = date.getFullYear()
// value = date.getMonth() // yılın kaçıncı ayıysa onu veri r0 dan başlar
// value = date.getDate() // ayın kaçıncı günüyse onu veerir
// value = date.getDay() // haftanın kaçıncı günüyse onu verir
// value = date.getHours()
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

// console.log(value)


// Karşılaştırma Operatörleri

// == Eşit mi? eşitse true değilse false döner
// let a = 10
// let b = '10'
// console.log(a == b) // TRUE DÖNER ÇÜNKÜ DEĞERE BAKIYOR DEĞİŞKEN TÜRÜNE BAKMIYOR
// console.log(a === b) // 3 eşittirle beraber de türüne de bakarız

// != eşit değil mi? eşit değilse true, eşitse false
// console.log(a != b) // bu türüne bakmıyor
// console.log(a !== b) // 1!2== türüne de bakar bu HEM DEĞERE HEM DE DEĞİŞKEN TİPİNE-TÜRÜNÜE


// < küçük mü?
// console.log(a < b)
// >büyük mü?
// console.log(a > b)

// >= <= büyük eşit mi ve küçük eşit mi?
// console.log(a <= b) // true
// console.log(a >= b) // true

// and operatörü (&& - her iki koşul da doğruysa true, değilse false
// console.log((5 == 5) && (23 == 5)) // false
// console.log((5 == 5) && (5 == 5)) // true


// and operatörü (|| - her iki koşuldan biri doğruysa true, ikisi birden yanlışsa false
// console.log((5 == 5) || (23 == 5)) // true
// console.log((5 == 5) || (5 == 5)) // true
// console.log((5 == 23535) || (5 == 32525)) // false


// Not (değil) operatörü (!) - Koşulun tersini alır
// console.log(!(5 == 5)) // false


// const user = {
//     name: 'Yunus',
//     surName: 'ORAK',
//     age: 23,
//     department: 'Bilişim',
//     langs: ['Javascript', 'HTML', 'CSS'],
//     addres: {
//         city: 'Antalya',
//         street: 'DOKUMA'
//     },
//     work: function () {
//         console.log('çalışıyor...')
//     }
// }

// console.log(user?.addres?.city) // ? işareti if koyuyro aslında user varsa devam ediyor adres varsa devam ediyor yoksa hatayı basıyor



// Koşullar

// if (koşul)

// a = 20
// b = 10

// if (a > b) { // koşul sağlanırsa girer sağlanmazsa atlar
//     console.log("a b'den büyüktür")
// } else {
//     console.log("a b'den ya küçüktür ya da eşittir")
// }

// if (a > b) {
//     console.log("a b den büyüktür")
// } else if (a < b) {
//     console.log("a b'den küçüktür")
// } else {
//     console.log("a b'ye eşittir")
// }

// Switch-Case
// const islem = 4
// switch (islem) { // break yoksa işlem 4 mesela oradan sonra başlar tüm hepsini çalıştırmaya
//     case 1:
//         console.log('işlem 1 seçildi')
//         break;
//     case 2:
//         console.log('işlem 2 seçildi')
//         break;
//     case 3:
//         console.log('işlem 3 seçildi')
//         break;
//     case 4:
//         console.log('işlem 4 seçildi')
//         break;
//     case 5:
//         console.log('işlem 5 seçildi')
//         break;

//     default:
//         console.log("Geçersiz işlem seçildi")
//         break;
// }

// Döngüler***************

// const langs = ['Python', 'Java', 'javascript', 'r', 'NEXTJS']

// for (let i = 0; i < langs.length; i++) { // langs.length'iden büyük oldukça döner ve her bir dönüşte i'yi 1 arttırır
//     console.log(langs[i])
// }

// while döngüsü***************

// let i = 0
// while (i < langs.length) {
//     console.log(langs[i])
//     i++;
// }

// while (true) { // sonsuz döngü
// break; // yazarak döngüden çıkabiliriz
// }


//do while döngüsü***************
i = 5
do { // en az 1 kere çalışır
    console.log(i)
    i++
} while (i = 10);

// Fonksiyonlar***************


// parametre almayan**********
// hello2()
// function hello2() {
//     console.log('HELLOOOOOOOO')
// }

// // parametre alan**********
// hello('ATMOSWARE', ",ben Yunus ORAK")
// // function hello(name, lastName) { // DEĞER YOLLANMAZSA UNDEFINED DÖNER*********
// function hello(name, lastName = "ORAK") { // bilgi yoksa default verebilirzi böyle
//     // console.log(`Merhaba ${name}, ben Yunus`)
//     console.log(`Merhaba ${name}, ${lastName}`)
// }


// Değer döndüren fonksiyon**********

// function square(x) {
//     return x * x
// }
// console.log(square(2) * 62)


// Arrow Function**********

// const cube = x => x * x * x // tek satırda arrow-function auto return eder

// console.log(cube(3))




// Uygulama: kullanıcıdan işlem seçimi ve değerleri alacak bir hesap makinesi uygulaması yapınız. 'Yaparız hocam siz isteyin yeter ki'