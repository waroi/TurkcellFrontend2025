let health = 100;
let fame = 100;
let player = 0;
let isDead = false;
let isWin = false;
let isLose = false;
let isGame = true;
let isBattle = false;
let currentStoryIndex = 0;
let choosePlayer = ["Havhav Hasan", "Hedef Şaşıran Sümeyye", "Paslı Hayriye", "Pofuduk Paşa", "Köpek Necmi", "Marslı Mahmut","Sıkıcı Steve", "Börk Ork", "Robo Goril"];

let goblin = { name: "Goblin", health: 100, damage: 10,};
let troll = { name: "Troll", health: 150, damage: 15,};
let orc = { name: "Orc", health: 200, damage: 20,};
let ogre = { name: "Ogre", health: 250, damage: 25,};
let dragon = { name: "Dragon", health: 300, damage: 30,};
let hydra = { name: "Hydra", health: 350, damage: 35,};
let boss = { name: "Boss", health: 500, damage: 50,};
let story = [
    {
        story: choosePlayer[player - 1] + ",bir gün deniz altı mağarasında dolaşmaya karar vermiş. Mağarada yürürken bir taraftan ses gelmeye başlamış. Sesin geldiği yöne doğru ilerlemeye başlamış. Sesin geldiği yöne doğru ilerlerken bir goblin ile karşılaşmış. Ne yapacaksın? 1-) Savaş 2-) Umursama",
        actions: [battleGoblin, ignoreGoblin]
    },
    {
        story: choosePlayer[player - 1] + ", goblin savaşından sonra ün kazanmış bir şekilde diğer kölelerin olduğu topluluğa (KARANLIK) giderken bir troll ile karşılaşmış. Ne yapacaksın? 1-) Savaş 2-) Umursama",
        actions: [battleTroll, ignoreTroll]
    },
    {
        story: choosePlayer[player - 1] + ", Karanlığa  vardığında diğer köleler ile sohbete başlamış. Köleler ona Parıltı tarafından yeni bir köle gelişimi yaparken labaratuvardan kaçan bir çok başka metabolik canlının olduğunu söylemişler. Eğer kaçan tüm canlıları öldüren olabilirse ödül olarak refah içinde bir yaşam vaad edilmiş. Bunun üzerine " + choosePlayer[player - 1] + " bu canlılar ile savaşmaya karar vermiş. Ve mağaranın derinliklerine doğru ilerlmeye başlamış. Yolda bir orc ile karşılaşmış. Ne yapacaksın? 1-) Savaş 2-) Umursama",
        actions: [battleOrc, ignoreOrc]
    },
    {
        story: choosePlayer[player - 1] + ", Orc ile savaşından sonra yara almış fakat orc'u öldürmeyi başarmış." + choosePlayer[player - 1] + ", her ne kadar korkmuş olsada yoluna devam etmiş. Yolda bir ogre ile karşılaşmış. Ne yapacaksın? 1-) Savaş 2-) Umursama",
        actions: [battleOgre, ignoreOgre] 
    },
    {
        story: choosePlayer[player - 1] + ", Yaralanan " + choosePlayer[player - 1] + ", mağarada geceyi geçirmeye karar vermiş. Sabah olduğunda yola devam etmiş. Mağaranın derinliklerine doğru ilerlerken gözlerine inanamamış. Karşısında eski çağlardan kalan insanların bir sürü altını ve mücevheri olan bir sandık görmüş. Sandığı açmaya karar vermiş ve içinden bir ejderha çıkmış. Ne yapacaksın? 1-) Savaş 2-) Umursama",
        actions: [battleDragon, ignoreDragon]
    },
    {
        story: choosePlayer[player - 1] + ", Ejderha ile savaşından sonra çok ağır yaralar almış fakat ejderhayı öldürmeyi başarmış. " + choosePlayer[player - 1] + ", her ne kadar korkmuş olsada ve takatı kalmamış olsada özgürlüğünü tekrardan kazanmak için yoluna devam etmiş. Yolun sonlarına doğru gelirken bir şapırtı sesi duymuş ve sese doğru gitmeye karar vermiş. Sese doğru gidince karşısında gördüğü şeyden ötürü dehşete düşmüş. 3 başlı dev gibi bir hydra varmış karşısında fakat özgürlüğünü elde etmek için herşeyi yapmaya hazırdı. Ne yapacaksın? 1-) Savaş 2-) Umursama",
        actions: [battleHydra, ignoreHydra]
    },
    {
        story: choosePlayer[player - 1] + ", artık sona geldiğini bilen " + choosePlayer[player - 1] + ", ileride bir ışıltı görmüş ve ışıltıya doğru gitmeye karar vermiş. Işıltıya doğru gittiğinde karşısında daha önce hiç görmediği bir yaratık varmış. Bu yaratık çok güçlü bir boss'muş. Artık son savaş başlıyordu...",
        actions: [battleBoss, ignoreBoss]
    },
    {
        story: "Oyun bitti! Bu oyunda " + choosePlayer[player - 1] + " karakteri ile oynadın ve zafer senin oldu!"
    }

];

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
    if (player >= 1 && player <= 9) {
        
        console.log("Oyun başlıyor...");
        console.log("Sağlık: " + health);
        console.log("Oyun başladı!");
        startStory();
    }else{
        console.log("Geçersiz karakter! Lütfen 1 ve 9 arasında tercihlerinizi yapınız!");
        choosePlayerName();
    }
}

function endGame(){
    console.log("Oyun bitti! " + choosePlayer[player - 1] + " öldü!" + " Bu oyunda " + fame + " şan kazandın. Kötü bir sonla bitti! Karanlık seni özleyecek...");    
    isGame = false;
}

function startStory() {
    if (fame < 0) {
        console.log("Şanın - ye düştü. Karanlık seni bir korkak olarak hatırlayacak...");
        isGame = false;
        return;
    }
    if (!isGame || isDead || isWin || isLose) {
        return; 
    }
    let currentStory = story[currentStoryIndex];
    console.log(currentStory.story);
    if (currentStory.actions) {
        let choice = parseInt(prompt("Bir seçim yap (1 veya 2):"));
        
        if (choice === 1) {
            currentStory.actions[0]();
            currentStoryIndex++;
        } else if (choice === 2) {
            currentStory.actions[1]();
            currentStoryIndex++;
        } else {
            console.log("Geçersiz seçim!");
            startStory();
        }
    } else {
        console.log(currentStory.story); 
        return;
    }
    if (currentStoryIndex < story.length) {
        startStory();
    } else {
        console.log("Oyun bitti!");
    }
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
                    health += health * 2 - 10;
                    break;
                }
                goblinDamage = Math.floor(Math.random() * 10);
                health -= goblinDamage;
                console.log("Goblin sana " + goblinDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    isGame = false;
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
                    health += health * 2 + 20;
                    break;
                }
                trollDamage = Math.floor(Math.random() * 15);
                health -= trollDamage;
                console.log("Troll sana " + trollDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    isGame = false;
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
                    health += health * 2 + 40;
                    break;
                }
                orcDamage = Math.floor(Math.random() * 20);
                health -= orcDamage;
                console.log("Orc sana " + orcDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    isGame = false;
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
                    health += health * 2 + 50;
                    break;
                }
                ogreDamage = Math.floor(Math.random() * 25);
                health -= ogreDamage;
                console.log("Ogre sana " + ogreDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    isGame = false;
                    break;
                }
        }
    }
}

function ignoreOgre() {
    console.log("Ogre'u umursamadın ve şehirdeki şanın azaldı!");
    fame -= 100;
}

function battleDragon(){
    console.log("Dragon ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (dragon.health > 0) {
            console.log("dragon canı: " + dragon.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = Math.floor(Math.random() * 20);
                dragon.health -= damage;
                console.log("Dragon'a " + damage + " hasar verdin!");
                if (dragon.health <= 0) {
                    console.log("Dragon öldü!");
                    isBattle = false;
                    fame += 100;
                    health += health * 2 + 80;
                    break;
                }
                dragonDamage = Math.floor(Math.random() * 30);
                health -= dragonDamage;
                console.log("Dragon sana " + dragonDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    isGame = false;
                    break;
                }
        }
    }
}

function ignoreDragon() {
    console.log("Dragon'u umursamadın ve şehirdeki şanın azaldı!");
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
                    health += health * 2 + 90;
                    break;
                }
                hydraDamage = Math.floor(Math.random() * 35);
                health -= hydraDamage;
                console.log("Hydra sana " + hydraDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    isGame = false;
                    break;
                }
        }
    }
}

function ignoreHydra() {
    console.log("Hydra'yu umursamadın ve şehirdeki şanın azaldı!");
    fame -= 140;
}

function battleBoss(){
    console.log("Boss ile savaş başlıyor!");
    isBattle = true;
    while (isBattle) {
        if (boss.health > 0) {
            console.log("Boss canı: " + boss.health);
            console.log(choosePlayer[player - 1] + " canı: " + health);
                let damage = boss.damage * Math.floor(Math.random() * 20);
                boss.health -= damage;
                console.log("Boss'a " + damage + " hasar verdin!");
                if (boss.health <= 0) {
                    console.log("Boss öldü!");
                    isBattle = false;
                    fame += 200;
                    health += health * 2 + 100;
                    break;
                }
                bossDamage = Math.floor(Math.random() * 50);
                health -= bossDamage;
                console.log("Boss sana " + bossDamage + " hasar verdi!");
                if (health <= 0) {
                    console.log(choosePlayer[player - 1] + " öldü!");
                    isDead = true;
                    isBattle = false;
                    isGame = false;
                    break;
                }
        }
    }
}

function ignoreBoss() {
    console.log("Boss'u umursamadın fakat boss seni ezdi geçti savaşarak ölmek yerine korkak gibi ölmeyi tercih ettin!");
    isGame = false;
    fame -= 200;
}
window.onload = function() {
    if (isGame) {
        startStory();
    }
}