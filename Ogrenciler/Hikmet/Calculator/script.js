let control = "evet";
function toplama(sayi1, sayi2) {
	return sayi1 + sayi2;
}
function cikarma(sayi1, sayi2) {
	return sayi1 - sayi2;
}
function carpma(sayi1, sayi2) {
	return sayi1 * sayi2;
}
function bolme(sayi1, sayi2) {
	return sayi1 / sayi2;
}
while (control === "evet") {
	let sayi1 = parseInt(prompt("İlk sayıyı giriniz"));
	let sayi2 = parseInt(prompt("Ikinci sayıyı giriniz"));

	islemSec = prompt("Yapılacak işlemi işaret ile belirleyiniz ( +, -, *, /):");
	switch (islemSec) {
		case "+":
			sonuc = toplama(sayi1, sayi2);
			break;
		case "-":
			sonuc = cikarma(sayi1, sayi2);
			break;
		case "*":
			sonuc = carpma(sayi1, sayi2);
			break;
		case "/":
			if (sayi2 == 0) {
				console.log("Lütfen bölme kurallarına uygun sayı giriniz!");
				continue;
			}
			sonuc = Math.floor(bolme(sayi1, sayi2));
			break;
		default:
			break;
	}
	control = prompt(`Işlemin sonucu ${sonuc} Devam etmek istiyorsanız evet:`);
}
