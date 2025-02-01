const player_name = prompt("Hoşgeldin maceracı. Bize adını bahşeder misin?");
const player_race = prompt("Peki hangi ırktansın? \n(1)İnsan\n(2)Elf\n(3)Cüce");
const player_class = parseInt(
	prompt("Ne iş yaparsın? \n(1)Savaşçı \n(2)Büyücü\n(3)Haydut")
);

console.log(
	`Bilgilerin aşağıdaki gibi gözüküyor ${player_name}:\nIrkın: ${player_race}\nSınıfın: ${player_class}`
);

let weapons = [
	{ name: "Kılıç-Kalkan", damage: 10 },
	{ name: "Asa", damage: 10 },
	{ name: "Yay", damage: 10 },
];

const enemies = [
	{ name: "Kurt", health: 30, damage: 5 },
	{ name: "Haydut", health: 50, damage: 8 },
];

let player_stats = {
	name: player_name,
	race: player_race,
	class: player_class,
	health: 100,
	money: 25,
	weapon: weapons[player_class - 1],
};

const place = [
	{
		name: "Köy",
		string:
			"Önünde köy görüyorsun ne yapmak istersin? \n(1) Köye Gir\n(2)Etrafından dolaş\n(3)Oyundan Çık",
	},
	{
		name: "Mağara",
		string: "Mağara girişi gördün. Girmek ister misin? \n(1)Gir\n(2)Girme",
	},
];

function random_event(place) {
	place_length = place.length;
	place_num = Math.floor(Math.random() * place_length);
	return place[place_num];
}

function tuccar() {
	let dukkan_choice = prompt(
		`Dükkana hoşgeldin ${player_stats.name}. Ne yapmak istersin?\n(1) Silahını geliştir. Bu sana 10 altına mal olacak.\n(2)Kapı şurada. Çık git.`
	);
	if (dukkan_choice === "1") {
		player_stats.money -= 10;
		player_stats.weapon.damage += 10;
		console.log(player_stats);
	} else if (dukkan_choice === "2") {
	} else {
		tuccar();
	}
}

function koy() {
	let koy_choice = prompt(
		"Tüccara mı gidersin yoksa hana mı gidersin?\n(1)Tüccar\n(2)Han "
	);
	if (koy_choice === "1") {
		tuccar();
	} else if (koy_choice === "2") {
		console.log("Hana girdin.");
	} else {
		koy();
	}
}

function magara() {
	let magara_event = Math.random();
	if (magara_event > 0.5) {
		console.log("Hazine kazandın.");
	} else {
		console.log("Kurtlar saldırdı.");
	}
}

let dead = false;
while (dead === false) {
	let olay = random_event(place);
	console.log(olay);
	player_choice = prompt(olay.string);

	if (player_choice === "1" && olay.name === "Köy") {
		koy();
	} else if (player_choice === "2" && olay.name === "Köy") {
	} else if (player_choice === "1" && olay.name === "Mağara") {
		magara();
	} else if (player_choice === "1" && olay.name === "Mağara") {
	} else if (player_choice === "3") {
		dead = true;
	}
}

//*TODO:
//! - Savaşma fonksiyon(lar)ı eklenecek
//! - Tüccar düzenlenecek. ( İksir alınabilir. Eğer kullanıcının canı belli bir değerin altına düşerse iksir içmesi önerilecek).
//! - player_stats => envanter eklenecek
//? - console.log'lar düzenlenecek ve daha sade ve anlaşılır bir yapı oluşturulacak.
//? - hikaye akışı daha iyi hale getirilecek, yeni olaylar gibi özellikleri ekleyeceğiz.
