// // Array Özellikleri

// let value;
// const numbers = [43,56,33,23,44,35,5];
// const langs = ["Python", "Java", "C++", "Javascript"];

// value = numbers.length; // array'in eleman sayısı
// value = numbers[0]; // ilk eleman
// value = numbers[numbers.length -1]; //Arrayin son elemanı
// value = numbers[2]; // 2. indexdeki değeri verir
// // value = numbers[3] = 1000;
// numbers.push(200); //sonuna ekler
// numbers.unshift(200); // arrayin başına ekler
// numbers.pop(); // arrayin son elemanını siler
// numbers.shift();
// numbers.splice(0,3); //arrayin 0. indexinden başlayarak 3 elemanı siler
// numbers.reverse(); // arrayi ters çevirir
// value = numbers.indexOf(23); //arrayin içidenki 23 değerininin indexini verri
// value = numbers.includes(23); // arrayin içinde 23 değeri var mı yok mu kontrol eder

// value = numbers.sort();
// // value = langs.sort();

// value = numbers.sort((x,y) => x-y); //küçükten büyüğe sıralama 
// value = numbers.sort((x,y) => y-x); // büyükten küçüğe sıralama
// /*
// x - y hesaplanır:
// negatifse (x < y), x daha küçük olduğu için önce gelir.
// pozitifse (x > y), y daha küçük olduğu için önce gelir.
// 0 ise, sıralaması değişmez.
// y - x hesaplanır:
// negatifse (x < y), x daha küçük olduğu için önce gelir.
// pozitifse (x > y), y daha küçük olduğu için önce gelir.
// 0 ise, sıralaması değişmez.
// */
// value = numbers.sort(function (x,y){
//     return x-y;
// })

// console.log(numbers);
// console.log(value);
// console.log(typeof value);

// let nuum = [1, 2, 3, 4];
// nuum.splice(2, 0, 200);  // 2. index'e 200 ekler 
// console.log(nuum);

// let value;
// const user = {
//     name : "Zeynep",
//     lastName : "Güney",
//     age : "24",
//     department : "Bilişim", 
//     langs : ["Python", "Java", "C++", "Javascript"],
//     address : {
//         city : "Balıkesir",
//         street :"1011",
//     },
//     work : function(){
//         console.log("Çalışıyor...");
//     },
// };

// value = user;
// value = user.name;
// value = user.name["name"];
// value = user.langs[0];
// value = user.address.city;
// user.work();


// Zaman objesi

// let value;
// let date = new Date();

// value = date;
// value = date.getFullYear();
// value = date.getMonth();
// value = date.getDate();
// value = date.getDay();
// value = date.getHours();
// value = `${date.getDate()}/${date.getMonth() + 1} / ${date.getFullYear()}`;

// console.log(value);

// =================================

// Karşılaştırma Operatörleri

// == Eşit mi? Eşitse true, değilse false

// a = 10;
// b = "10";

// console.log(a == b); //true

// Veri tipi ve değer kontrolü

// a = 10;
// b = "10";

// console.log(a === b);  //false

// Eşit değil mi? Eşit değilse true, eşitse false

// a = 10;
// b = "10";

// console.log(a != b); // false

// Veri tipi ve değeri eşit değil mi?

// a = 10;
// b = "10";

// console.log(a !== b); // true

// < küçük mü

// a = 10;
// b = 5;
// console.log(a<b);

// > büyük mü

// a = 10;
// b = 5;
// console.log(a>b);

// <= küçük eşit mi

// a = 10;
// b = 10;
// console.log(a<=b); //true

// <= küçük eşit mi

// a = 10;
// b = 20;
// console.log(a>=b); //false

// and operatörü (&&) - her iki koşul da doğruysa true, diğer durumda false

// console.log(( 5 == 5)&& (5 == 6)) ; // false
// console.log(( 5 == 5)&& (6 == "6")) ; // true

// or operatörü (||) - Her iki koşuldan biri sağlansa true, ikise de yanlış ise false
// console.log(( 5 == 5) || (5 == 6)) ; // true
// console.log(( 5 == 2) || (5 == 6)) ; // false
// console.log(( 5 == 5) && (5 == "5")) ; // true

// not (değil) operatörğ (!) - koşulun tersini alır
// console.log(!(5 == 5)); // false


// const user = {
//     name : "Zeynep",
//     lastName : "Güney",
//     age : "24",
//     department : "Bilişim", 
//     langs : ["Python", "Java", "C++", "Javascript"],
//     address : {
//         city : "Balıkesir",
//         street :"1011",
//     },
//     work : function(){
//         console.log("Çalışıyor...");
//     },
// };

// console.log(user.address.city); // değerler yoksa hata verir
// console.log(user?.address?.city); // bu değerler varsa console'a yazdırır hata vermez

// Koşullar

// if (eğer)

// a = 20;
// b = 10;

// if (a > b) {
//     console.log("a, b'den büyüktür.")
// } else if (a < b){
//     console.log("a, b'den küçüktür.");
// } else {
//     console.log("a, b'ye eşittir.");
// }

// switch Case
// const islem = 4;

// switch (islem) {
//     case 1:
//         console.log("İşlem 1");
//         break;
//     case 2:
//         console.log("İşlem 2");
//         break;
//     case 3:
//         console.log("İşlem 3");
//         break;
//     default:
//         console.log("Geçersiz işlem");
//         break;
// }

// Döngüler

// For

// const langs = ["Python", "Java", "C++", "Javascript"];
// for (let i = 0; i < langs.length; i++){
//     console.log(langs[i]);
// }

// while
// i = 0;
// while (i < langs.length){
//     console.log(langs[i]);
//     i++;
// }

// do-while

// while (true){
//     console.log(langs[i]);
//     i++;
// }

// Fonksiyonlar
// merhaba("Zeynep");
// function merhaba(name){
//     console.log(`Merhaba ${name}`)
// }

// merhaba("Zeynep", "Güney");
// function merhaba(name="Bilgi yok", lastName="Bilgi yok"){
//     console.log(`Merhaba ${name} ${lastName}`)
// }
// merhaba("Zeynep");

// Return ile fonksiyondan değer döndürme
// function square(x){
//     return x * x;
// }
// console.log(square(4)); //16
// console.log(square(4)*2); //32

// Arrow function

// const cube = (x) => x*x*x;
// console.log(cube(3));

// Uygulama : Kullanıcıdan işlem seçimi değerleri alarak bir hesap makinesi uygulaması yapınız.

value1 = prompt("Lütfen 1. sayı giriniz:");
value2 = prompt("Lütfen 2. sayı giriniz:");
islem = prompt("Lütfen işlem (+, -, *, /) seçiniz:");