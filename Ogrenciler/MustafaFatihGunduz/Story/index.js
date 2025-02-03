let health = 100;
let fame = 100;
let items = ["teeth", "bow", "electric", "shield", "sword",  "potion", "armor", "mace", "mysterybox"];
let player = 0;
let story = [];
let isDead = false;
let isWin = false;
let isLose = false;
let isGame = true;
let isShop = false;
let isBattle = false;

let choosePlayer = ["Havhav Hasan", "Hedef Şaşıran Sümeyye", "Paslı Hayriye", "Pofuduk Paşa", "Köpek Necmi", "Marslı Mahmut","Sıkıcı Steve", "Börk Ork", "Robo Goril"];

let goblin = { name: "Goblin", health: 100, damage: 10,};
let troll = { name: "Troll", health: 150, damage: 15,};
let orc = { name: "Orc", health: 200, damage: 20,};
let ogre = { name: "Ogre", health: 250, damage: 25,};
let cyclops = { name: "Cyclops", health: 300, damage: 30,};
let hydra = { name: "Hydra", health: 350, damage: 35,};
let chimera = { name: "Chimera", health: 400, damage: 40,};
let kraken = { name: "Kraken", health: 450, damage: 45,};
let boss = { name: "Boss", health: 500, damage: 50,};
choosePlayerName();
function choosePlayerName(){
    console.log("Lütfen hangi oyuncu ile oynamak istediğini seç:\n");
    for (let index = 0; index < choosePlayer.length; index++) {
        console.log(index + 1 + ". " + choosePlayer[index]);
    }
    player = parseInt(prompt("Lütfen hangi oyuncu ile oynamak istediğini seç: "));
    if(player < 1 || player > choosePlayer.length){
        console.log("Geçersiz karakter!");
        choosePlayerName();
        
    }
    else if (player != 1 && player != 2 && player != 3 && player != 4 && player != 5 && player != 6 && player != 7 && player != 8 && player != 9){
        console.log("Geçersiz karakter!");
        choosePlayerName();
        
    }
    else{
        console.log("Seçtiğin karakter = " + choosePlayer[player - 1]);
        startGame();
    }
}

function startGame(){
    console.log("Oyun başlıyor...");
    console.log("Sağlık: " + health);
    console.log("Eşyalar: " + items);
    console.log("Oyun başladı!");
    if (player == 1) {
        startHavhavHasan();
        
    }
    else if (player == 2) {
        startHedefSasiranSumeyye();
        console.log("Hedef Şaşıran Sümeyye ile oyun başladı!");
    }
    else if (player == 3) {
        startPasliHayriye();
        console.log("Paslı Hayriye ile oyun başladı!");
    }
    else if (player == 4) {
        startPofudukPasa();
        console.log("Pofuduk Paşa ile oyun başladı!");
    }
    else if (player == 5) {
        startKopekNecmi();
        console.log("Köpek Necmi ile oyun başladı!");
    }
    else if (player == 6) {
        startMarsliMahmut();
        console.log("Marslı Mahmut ile oyun başladı!");
    }
    else if (player == 7) {
        startSikiciSteve();
        console.log("Sıkıcı Steve ile oyun başladı!");
    }
    else if (player == 8) {
        startBorkOrk();
        console.log("Börk Ork ile oyun başladı!");
    }
    else if (player == 9) {
        startRoboGoril();
        console.log("Robo Goril ile oyun başladı!");
    }
}

function startHavhavHasan(){
    console.log("Havhav Hasan ile oyun başladı!");
    story = ["Havhav Hasan, bir gün ormanda dolaşmaya karar vermiş. Ormanda yürürken bir taraftan ses gelmeye başlamış. Sesin geldiği yöne doğru ilerlemeye başlamış. Sesin geldiği yöne doğru ilerlerken bir goblin ile karşılaşmış. Ne yapacaksın? 1-) Savaş 2-) Umursama", 
    action = [1, 2], 
    doAction = [battleGoblin, ignoreGoblin],
]; 
    battleGoblin();
    console.log(story[0]);
}

function battleGoblin() {
    console.log("Goblin ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (goblin.health > 0) {
            console.log("Goblin canı: " + goblin.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                goblin.health -= damage;
                console.log("Goblin'e " + damage + " hasar verdin!");
                if (goblin.health <= 0) {
                    console.log("Goblin öldü!");
                    isBattle = false;
                    fame += 20;
                    health += 20;
                    break;
                }
                goblinDamage = Math.floor(Math.random() * 10);
                health -= goblinDamage;
                console.log("Goblin sana " + goblinDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    break;
                }
        }
    }
}

function ignoreGoblin() {
    console.log("Goblin'i umursamadın ve şehirdeki şanın azaldı!");
    fame -= 40;
}

function battleTroll(){
    console.log("Troll ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (troll.health > 0) {
            console.log("Troll canı: " + troll.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                troll.health -= damage;
                console.log("Troll'e " + damage + " hasar verdin!");
                if (troll.health <= 0) {
                    console.log("Troll öldü!");
                    isBattle = false;
                    fame += 40;
                    health += 40;
                    break;
                }
                trollDamage = Math.floor(Math.random() * 15);
                health -= trollDamage;
                console.log("Troll sana " + trollDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    break;
                }
        }
    }
}

function ignoreTroll() {
    console.log("Troll'i umursamadın ve şehirdeki şanın azaldı!");
    fame -= 60;
}

function battleOrc(){
    console.log("Orc ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (orc.health > 0) {
            console.log("Orc canı: " + orc.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                orc.health -= damage;
                console.log("Orc'e " + damage + " hasar verdin!");
                if (orc.health <= 0) {
                    console.log("Orc öldü!");
                    isBattle = false;
                    fame += 60;
                    health += 60;
                    break;
                }
                orcDamage = Math.floor(Math.random() * 20);
                health -= orcDamage;
                console.log("Orc sana " + orcDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    break;
                }
        }
    }
}

function ignoreOrc() {
    console.log("Orc'u umursamadın ve şehirdeki şanın azaldı!");
    fame -= 80;
}

function battleOgre(){
    console.log("Ogre ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (ogre.health > 0) {
            console.log("Ogre canı: " + ogre.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                ogre.health -= damage;
                console.log("Ogre'e " + damage + " hasar verdin!");
                if (ogre.health <= 0) {
                    console.log("Ogre öldü!");
                    isBattle = false;
                    fame += 80;
                    health += 80;
                    break;
                }
                ogreDamage = Math.floor(Math.random() * 25);
                health -= ogreDamage;
                console.log("Ogre sana " + ogreDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    break;
                }
        }
    }
}

function ignoreOgre() {
    console.log("Ogre'u umursamadın ve şehirdeki şanın azaldı!");
    fame -= 100;
}

function battleCyclops(){
    console.log("Cyclops ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (cyclops.health > 0) {
            console.log("Cyclops canı: " + cyclops.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                cyclops.health -= damage;
                console.log("Cyclops'e " + damage + " hasar verdin!");
                if (cyclops.health <= 0) {
                    console.log("Cyclops öldü!");
                    isBattle = false;
                    fame += 100;
                    health += 100;
                    break;
                }
                cyclopsDamage = Math.floor(Math.random() * 30);
                health -= cyclopsDamage;
                console.log("Cyclops sana " + cyclopsDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    break;
                }
        }
    }
}

function ignoreCyclops() {
    console.log("Cyclops'u umursamadın ve şehirdeki şanın azaldı!");
    fame -= 120;
}

function battleHydra(){
    console.log("Hydra ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (hydra.health > 0) {
            console.log("Hydra canı: " + hydra.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                hydra.health -= damage;
                console.log("Hydra'ya " + damage + " hasar verdin!");
                if (hydra.health <= 0) {
                    console.log("Hydra öldü!");
                    isBattle = false;
                    fame += 120;
                    health += 120;
                    break;
                }
                hydraDamage = Math.floor(Math.random() * 35);
                health -= hydraDamage;
                console.log("Hydra sana " + hydraDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    break;
                }
        }
    }
}

function ignoreHydra() {
    console.log("Hydra'yu umursamadın ve şehirdeki şanın azaldı!");
    fame -= 140;
}

function battleChimera(){
    console.log("Chimera ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (chimera.health > 0) {
            console.log("Chimera canı: " + chimera.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                chimera.health -= damage;
                console.log("Chimera'ya " + damage + " hasar verdin!");
                if (chimera.health <= 0) {
                    console.log("Chimera öldü!");
                    isBattle = false;
                    fame += 140;
                    health += 140;
                    break;
                }
                chimeraDamage = Math.floor(Math.random() * 40);
                health -= chimeraDamage;
                console.log("Chimera sana " + chimeraDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    break;
                }
        }
    }
}

function ignoreChimera() {
    console.log("Chimera'yı umursamadın ve şehirdeki şanın azaldı!");
    fame -= 160;
}

function battleKraken(){
    console.log("Kraken ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (kraken.health > 0) {
            console.log("Kraken canı: " + kraken.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                kraken.health -= damage;
                console.log("Kraken'e " + damage + " hasar verdin!");
                if (kraken.health <= 0) {
                    console.log("Kraken öldü!");
                    isBattle = false;
                    fame += 160;
                    health += 160;
                    break;
                }
                krakenDamage = Math.floor(Math.random() * 45);
                health -= krakenDamage;
                console.log("Kraken sana " + krakenDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    break;
                }
        }
    }
}

function ignoreKraken() {
    console.log("Kraken'ı umursamadın ve şehirdeki şanın azaldı!");
    fame -= 180;
}

function battleBoss(){
    console.log("Boss ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (boss.health > 0) {
            console.log("Boss canı: " + boss.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                boss.health -= damage;
                console.log("Boss'a " + damage + " hasar verdin!");
                if (boss.health <= 0) {
                    console.log("Boss öldü!");
                    isBattle = false;
                    fame += 200;
                    health += 200;
                    break;
                }
                bossDamage = Math.floor(Math.random() * 50);
                health -= bossDamage;
                console.log("Boss sana " + bossDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    break;
                }
        }
    }
}

