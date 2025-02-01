Warrior = {
    name: "Warrior",
    physical_damage: 70,
    armor: 60,
};

Mage = {
    name: "Mage",
    physical_damage: 50,
    armor: 80
};

Elf = {
    name: "Elf",
    physical_damage: 30,
    armor: 90
};

Player = {
    name: '',
    health: 100,
    type: {},
    item_list: []
};

alert("Welcome to Wilderness");

alert("Info** 1: represent Warrior , 2: Mage, 3: Elf");
c_name = prompt("Please enter the player name: ");
Player.name = c_name;
character_type = prompt("Please enter the character type");

if(character_type == 1){
    character_type = Warrior;
}
else if(character_type == 2){
    character_type = Mage;
}
else if(character_type == 3){
    character_type = Elf;
}
else{
    console.log("Invalid option ! ");
}

Player.type = character_type;

console.log(`Gecenin sonsuz karanlığına gömülmüş ıssız diyarların ardından, ${Player.name}, kaderin bilinmez yollarına adım atan cesur bir ${Player.type.name} idi. Rüzgâr, eski zamanların fısıltılarıyla kulağına unutulmuş efsaneleri taşırken, ay ışığı ise yalnız yolculuğuna sessiz bir yoldaş olmuştu.

Yolculuğu onu, umutların çoktan solduğu, topraklarının susuzluktan çatladığı ve gökyüzünün bile yıldızlarını terk ettiği Karanlık Diyar’a sürükledi. Burada onu, kaderinin bir parçası olacak üç kadim eşya bekliyordu…`)

console.log("Karanlık Diyar’ın sınırlarında, terk edilmiş bir kamp alanına rastladı. Eskiden burada konaklamış bir gezginin geride bıraktığı, toza bulanmış Eski Yolcunun Pelerini hâlâ sapasağlamdı. Kumaşı tuhaf bir şekilde hafifti, ama geceye karıştığında gözle görülmez hale geliyordu.")

item_1 = {
    name: "Karanlık Pelerin",
    positive_health: 50,
}

Player.health = Player.health + item_1.positive_health;
Player.item_list.push(item_1);

console.log(Player.item_list[0]);

console.log("Diyarın derinliklerine indikçe, rüzgârın fısıltıları yerini hayaletlerin sessizliğine bıraktı. Eski bir savaş alanının ortasında, kimin olduğu bilinmeyen iskeletlerin arasında parlayan bir kılıç gördü. Gölgeli Kılıç adı verilen bu silah, saf bir karanlıktan dövülmüş gibi duruyordu.")

item_2 = {
    name: "Golgeli Kılıç",
    positive_damage: 55
}
Player.item_list.push(item_2);
Player.type.physical_damage = Player.type.physical_damage + item_2.positive_damage;

item_3 = {
    name: "Rünlü Zırh",
    positive_armor: 65
}

console.log("Sonunda, Karanlık Diyar’ın merkezine ulaştı. Burada, unutulmuş bir tapınağın harabeleri yükseliyordu. Zamanın bile unutmaya yüz tuttuğu bu yapının içinde, ağır mühürlerle kilitlenmiş Rünlü Zırh saklıydı.")
Player.item_list.push(item_3);
Player.type.armor = Player.type.armor + item_3.positive_armor;

console.log(Player);

boss_list = [
    { name: "ruhsuzSovalye", hit: 35, health: 100 },
    { name: "gölgeYaratıgı", hit: 55, health: 150 },
    { name: "yıkımGolem", hit: 60, health: 200 }
];

console.log(`${Player.name}, kaderinin onu sürüklediği bu diyarın derinliklerinde ilerlerken, yolun sonunda bir varlığın beklediğini hissetti. Hava ağırlaştı, rüzgâr tamamen kesildi ve gökyüzü sanki bir bilinmezliğe gömüldü.

Bu anın geleceğini biliyordu. Ama karşısına kimin çıkacağını bilmiyordu.

Gölgeler kıpırdanmaya başladı…

Bir anda, önündeki boşluk karanlığa büründü ve içinden güçlü bir düşman yükseldi!`);

function checkAlive(Player, boss) {
    if (Player.health <= 0) {
        console.log("Malesef son düşman karşısında öldünüz");
        return true; // Player is dead
    }
    if (boss.health <= 0) {
        console.log(`Tebrikler! ${boss.name} yenildi.`);
        return true; // Boss is dead
    }
    return false;
}

for (let i = 0; i < 3; i++) {

    // Function to get a random boss
    function getRandomBoss(bosses) {
        const randomIndex = Math.floor(Math.random() * bosses.length);
        return bosses[randomIndex];
    }

    const random_boss = getRandomBoss(boss_list);

    console.log(`Beliren düşman ${random_boss.name}'ydi ve ${Player.name} karşılaştı...`);

    while (!checkAlive(Player, random_boss)) {
        // Battle logic
        if (random_boss.name === "ruhsuzSovalye" && (Player.type.name === "Warrior" || Player.type.name === "Mage")) {
            console.log(`Beliren düşman ruhsuzSovalye'ydi ve ${Player.name}'a iki güçlü darbe vurdu,
                ancak topladığı itemlarla gücüne güç katan ${Player.name} çok fazla hasar almadı ve
                gölgeli kılıcın gücüyle tek darbeyle ruhsuzSovalye'yi bertaraf etti.`);
            random_boss.health -= Player.type.physical_damage;
            Player.health -= random_boss.hit;
        } else if (random_boss.name === "yıkımGolem" && (Player.type.name === "Warrior" || Player.type.name === "Mage")) {
            console.log(`Beliren düşman yıkımGolem'iydi ve ${Player.name}'a güçlü darbe vurdu,
                ancak topladığı itemlarla gücüne güç katan ${Player.name} çok fazla hasar aldı çünkü çok güçlüydü
                ve gölgeli kılıcın gücüyle çift darbeyle yıkımGolem'i bertaraf etti.`);
            random_boss.health -= Player.type.physical_damage;
            Player.health -= random_boss.hit;
        } else if (random_boss.name === "gölgeYaratıgı" && (Player.type.name === "Warrior" || Player.type.name === "Mage")) {
            console.log(`Beliren düşman gölgeYaratığıydı ve ${Player.name}'a bir güçlü darbe vurdu,
                ancak topladığı itemlarla gücüne güç katan ${Player.name} bu sefer fazla hasar aldı ve
                gölgeli kılıcın gücüyle hemen 3 darbe sallayıp gölgeYaratığı'nın işini bitirdi.`);
            random_boss.health -= Player.type.physical_damage * 3;
            Player.health -= random_boss.hit;
        } else {
            console.log(`Beliren düşman gölgeYaratığıydı ve ${Player.name}'a bir güçlü darbe vurdu,
                ancak topladığı itemlarla gücüne güç katan ${Player.name} çok fazla hasar aldı.
                3 kere kılıcını sallasa da yetmedi ve gölgeYaratığı'nın son vuruşuyla veda etti.`);
            random_boss.health -= Player.type.physical_damage;
            Player.health -= random_boss.hit;
        }

        // If either the player or the boss dies, stop the battle
        if (checkAlive(Player, random_boss)) {
            break;
        }
    }

    // Remove the defeated boss from the list
    boss_list.splice(boss_list.indexOf(random_boss), 1);

    // If player is dead, break out of the loop
    if (Player.health <= 0) {
        break;
    }
}

console.log(Player);
