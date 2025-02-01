const player_name = prompt("Hoşgeldin maceracı. Bize adını bahşeder misin?");
const player_race = prompt("Peki hangi ırktansın? \n(1)İnsan\n(2)Elf\n(3)Cüce");
const player_class = parseInt(
  prompt("Ne iş yaparsın? \n(1)Savaşçı \n(2)Büyücü\n(3)Haydut")
);

console.log(
  `Bilgilerin aşağıdaki gibi gözüküyor ${player_name}:\nIrkın: ${player_race}\nSınıfın: ${player_class}`
);

weapons = [
  {name: "Kılıç-Kalkan", damage: 10},
  {name: "Asa", damage: 10},
  {name: "Yay", damage: 10},
];

 const enemies = [
  { name: "Kurt", health: 30, damage: 5 },
  { name: "Haydut", health: 50, damage: 8 },
  ];

player_attributes = {
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
      "Önünde köy görüyorsun ne yapmak istersin? \n(1) Köye Gir\n(2)Etrafından dolaş",
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

let dead = false;
while (dead === false) {
  let olay = random_event(place)
  console.log(olay)
  player_choice = prompt(olay.string);

  if (player_choice === "1" &&olay.name === "Köy"){
    let koy_choice = prompt("Tüccara mı gidersin yoksa hana mı gidersin? (1) Tüccar (2) Han")
    if (koy_choice === "1") {
      console.log("Tüccara girdin.")    
    }
    else if (koy_choice==="2"){
      console.log("Hana girdin.")
    }
    
  }
  dead = true;



}

