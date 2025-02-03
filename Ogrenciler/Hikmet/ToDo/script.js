let cikisYap = "evet";

let gorevler = ["hikmet", "melik", "hazal", "cenk", "mustafa", "kütküt"];

function gorevListeme(gorevler) {
	let listelenmisGorevler = gorevler
		.map((gorev, index) => {
			return `(${index})-${gorev}\n`;
		})
		.join("");
	return listelenmisGorevler;
}

console.log(gorevListeme(gorevler));

while (cikisYap === "evet") {
	anaMenu = prompt(
		`Görevler => \n${gorevListeme(
			gorevler
		)}\n(1) Görev Ekle:\n(2) Görev Sil:\n(3)Çıkış Yap`
	);

	switch (anaMenu) {
		case "1":
			gorev = prompt("Yapılacak Görevi Giriniz:");
			gorevler.push(gorev);
			break;

		case "2":
			silinecekGorev = parseInt(
				prompt(`Silinecek görevi seçiniz:\n ${gorevListeme(gorevler)}`)
			);
			gorevler.splice(silinecekGorev, 1);
			console.log(gorevler);
			break;

		case "3":
			cikisYap = "hayır";
			continue;

		default:
			console.log("Lütfen geçerli bir seçenek seçiniz!");
			break;
	}
	console.log(gorevler);
}
