
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
    type: {

    },

    item_list: []

};



alert("Welcome to Wilderness");


alert("Info** 1: represent Warrior , 2: Mage, 3: Elf");
c_name = prompt("Please enter the player name: ");
Player.name = c_name;
character_type = prompt("Please enter the character type");

if (character_type == 1) {
    character_type = Warrior;
}
else if (character_type == 2) {
    character_type = Mage;
}
else if (character_type == 3) {
    character_type = Elf;
}
else {
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

Player.item_list.push(item_1)

console.log(Player.item_list[0]);
console.log(Player);

console.log("Diyarın derinliklerine indikçe, rüzgârın fısıltıları yerini hayaletlerin sessizliğine bıraktı. Eski bir savaş alanının ortasında, kimin olduğu bilinmeyen iskeletlerin arasında parlayan bir kılıç gördü. Gölgeli Kılıç adı verilen bu silah, saf bir karanlıktan dövülmüş gibi duruyordu.")
item_2 = {
    name: "Golgeli Kılıc",
    positive_damage: 60

}
Player.item_list.push(item_2);
console.log(Player.item_list[1]);

console.log(Player.type.physical_damage);
Player.type.physical_damage = Player.type.physical_damage + item_2.positive_damage;
console.log(Player);

item_3 = {
    name: "Rünlü Zırh",
    positive_armor: 65
}

console.log("Sonunda, Karanlık Diyar’ın merkezine ulaştı. Burada, unutulmuş bir tapınağın harabeleri yükseliyordu. Zamanın bile unutmaya yüz tuttuğu bu yapının içinde, ağır mühürlerle kilitlenmiş Rünlü Zırh saklıydı.")

Player.item_list.push(item_3);
console.log(Player.item_list[2]);

Player.type.armor = Player.type.armor + item_3.positive_armor;


console.log(Player);


console.log(`${Player.name}, kaderinin onu sürüklediği bu diyarın derinliklerinde ilerlerken, yolun sonunda bir varlığın beklediğini hissetti. Hava ağırlaştı, rüzgâr tamamen kesildi ve gökyüzü sanki bir bilinmezliğe gömüldü.

        Bu anın geleceğini biliyordu. Ama karşısına kimin çıkacağını bilmiyordu.
        
        Gölgeler kıpırdanmaya başladı…
        
        Bir anda, önündeki boşluk karanlığa büründü ve içinden güçlü bir düşman yükseldi!`)


for (let i = 0; i < 3; i++) {   // 3 tur karsılasicak





    //boss'lar her turda random şekilde spawn olucak.
    boss_list = [{ name: "ruhsuzSovalye", hit: 35, health: 100 }, { name: "gölgeYaratıgı", hit: 50, health: 150 }, { name: "yıkımGolem", hit: 60, health: 200 }];


    var flag = 1;

    if (Player.health > 0) {
        console.log("Boss listesi  yenilendi!");


        if (Player.health <= 50) {
            console.log("Kutsamaci saman belirir ve her turu gectiginde eger cani 50 altina düsmüsse onu kutsar ve canini 100 artirir");
            Player.health = Player.health + 100;
        }
        function getRandomBoss(bosses) {
            const randomIndex = Math.floor(Math.random() * bosses.length);
            return bosses[randomIndex];
        }

        random_boss = getRandomBoss(boss_list);
        console.log("Boss random şekilde secildi!");


        while (checkAlive(Player, random_boss)) {







            if (random_boss.name === "ruhsuzSovalye" && flag == 1) {

                console.log(`Beliren düşman ruhsuzSovalye'ydi ve ${Player.name}'e sorun cikartacaga benziyordu,
                        ancak topladığı itemlarla gücüne güç katan ${Player.name}' de çok iddialiydi. 
                        `);

                Player.health = Player.health - random_boss.hit;
                if (Player.health > 0) {
                    random_boss.health = random_boss.health - Player.type.physical_damage;

                }


            } else if (random_boss.name === "yıkımGolem" && flag == 1) {
                console.log(`Beliren düşman yıkımGolem'iydi ve ${Player.name}'a gercekten sorun cikartacaga benziyor,çok fazla hasar vuran bir yaratik, çok güçlüydü.ancak topladığı itemlarla gücüne güç katan ${Player.name} 
                            gölgeli kılıcın gücüyle yikimGolemle karsilasacagindan canavarın haberi yoktu.`);


                Player.health = Player.health - random_boss.hit;
                if (Player.health > 0) {
                    random_boss.health = random_boss.health - Player.type.physical_damage;

                }

            } else if (random_boss.name === "gölgeYaratıgı" && flag == 1) {
                console.log(`Beliren düşman gölgeYaratığıydı ve ${Player.name}'ın ruhunu emmek icin adeta 
                        sabirsizlikla bekliyordu.
                        ancak topladığı itemlarla gücüne güç katan ${Player.name} ruhunu teslim etmeye hic hevesli degildi cünkü
                        ruh emmeye bagisikli ve armorunu güclendiren rünlü zırha sahipti.`);

                Player.health = Player.health - random_boss.hit;
                if (Player.health > 0) {
                    random_boss.health = random_boss.health - Player.type.physical_damage;

                }

            }
            else {
                Player.health = Player.health - random_boss.hit;
                if (Player.health > 0) {
                    random_boss.health = random_boss.health - Player.type.physical_damage;

                }

            }



            console.log(flag + "." + "round");
            console.log(Player);
            console.log(random_boss);

            flag++;





        }

    }


}


function checkAlive(Player, boss) {

    if (Player.health > 0) {


        if (boss.health > 0) {
            return true;
        }
        else {
            console.log("Boss öldürüldü");
            flag = 1;
            return false;
        }


    }
    else {
        console.log(`Oyun sona erdi. Oyuncu ${Player.name} oyunu kaybetti`);
        return false;
    }



}










