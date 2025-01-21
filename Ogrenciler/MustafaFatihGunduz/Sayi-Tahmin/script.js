var sonuc = Math.floor(Math.random() * 100) + 1;
console.log("Tahmin etmek için 1-100 arasında bir sayı giriniz.");
console.log("Sonuc = "+sonuc);  
var guess = prompt("Tahmininiz: ");
    if (guess == sonuc) {
        console.log("Tebrikler doğru tahmin ettiniz. Sonuc = "+sonuc);
    }
    else if (guess > sonuc) {
        console.log("Daha küçük bir sayı giriniz.");
        guess = prompt("Tahmininiz: ");
    }
    else {
        console.log("Daha büyük bir sayı giriniz.");
        guess = prompt("Tahmininiz: ");
    }
