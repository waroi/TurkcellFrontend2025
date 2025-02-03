alert(
  "Daha çocukken anlatılan masallarda Lich Kral’dan bahsedilirdi. Ölülerin efendisi, karanlığın soğuk nefesi... " +
    "Onun mezarı, derinliklere mühürlenmişti. Ama şimdi, iblisler bile korkuyla fısıldaşıyor: Lich Kral geri dönüyor.\n\n" +
    "Bu haberle krallıklar titremeye başladı. Ordular yetersiz, büyücüler güçsüz ve halk korku içinde. Ancak eski bir kehanet, " +
    "tek bir kahramanın onun yükselişini durdurabileceğini söylüyor.\n\n" +
    "Sen... Efsanenin başlangıcı olabilirsin. Ama bunun için önce kendini kanıtlamalısın. Yolun köylerden, ormanlardan ve lanetli diyarlardan geçecek. " +
    "Köylerde dinlenmeli, kendini geliştirmeli ve yoluna çıkan tehditlerle yüzleşmelisin. Önünde uzun ve zorlu bir yol var, maceracı.\n\n" +
    "Şimdi söyle, bu hikayeye adını yazdıracak kişi kim?"
);
const player_name = prompt("Hoşgeldin maceracı. Bize adını bahşeder misin?");

let player_race;
while (true) {
  player_race = prompt(
    "Peki hangi ırktansın? \n(1) İnsan (+10 can, +10 hasar)\n(2) Elf (+20 hasar)\n(3) Cüce (+20 can)"
  );
  if (player_race === "1" || player_race === "2" || player_race === "3") {
    break;
  } else {
    alert("Lütfen 1, 2 veya 3 seçeneklerinden birini giriniz.");
  }
}

let player_class;
while (true) {
  player_class = parseInt(
    prompt(
      "Sınıfını seç: \n(1) Savaşçı => Kılıç-Kalkan (7-13) kullanır\n(2) Büyücü => Asa (3-17) kullanır\n(3) Haydut => Yay (5-15) kullanır."
    )
  );
  if (player_class === 1 || player_class === 2 || player_class === 3) {
    break;
  } else {
    alert("Lütfen 1, 2 veya 3 seçeneklerinden birini giriniz.");
  }
}

let race_string = "";
switch (player_race) {
  case "1":
    race_string = "İnsan";
    break;
  case "2":
    race_string = "Elf";
    break;
  case "3":
    race_string = "Cüce";
    break;
  default:
    break;
}
let class_string = "";
switch (player_class) {
  case 1:
    class_string = "Savaşçı";
    break;
  case 2:
    class_string = "Büyücü";
    break;
  case 3:
    class_string = "Haydut";
    break;
  default:
    break;
}

alert(
  `Bilgilerin aşağıdaki gibi gözüküyor ${player_name}:\nIrkın: ${race_string}\nSınıfın: ${class_string}`
);
console.log(
  `Bilgilerin aşağıdaki gibi gözüküyor ${player_name}:\nIrkın: ${race_string}\nSınıfın: ${class_string}`
);

const weapons = [
  {name: "Kılıç-Kalkan", damage: 10},
  {name: "Asa", damage: 10},
  {name: "Yay", damage: 10},
];

const enemies = [
  {name: "Kurt", health: 30, damage: 5},
  {name: "Haydut", health: 50, damage: 9},
  {name: "Goblin", health: 40, damage: 7},
  {name: "Troll", health: 70, damage: 15},
  {name: "Ork", health: 80, damage: 18},
  {name: "Vampir", health: 100, damage: 20},
];

const player_stats = {
  name: player_name,
  race: player_race,
  class: player_class,
  health: 100,
  money: 25,
  weapon: weapons[player_class - 1],
  health_potion: 0,
  max_health: 100,
};

if (player_race === "1") {
  player_stats.health += 10;
  player_stats.max_health += 10;
  player_stats.weapon.damage += 10;
} else if (player_race === "2") {
  player_stats.weapon.damage += 20;
} else if (player_race === "3") {
  player_stats.health += 20;
  player_stats.max_health += 20;
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
      "Önünde köy görüyorsun ne yapmak istersin? \n(1) Köye Gir\n(2) Etrafından dolaş\n(3) Oyundan Çık",
  },
  {
    name: "Mağara",
    string:
      "Mağara girişi gördün. Girmek ister misin? \n(1) Gir\n(2) Girme\n(3) Oyundan Çık",
  },
  {
    name: "Orman",
    string:
      "Ormana denk geldin. Girmek ister misin? \n(1) Gir\n(2) Girme\n(3) Oyundan Çık",
  },
  {
    name: "Harabe",
    string:
      "Terkedilmiş bir harabeye denk geldin. İçeri girmek ister misin?\n(1) Giriş yap\n(2) Uzaklaş\n(3) Oyundan Çık",
  },
  {
    name: "Gizemli Tapınak",
    string:
      "Bir tapınak keşfettin. İçeri girmek ister misin?\n(1) Giriş yap\n(2) Uzaklaş\n(3) Oyundan Çık",
  },
  {
    name: "Handa Rastgele Olay",
    string:
      "Bir handa oturuyorsun ve ilginç bir şey oluyor.\n(1) Olayı izle\n(2) Umursamadan devam et\n(3) Oyundan Çık",
  },
];

let previous_event = null;

function random_event(place) {
  let place_length = place.length;
  let place_num;

  do {
    place_num = Math.floor(Math.random() * place_length);
  } while (place[place_num] === previous_event);

  previous_event = place[place_num];
  return place[place_num];
}

let enter = 0;

function tuccar(enter) {
  if (player_stats.money < 10 && enter === 0) {
    alert(
      "Dükkanımdan çık git fakir. (1) Ağlayarak çık. (2) Tüccara küfür ederek çık. (3) Tüccarı dövüp çık."
    );
    koy();
    return;
  }

  let dukkan_choice;
  while (true) {
    if (enter === 0) {
      dukkan_choice = prompt(
        `Dükkana hoşgeldin ${player_stats.name}.\nKesende ${player_stats.money} altın var.\n\nNe yapmak istersin?\n(1) Silahını geliştir (+10 hasar - 10 altın)\n(2) Can iksiri satın al (+10 can -10 altın)\n(3) Kapı şurada. Çık git.`
      );
    } else {
      dukkan_choice = prompt(
        `Başka isteğin var mıdır ${player_stats.name}?\nKesende ${player_stats.money} altın var.\n\nNe yapmak istersin?\n(1) Silahını geliştir (+10 hasar - 10 altın)\n(2) Can iksiri satın al (+10 can -10 altın)\n(3) Kapı şurada. Çık git.`
      );
    }

    if (dukkan_choice === "1") {
      if (player_stats.money >= 10) {
        player_stats.money -= 10;
        player_stats.weapon.damage += 10;
        alert(
          `Silahını geliştirdin!\nYeni hasarın: ${player_stats.weapon.damage}\nKalan paran: ${player_stats.money}`
        );
      } else {
        alert("Yeterli paran yok!");
      }
    } else if (dukkan_choice === "2") {
      if (player_stats.money >= 10) {
        player_stats.money -= 10;
        player_stats.health_potion += 1;
        alert(
          `İksir satın aldın!\nToplam iksir sayın: ${player_stats.health_potion}\nKalan paran: ${player_stats.money}`
        );
      } else {
        alert("Yeterli paran yok!");
      }
    } else if (dukkan_choice === "3") {
      alert("Tüccardan ayrıldın.");
      koy();
      return;
    } else {
      alert("Geçersiz giriş yaptın! Lütfen 1, 2 veya 3 gir.");
    }

    if (player_stats.money < 10) {
      alert("Kesene bereket yolcu. Hadi selametle.");
      koy();
      return;
    }
  }
}

function koy() {
  let koy_choice = prompt(
    "Tüccara mı gidersin yoksa hana mı gidersin?\n(1)Tüccar\n(2)Hana gidip dinlen (+Max can -5 altın) \n(3) Köyden çık"
  );
  if (koy_choice === "1") {
    tuccar(0);
  } else if (koy_choice === "2") {
    if (player_stats.money < 5) {
      alert("Git ahırda yat beş parasız seni.");
      alert("Ahırda bedavaya yattın (+10 can)");
      player_stats.health += 10;
      koy();
    } else {
      alert("Hana girdin ve güzelce dinlendin.");
      player_stats.health = player_stats.max_health;
      koy();
    }
  } else if (koy_choice === "3") {
    alert("İyi yolculuklar maceracı.");
  } else {
    koy();
  }
}

function lich_krala_git() {
  alert(
    `Artık yolculuğun sonuna geldin, ${player_stats.name}... \n` +
      "Savaş meydanında kazandığın zaferlerin ardından, Lich Kral’ın karanlık tahtına ulaştın.\n\n" +
      "Önünde büyük bir kapı duruyor. İçeride, tarihin en karanlık varlığı seni bekliyor...\n"
  );

  let secim;
  while (true) {
    secim = prompt(
      "Lich Kral'ın tahtına girmeden önce yakındaki köye gidip son düzenlemeleri yapmak ister misin?\n" +
        "(1) Evet, köye gitmeliyim.\n" +
        "(2) Hayır, artık Lich Kral ile yüzleşmeliyim."
    );

    if (secim === "1") {
      alert(
        "Yakındaki köye dönüyorsun. Tüccara uğrayabilir, silahını geliştirebilir ve dinlenebilirsin."
      );
      koy();
    } else if (secim === "2") {
      alert("Cesaretini toplayıp kapıyı açıyorsun... İçeri adımını atıyorsun.");
      lich_king_savasi();
      break;
    } else {
      alert("Geçersiz giriş yaptın! Lütfen 1 veya 2 gir.");
    }
  }
}

let battles_won = 0;

const LICH_KING_BATTLE_THRESHOLD = 10;
function kontrol_et_savas_sayisi() {
  if (battles_won >= LICH_KING_BATTLE_THRESHOLD) {
    lich_krala_git();
  }
}

function fight() {
  let zar = 0;
  let enemy_num = Math.floor(Math.random() * enemies.length);
  let enemy = enemies[enemy_num];
  let prize = enemy.health / 2;
  enemy.health += battles_won * 5;
  enemy.damage += Math.floor(battles_won / 2);

  alert(`${enemy.name} ile savaşıyorsun.`);
  let player_damage = player_stats.weapon.damage;
  let enemy_damage = enemy.damage;

  while (enemy.health > 0) {
    if (player_stats.health <= 0) {
      alert(`Bu maceraya erken veda ettin ${player_stats.name}...`);
      dead = true;
      break;
    }

    let fight_choice;
    while (true) {
      fight_choice = prompt(
        `Canın: ${player_stats.health}\nDüşmanın canı: ${enemy.health}\n(1) Düşmana saldır (2) İksir iç.`
      );

      if (fight_choice === "1" || fight_choice === "2") {
        break;
      } else {
        alert("Geçersiz giriş yaptın! Lütfen 1 veya 2 gir.");
      }
    }

    if (fight_choice === "1") {
      zar = Math.floor(Math.random() * zar_katsayisi) - (zar_katsayisi - 1) / 2;
      if (zar !== 0) {
        let final_damage = player_damage + zar;
        enemy.health -= final_damage;
        alert(`Düşmana ${final_damage} hasar vurdun.`);
      } else {
        alert("Iskaladın!");
      }
    } else if (fight_choice === "2") {
      if (player_stats.health_potion === 0) {
        alert("İksirin kalmamış :(");
      } else if (player_stats.health_potion >= 0) {
        player_stats.health_potion -= 1;
        player_stats.health += 10;
        alert(`İksir içtin. Yeni canın ${player_stats.health}`);
      } else {
        alert(
          "Lütfen geliştiricilerle konuşunuz iksir 0'ın altında olmamalı!!!"
        );
      }
    }
    if (enemy.health > 0) {
      zar = Math.floor(Math.random() * 7) - 3;
      if (zar !== 0) {
        let final_damage = enemy_damage + zar;
        player_stats.health -= final_damage;
        alert(`Düşman sana ${final_damage} hasar vurdu.`);
      } else {
        alert("Saldırıdan kaçındın!");
      }
    }
  }
  if (!dead) {
    player_stats.money += prize;
    alert(
      `Düşmanı yendin maceracı. ${prize} altın kazandın. Kesende ${player_stats.money} altın var.`
    );
  }
  battles_won += 1;
  kontrol_et_savas_sayisi();
  enemy.health = prize * 2;
}

function lich_king_savasi() {
  let lich_king = {name: "Lich Kral", health: 200, damage: 25};
  alert(
    "Lich Kral tahtında oturuyor... Kırmızı gözleriyle sana bakıyor ve derin bir sesle konuşuyor:\n\n" +
      "'Bana meydan okumaya mı geldin zavallı maceracı? Ölülerim bile seni alt etmeye yeter!'\n\n" +
      "Savaş başlıyor!"
  );

  let zar;
  while (lich_king.health > 0) {
    if (player_stats.health <= 0) {
      alert(`Karanlık üzerini kapladı... Lich Kral seni yendi...`);
      dead = true;
      break;
    }

    let choice;
    while (true) {
      choice = prompt(
        `Canın: ${player_stats.health}\nLich Kral'ın canı: ${lich_king.health}\n(1) Saldır (2) İksir iç.`
      );
      if (choice === "1" || choice === "2") {
        break;
      } else {
        alert("Geçersiz giriş yaptın! Lütfen 1 veya 2 gir.");
      }
    }

    if (choice === "1") {
      zar = Math.floor(Math.random() * zar_katsayisi) - (zar_katsayisi - 1) / 2;
      let final_damage = player_stats.weapon.damage + zar;
      lich_king.health -= final_damage;
      alert(`Lich Kral'a ${final_damage} hasar vurdun!`);
    } else if (choice === "2") {
      if (player_stats.health_potion > 0) {
        player_stats.health_potion -= 1;
        player_stats.health += 10;
        alert(`İksir içtin. Yeni canın: ${player_stats.health}`);
      } else {
        alert("İksirin kalmamış!");
      }
    }

    if (lich_king.health > 0) {
      zar = Math.floor(Math.random() * 7) - 3;
      if (zar !== 0) {
        let boss_damage = lich_king.damage + zar;
        player_stats.health -= boss_damage;
        alert(`Lich Kral sana ${boss_damage} hasar vurdu.`);
      } else {
        alert("Saldırıdan kaçındın!");
      }
    }
  }

  if (!dead) {
    alert(
      `Başardın, ${player_stats.name}! Lich Kral'ı yendin ve dünyaya barışı getirdin!`
    );
    dead = true;
  }
}

function magara() {
  let magara_event = Math.random();
  if (magara_event > 0.7) {
    let trophy = Math.floor(Math.random() * 50);
    alert(`Hazine sandığı buldun. İçinden ${trophy} altın çıktı.`);
    player_stats.money += trophy;
    alert(`Kesende ${player_stats.money} altın var.`);
  } else {
    fight();
  }
}

function orman() {
  let orman_event = Math.random();
  if (orman_event > 0.7) {
    let trophy = Math.floor(Math.random() * 30);
    alert(
      `Kulübe buldun. Kulübenin içinde altın kesesi vardı. İçinden ${trophy} altın çıktı.`
    );
    player_stats.money += trophy;
    alert(`Kesende ${player_stats.money} altın var.`);
  } else {
    fight();
  }
}

function harabe() {
  let event = Math.random();
  if (event > 0.6) {
    let gold = Math.floor(Math.random() * 40) + 10;
    alert(`Harabede bir altın kesesi buldun! ${gold} altın kazandın.`);
    player_stats.money += gold;
  } else {
    alert(
      "Harabe beklenenden daha tehlikeli çıktı, bir yaratık tarafından saldırıya uğradın!"
    );
    fight();
  }
}

function tapinak() {
  let event = Math.random();
  if (event > 0.7) {
    alert(
      "Tapınakta eski bir büyü kitabı buldun. Hasarın kalıcı olarak +5 arttı!"
    );
    player_stats.weapon.damage += 5;
  } else {
    alert("Tapınağın içinde bir gardiyan beliriyor! Savaş kaçınılmaz...");
    fight();
  }
}

function handa_olay() {
  let event = Math.random();
  if (event > 0.5) {
    let prize = Math.floor(Math.random() * 20) + 5;
    alert(
      `Hancının düzenlediği ödüllü bir yarışmayı kazandın! ${prize} altın kazandın.`
    );
    player_stats.money += prize;
  } else {
    alert(
      "Hancı, sarhoş bir haydudun sana bulaşmasına engel olamıyor. Kavga kaçınılmaz!"
    );
    fight();
  }
}

let dead = false;

while (dead === false) {
  let olay = random_event(place);
  let player_choice;

  while (true) {
    player_choice = prompt(olay.string);

    if (player_choice === "1" || player_choice === "2") {
      break;
    } else if (player_choice === "3") {
      dead = true;
      break;
    } else {
      alert("Geçersiz giriş yaptın! Lütfen 1 veya 2 gir.");
    }
  }

  if (dead) {
    break;
  }

  if (olay.name === "Köy" && player_choice === "1") {
    koy();
  } else if (olay.name === "Köy" && player_choice === "2") {
    alert("Köyün etrafından dolaştın ve yoluna devam ettin.");
  } else if (olay.name === "Mağara" && player_choice === "1") {
    magara();
  } else if (olay.name === "Mağara" && player_choice === "2") {
    alert("Mağaraya girmemeye karar verdin ve yoluna devam ettin.");
  } else if (olay.name === "Orman" && player_choice === "1") {
    orman();
  } else if (olay.name === "Orman" && player_choice === "2") {
    alert("Ormana girmemeye karar verdin ve ilerlemeye devam ettin.");
  } else if (olay.name === "Harabe" && player_choice === "1") {
    harabe();
  } else if (olay.name === "Harabe" && player_choice === "2") {
    alert("Harabeye girmemeye karar verdin ve ilerlemeye devam ettin.");
  } else if (olay.name === "Gizemli Tapınak" && player_choice === "1") {
    tapinak();
  } else if (olay.name === "Gizemli Tapınak" && player_choice === "2") {
    alert("Tapınağa girmemeye karar verdin ve ilerlemeye devam ettin.");
  } else if (olay.name === "Handa Rastgele Olay" && player_choice === "1") {
    handa_olay();
  } else if (olay.name === "Handa Rastgele Olay" && player_choice === "2") {
    alert("Olan biteni umursamadan yoluna devam ettin.");
  }
}

//*TODO:
//! + Savaşma fonksiyon(lar)ı eklenecek
//! + Tüccar düzenlenecek. ( İksir alınabilir. Eğer kullanıcının canı belli bir değerin altına düşerse iksir içmesi önerilecek).
//! + player_stats => envanter eklenecek
//? + console.log'lar düzenlenecek ve daha sade ve anlaşılır bir yapı oluşturulacak.
//? - hikaye akışı daha iyi hale getirilecek, yeni olaylar gibi özellikleri ekleyeceğiz.
//? - haydutu yenince güç kazanma gibi bir şeyler ekleyebiliriz
//! + Place ve enemy sayısı artırılacak
