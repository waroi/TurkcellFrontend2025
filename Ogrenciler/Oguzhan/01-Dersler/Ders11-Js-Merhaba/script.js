// var a = 10
// b = 5;


// function deneme() {
//     c = 10;
// }
// deneme()
// console.log(c)



// if (true) {
//     var x = 10;
// }
// console.log(x);

// var a = [10]
// var b = a;
// console.log("1-", a, b)
// a = [20];
// console.log("2-", a, b)


// var x = ["ilk", 20, 30]
// var y = x;
// console.log("1-", x, y)
// x = ["ikinci", 50, 60];
// console.log("2-", x, y)

// var a = [10, 20]
// var b = a;
// console.log("1-", a, b) 
// a.push(30);
// console.log("2-", a, b)

// var str = "deneme"
// console.log(typeof str)

// str = Number(str)
// console.log(typeof str)

// var num = 10
// console.log(typeof num)

// num = String(num)
// console.log(typeof num)

var rastgeleSayi = Math.floor(Math.random() * 30) + 1;
console.log(rastgeleSayi);
var tahmin = 0;
while (tahmin != rastgeleSayi) {
    var tahmin = prompt("1 ile 30 arasında bir sayı tahmin edin");
    if (tahmin > rastgeleSayi) {
        console.log("Daha küçük bir sayı tahmin edin");
    } else if (tahmin < rastgeleSayi) {
        console.log("Daha büyük bir sayı tahmin edin");
    } else {
        console.log("Tebrikler")
    }
}