var rastgeleSayi = Math.floor(Math.random() * 30) + 1;
console.log(rastgeleSayi);
var tahmin = prompt("1 ile 30 arasında bir sayı tahmin edin");
while (tahmin != rastgeleSayi) {
	var tahmin = prompt("1 ile 30 arasında bir sayı tahmin edin");
	if (tahmin > rastgeleSayi) {
		tahmin = prompt("Daha küçük bir sayı tahmin edin");
	} else {
		tahmin = prompt("Daha büyük bir sayı tahmin edin");
	}
}
