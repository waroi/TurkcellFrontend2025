var number = Math.floor(Math.random() * 100); // 60
var tahmin = prompt('Tahmin sayıyı girin lütfen');

console.log(number, 'sayı')
document.write(number - tahmin, " --> pozitifse sayı > tahmin, değilse sayı < tahmin - 0 a eşitse TAHMİN DOĞRUUUUU");


while (number !== tahmin) {
    if (number > tahmin) {
        console.log('Yukarı')
    } else if (number < tahmin) {
        console.log('Aşağı')
    } else {
        console.log('DOĞRU TAHMİN ETTİNİZ TEBRİKLER')
    }
    tahmin = prompt('Tahmin sayıyı girin lütfen');
}



// var kontrol = {
//     0: 'EŞİT',
//     1: 'Yukarı',
//     2: 'Aşağı',
// }


// console.log(tahmin, 'tahmin')
// tahmin = tahmin - 20
// console.log(tahmin, 'tahmin')



// var sonuc = (fark > 0); // true sonrası YOK :D
// console.log(sonuc)