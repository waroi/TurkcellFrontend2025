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

console.log(player_attributes.weapon);

let dead = false;

while (dead === false) {}
