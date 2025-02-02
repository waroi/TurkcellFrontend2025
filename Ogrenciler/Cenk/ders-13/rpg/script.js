const player_name = prompt("Hoşgeldin maceracı. Bize adını bahşeder misin?");
const player_race = prompt(
  "Peki hangi ırktansın? \n(1)İnsan(+10 can +10 hasar)\n(2)Elf(+20 hasar)\n(3)Cüce(+20 can)"
);
const player_class = parseInt(
  prompt(
    "Sınıfını seç: \n(1)Savaşçı Kılıç-Kalkan(Dengeli hasar) kullanır \n(2)Büyücü Asa(Fazla orantısız hasar) kullanır\n(3)Haydut Yay(Orantısız hasar) kullanır."
  )
);

console.log(
  `Bilgilerin aşağıdaki gibi gözüküyor ${player_name}:\nIrkın: ${player_race}\nSınıfın: ${player_class}`
);

let weapons = [
  {name: "Kılıç-Kalkan", damage: 12},
  {name: "Asa", damage: 8},
  {name: "Yay", damage: 10},
];

const enemies = [
  {name: "Kurt", health: 30, damage: 5},
  {name: "Haydut", health: 50, damage: 9},
  {name: "Goblin", health: 40, damage: 7},
  {name: "Troll", health: 70, damage: 15},
];

let player_stats = {
  name: player_name,
  race: player_race,
  class: player_class,
  health: 100,
  money: 25,
  weapon: weapons[player_class - 1],
  health_potion: 0,
};

if (player_race === "1") {
  player_stats.health += 10;
  player_stats.weapon.damage += 10;
} else if (player_race === "2") {
  player_stats.weapon.damage += 20;
} else if (player_race === "3") {
  player_stats.health += 20;
}

let zar_katsayisi = 7;
if (player_stats.weapon.name === "Kılıç-Kalkan") {
  zar_katsayisi = 7;
} else if (player_stats.weapon.name === "Asa") {
  zar_katsayisi = 15;
} else if (player_stats.weapon.name === "Yay") {
  zar_katsayisi = 11;
}
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
  {
    name: "Orman",
    string: "Ormana denk geldin. Girmek ister misin? \n(1)Gir\n(2)Girme",
  },
];

function random_event(place) {
  place_length = place.length;
  place_num = Math.floor(Math.random() * place_length);
  return place[place_num];
}
let enter = 0;
function tuccar(enter) {
  let dukkan_choice = 0;
  if (player_stats.money < 10 && enter === 0) {
    dukkan_choice = prompt(
      "Dükkanımdan çık git fakir. (1) Ağlayarak çık. (2) Tüccara küfür ederek çık. (3) Tüccarı dövüp çık."
    );
  } else if (player_stats.money < 10 && enter === 1) {
    dukkan_choice = prompt(
      "Kesene bereket yolcu. Hadi selametle. (1) Selametle beyim. (2) Bir şey demeden çık git."
    );
  } else {
    if (enter === 0) {
      dukkan_choice = prompt(
        `Dükkana hoşgeldin ${player_stats.name}.\n Kesende ${player_stats.money} altın var.\n Ne yapmak istersin?\n(1) Silahını geliştir. (+10 hasar - 10 altın)\n(2) Can iksiri satın al(+10 can -10 altın).\n(3)Kapı şurada. Çık git.`
      );
    } else if (enter === 1) {
      dukkan_choice = prompt(
        `Başka isteğin var mıdır ${player_stats.name}?\n Kesende ${player_stats.money} altın var.\n Ne yapmak istersin?\n(1) Silahını geliştir. (+10 hasar - 10 altın)\n(2) Can iksiri satın al(+10 can -10 altın).\n(3)Kapı şurada. Çık git.`
      );
    }

    if (dukkan_choice === "1") {
      player_stats.money -= 10;
      player_stats.weapon.damage += 10;
      console.log(player_stats);
      tuccar(1);
    } else if (dukkan_choice === "2") {
      player_stats.money -= 10;
      player_stats.health_potion += 1;
      console.log(player_stats);
      tuccar(1);
    } else if (dukkan_choice === "3") {
      enter = 0;
    } else {
      tuccar(1);
    }
  }
}

function koy() {
  let koy_choice = prompt(
    "Tüccara mı gidersin yoksa hana mı gidersin?\n(1)Tüccar\n(2)Hana gidip dinlen (+Max can -5 altın) "
  );
  if (koy_choice === "1") {
    tuccar(0);
  } else if (koy_choice === "2") {
    if (player_stats.money < 5) {
      console.log("Git ahırda yat beş parasız seni.");
      console.log("Ahırda bedavaya yattın (+10 can)");
      player_stats.health += 10;
    } else {
      console.log("Hana girdin ve güzelce dinlendin.");
      player_stats.health = 100;
    }
  } else {
    koy();
  }
}

function fight() {
  let zar = 0;
  let enemy_num = Math.floor(Math.random() * enemies.length);
  let enemy = enemies[enemy_num];
  let prize = enemy.health / 2;
  console.log(`${enemy.name} ile savaşıyorsun.`);
  let player_damage = player_stats.weapon.damage;
  let enemy_damage = enemy.damage;

  while (enemy.health > 0) {
    if (player_stats.health <= 0) {
      console.log(`Bu maceraya erken veda ettin ${player_stats.name}...`);
      dead = true;
      break;
    }
    let fight_choice = prompt(
      `Canın:${player_stats.health}\nDüşmanın canı:${enemy.health}\n(1) Düşmana saldır (2) İksir iç.`
    );
    if (fight_choice === "1") {
      zar = Math.floor(Math.random() * zar_katsayisi) - (zar_katsayisi - 1) / 2;
      if (zar !== 0) {
        let final_damage = player_damage + zar;
        enemy.health -= final_damage;
        console.log(`Düşmana ${final_damage} hasar vurdun.`);
      } else {
        console.log("Iskaladın!");
      }
    } else if (fight_choice === "2") {
      if (player_stats.health_potion === 0) {
        console.log("İksirin kalmamış :(");
      } else if (player_stats.health_potion >= 0) {
        player_stats.health_potion -= 1;
        player_stats.health += 10;
        console.log(`İksir içtin. Yeni canın ${player_stats.health}`);
      } else {
        console.log(
          "Lütfen geliştiricilerle konuşunuz iksir 0'ın altında olmamalı!!!"
        );
      }
    }

    zar = Math.floor(Math.random() * 7) - 3;
    if (zar !== 0) {
      let final_damage = enemy_damage + zar;
      player_stats.health -= final_damage;
      console.log(`Düşman sana ${final_damage} hasar vurdu.`);
    } else {
      console.log("Saldırıdan kaçındın!");
    }
  }
  if (dead === false) {
    player_stats.money += prize;
    console.log(
      `Düşmanı yendin maceracı. ${prize} altın kazandın. Kesende ${player_stats.money} altın var.`
    );
  }
  enemy.health = prize * 2;
}

function magara() {
  let magara_event = Math.random();
  if (magara_event > 0.5) {
    let trophy = Math.floor(Math.random() * 50);
    console.log(`Hazine sandığı buldun. İçinden ${trophy} altın çıktı.`);
    player_stats.money += trophy;
    console.log(`Kesende ${player_stats.money} altın var.`);
  } else {
    fight();
  }
}
function orman() {
  let orman_event = Math.random();
  if (orman_event > 0.5) {
    let trophy = Math.floor(Math.random() * 30);
    console.log(
      `Kulübe buldun. Kulübenin içinde altın kesesi vardı. İçinden ${trophy} altın çıktı.`
    );
    player_stats.money += trophy;
    console.log(`Kesende ${player_stats.money} altın var.`);
  } else {
    fight();
  }
}
let dead = false;
while (dead === false) {
  let olay = random_event(place);
  player_choice = prompt(olay.string);

  if (olay.name === "Köy" && player_choice === "1") {
    koy();
  } else if (olay.name === "Köy" && player_choice === "2") {
  } else if (olay.name === "Mağara" && player_choice === "1") {
    magara();
  } else if (olay.name === "Mağara" && player_choice === "2") {
  } else if (olay.name === "Orman" && player_choice === "1") {
    orman();
  } else if (olay.name === "Orman" && player_choice === "2") {
  } else if (player_choice === "3") {
    dead = true;
  }
}

//*TODO:
//! + Savaşma fonksiyon(lar)ı eklenecek
//! + Tüccar düzenlenecek. ( İksir alınabilir. Eğer kullanıcının canı belli bir değerin altına düşerse iksir içmesi önerilecek).
//! + player_stats => envanter eklenecek
//? - console.log'lar düzenlenecek ve daha sade ve anlaşılır bir yapı oluşturulacak.
//? - hikaye akışı daha iyi hale getirilecek, yeni olaylar gibi özellikleri ekleyeceğiz.
//? - haydutu yenince güç kazanma gibi bir şeyler ekleyebiliriz
//! - Place ve enemy sayısı artırılacak
