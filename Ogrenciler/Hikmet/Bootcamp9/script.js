isim = prompt("Lütfen isminizi giriniz:");
soyisim = prompt("Lütfen soyisimi giriniz:");

console.log(
	isim[0].toUpperCase() +
		isim.slice(1).toLowerCase() +
		" " +
		soyisim.toUpperCase()
);