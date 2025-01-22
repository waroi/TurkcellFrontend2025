var sayi = Math.floor(Math.random() * 100);
console.log("Doğru sayı:", sayi);
var tahmin = document.getElementById("input").value;
tahmin = Number(tahmin);
console.log(tahmin);

function oyun() {
  // Kullanıcının tahminini al
  var tahmin = Number(document.getElementById("input").value);

  // Mesajı göstermek için paragraf elemanını seç
  var mesaj = document.getElementById("message");

  // Tahmini kontrol et
  if (tahmin === sayi) {
    mesaj.textContent = "Doğru sayıyı buldunuz! Tebrikler!";
    mesaj.style.color = "green";
  } else if (tahmin > sayi) {
    mesaj.textContent = "Tahmininiz büyük, daha küçük bir sayı deneyin.";
    mesaj.style.color = "red";
  } else {
    mesaj.textContent = "Tahmininiz küçük, daha büyük bir sayı deneyin.";
    mesaj.style.color = "red";
  }
}
