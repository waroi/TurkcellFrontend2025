const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let can = 3;
let galleon = 10;
const iksirFiyat = 5;
let anlikSoruIndex = 0;
const ikincilCevapSayisi = 2;
const soruSayisi = 6;
let karakterAd;
let karakterBina;
let canGostergesi;

const canKontrol = (can) => {
  if (can === 0) {
    console.log(
      "Artık hiç canın kalmadı. Sihir bakanı büyü güçlerini kullanmanı engelledi! Oyundan atıldın."
    );
    console.log("\n======================================================================================================================\n");
    process.exit(0);
  } else {
    canGosterge(can);
    console.log(
      `Olamaz, Hatalar yapıldı, ama hâlâ büyücü ruhu var! Unutma sadece ${can} hakkın kaldı.`
    );
    console.log("\n======================================================================================================================\n");
  }
};
const gecersizGiris = (cevap, cevapSayisi) => {
  if (cevap > cevapSayisi) {
    console.log("Geçersiz giriş yaptınız.Tekrar deneyin");
    console.log("\n======================================================================================================================\n");
    return false;
  } else {
    return true;
  }
};
function magaza() {
  console.log(`\n🛍️ Mağazaya hoş geldin! (Galleon:🪙  ${galleon}, Can: ${can})`);
  console.log(`1. Can İksiri - ${iksirFiyat} Galleon (Canını +1 artırır)`);
  console.log("2. Çıkış");
  rl.question("Ne almak istersiniz?(1 - 2)", function (cevap) {
    if (cevap === "1") {
      if (galleon >= iksirFiyat) {
        galleon -= iksirFiyat;
        can += 1;
        console.log(
          `🧪 Can İksiri satın alındı! (Yeni Can: ${can}, Kalan Galleon:🪙  ${galleon})`
        );
        canGosterge(can); 
        console.log("\n======================================================================================================================\n");
        soruSor();
      } else {
        console.log("Yeterli galleonun yok!");
        console.log("\n======================================================================================================================\n");
        soruSor();
      }
    } else if(cevap ==="2"){
      console.log("Sorulara dönülüyor...");
      console.log("\n======================================================================================================================\n");
      soruSor();
    }
  });
}
function karakterIsim(){
  rl.question(
    "Oyuna başlamadan önce karakterin için belirlediğin ismi yazmalısın...\n",
    function(cevap){
      if(cevap){
        karakterAd = cevap;
        console.log(`Hoş Geldin ${cevap}`);
        binaSec();
      }
    }
  )
}
function binaSec(){
  const soru= { 
    soru: "Seçmen Şapka başına yerleşirken, hangi binaya ait olduğunu keşfetmeye hazır mısın? Seçimini yap ve büyülü yolculuğun başlasın! 🏰✨",
    secenekler: ["🦁 Gryffindor – Cesur, sadık ve gözü pek misin?", "🦅Ravenclaw – Zeki, meraklı ve yaratıcı mısın?", "🦡 Hufflepuff – Adil, çalışkan ve güvenilir misin?", "🐍 Slytherin – Hırslı, kurnaz ve kararlı mısın?"]
  }
  console.log(soru.soru);
    for (let i = 0; i < soru.secenekler.length; i++) {
      console.log(`${i + 1}. ${soru.secenekler[i]}`);
    }
    console.log("\n======================================================================================================================\n");
    rl.question("", (bina)=>{
      switch(bina){
        case "1": 
          karakterBina = "🦁 Gryffindor";
          soruSor();
          break;
        case "2":
          karakterBina = "🦅 Ravenclaw";
          soruSor();
          break;
        case "3": 
          karakterBina = "🦡 Hufflepuff";
          soruSor();
          break;
        case "4":
          karakterBina = "🐍 Slytherin";
          soruSor();
          break;
        default:
          console.log("Böyle bir bina yok! Yeniden seç.");
          binaSec();
          break;
      }
    })
}
function canGosterge(can){
  canGostergesi ="";
  for(let i=0; i<can; i++){
    canGostergesi+="❤️  ";
  }
}
canGosterge(can);
const sorular = [
  {
    soru: "Gece yatakhaneden çıkıp lavaboya gittin fakat geri döndüğünde anahtarını unuttuğunu fark ettin. Kapıyı açıp yatağına dönebilmek için bazı büyülü sözlere ihtiyacın var. Üç seçeneğin var ve bunlardan sadece biri kapıyı açabilecek büyü... Doğru büyüyü bulamazsan kendine uyuyacak başka bir yer bulman gerekecek. İyi şanslar...",
    secenekler: ["Confundo", "Alohomora", "Extinguish"],
    dogruCevap: 2,
  },
  {
    soru: "Şanslısın... İçeri girebildin. Etraf çok karanlık, yatağını bulamıyorsun burayı aydınlatmak için bazı büyülü sözlere ihtiyacın var. Üç seçeneğin var ve bunlardan sadece biri yolunu aydınlatacak büyü... Doğru büyüyü bulamazsan sabaha kadar beklemen gerekecek. İyi şanslar...",
    secenekler: ["Lumos", "Nox", "Obliviate"],
    dogruCevap: 1,
  },
  {
    soru: "Günaydın! Bu güzel sabaha yüzünü yıkayıp başlamak isterken aynada arkanda bir trol olduğunu fark ettin. Şanslıysan Harry yardım çığlığını duyup seni kurtarmaya gelecek. Bakalım bugün şans seninle mi?",
    secenekler: ["İmdaattt! Yardım Edin", "Harryyyyy! Yardım Ettttt"],
    dogruCevap: Math.random() < 0.5 ? 1 : 2,
  },
  {
    soru: "Şanslısın. Harry seni kurtardı. İlk dersin Karanlık Sanatlara Karşı Savunma ve Profesör Lupin derse bir böcürt ile gelmiş. Hayatta en korktuğun şey kılığındaki böcürt'ü aklındaki en komik şeye dönüştürmek için gereken büyülü sözler şunlar:...",
    secenekler: ["Rictusempra", "Refillio", "Riddikulus"],
    dogruCevap: 3,
  },
  {
    soru: "Dersten çıkınca bahçede 3 adet ruh emicinin sana doğru geldiğini gördün. Tüm mutluluğunu kaybetmemek için bazı büyülü sözlere ihtiyacın var. Doğru büyüyü bulamazsan mutluluğu geri kazanmak için kilolarca çikolata yemen gerekecek. İyi şanslar...",
    secenekler: ["Entomorphis", "Expecto Patronum", "Wingardium Leviosa"],
    dogruCevap: 2,
  },
  {
    soru: "Ders dönemi sona erdi. Ailenin ve diğer muggle'ların yaşadığı o sıkıcı şehre dönebilmek için eşyalarını bavuluna yerleştirmen gerek. Bu süreçte sana yardım edebilecek büyülü sözler var. Eğer doğru olanı bulabilirsen Hogwarts Express'ine yetişebilirsin. İyi şanslar...",
    secenekler: ["Pack", "Protego Maxima", "Melofors"],
    dogruCevap: 1,
  },
];
function soruSor() {
  if (can === 0) {
    console.log("Tüm canlarını kaybettin. Oyun bitti!");
    process.exit(0);
  }
  if (anlikSoruIndex <= soruSayisi - 1) {
    const soru = sorular[anlikSoruIndex];
    console.log(`Karakter: ${karakterAd} ------- Seçilen Bina: ${karakterBina} ------- Kalan Can: ${canGostergesi} ------- Mevcut Galleon:🪙  ${galleon}`);
    console.log("Can iksiri satın almak için 9'u tuşlayarak mağazaya gidebilirsin.\n");
    console.log("Oyundan çıkmak için 0'ı tuşlayabilirsin.");
    console.log("\n======================================================================================================================\n");
    console.log(soru.soru);
    for (let i = 0; i < soru.secenekler.length; i++) {
      console.log(`${i + 1}. ${soru.secenekler[i]}`);
    }
    console.log("\n======================================================================================================================\n");
    rl.question("", function (cevap) {
      if (cevap == soru.dogruCevap) {
        console.log("Harikasın!!!");
        anlikSoruIndex++;
        galleon++;
        soruSor();
      }else if (cevap === "0"){
        console.log("Çıkış Yapılıyor...");
        process.exit(0);
      } else if(cevap === "9"){
        magaza();
      } else {
        const isValid = gecersizGiris(cevap, soru.secenekler.length);
        if (isValid) {
          can--;
          canKontrol(can);
          console.log("Üzgünüm... Yanlış cevap verdiniz.");
        }
        soruSor();
      }
    });
  } else if (anlikSoruIndex === soruSayisi) {
    sonSoru();
  } else {
    process.exit(0);
  }
}
rl.question(
  "Hogwarts'a Hoş Geldin.🔮 Bu evrende geçireceğin süre boyunca birçok eğlenceli ve bazen de tehlikeli görevler seni bekliyor olacak.🧙 Zorlu kararlar vermen gerekecek. Doğru büyüyü bulamadığında ölebilirsin.🪄 Büyü bilgine güveniyorsan başlayalım.\n1. devam\n2. çık\n",
  function (cevap) {
    if (cevap === "1") {
      console.log("Öyleyse başlıyoruz.");
      karakterIsim();
    } else {
      console.log(
        "Şimdiden pes edenlerin hayattan bir başarı beklentisi olmamalı."
      );
      rl.close();
      process.exit(0);
    }
  }
);

function sonSoru() {
  rl.question(
    "Şimdi… Hogwarts’a tekrar dönmek ister misin? \n1️⃣ Yeniden Oyna \n2️⃣ Çıkış.\n",
    function (cevap) {
      if (cevap === "1") {
        anlikSoruIndex = 0;
        soruSor();
      } else {
        const isValid = gecersizGiris(cevap, ikincilCevapSayisi);
        if (isValid) {
          console.log("Çıkış Yapılıyor...");
          rl.close();
          process.exit(0);
        } else {
          sonSoru();
        }
      }
    }
  );
}
//TODO : random soru yapılacak, ilk giriş fonksiyon içine alınıp gecersiz giriş kontrolü yapıalcak.
