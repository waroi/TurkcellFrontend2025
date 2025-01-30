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
  place_num = Math.floor(Math.random() * place.lengt() + 1);
  return place[place_num].string;
}
console.log(random_event(place));
let dead = false;
while (dead === false) {
  player_choice = prompt(random_event(place));
  dead = true;
}
