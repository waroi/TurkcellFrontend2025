const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let can = 3;

const canKontrol = (can) => {
    if(can===0){
        console.log("Artık hiç canın kalmadı. Sihir bakanı büyü güçlerini kullanmanı engelledi! Oyundan atıldın.");
      process.exit(0);
    } else {
        console.log(
            `Olamaz, kapıyı açacak doğru büyüyü hatırlayamadın. Unutma sadece ${can} hakkın kaldı.`
          );
    }
}

rl.question(
  "Hogwarts'a Hoş Geldin.🔮 Bu evrende geçireceğin süre boyunca birçok eğlenceli ve bazen de tehlikeli görevler seni bekliyor olacak.🧙 Zorlu kararlar vermen gerekecek. Doğru büyüyü bulamadığında ölebilirsin.🪄 Büyü bilgine güveniyorsan başlayalım.\n1. devam\n2. çık\n",
  function (cevap) {
    if (cevap === "1") {
      console.log("Öyleyse başlıyoruz.");
      soru1();
    } else {
      console.log(
        "Şimdiden pes edenlerin hayattan bir başarı beklentisi olmamalı."
      );
      rl.close();
      process.exit(0);
    }
  }
);

function soru1() {
  rl.question(
    "Gece yatakhaneden çıkıp lavaboya gittin fakat geri döndüğünde anahtarını unuttuğunu fark ettin. Kapıyı açıp yatağına dönebilmek için bazı büyülü sözlere ihtiyacın var. Üç seçeneğin var ve bunlardan sadece biri kapıyı açabilecek büyü... Doğru büyüyü bulamazsan kendine uyuyacak başka bir yer bulman gerekecek. İyi şanslar...\n1. Confundo\n2. Alohomora\n3. Extinguish\n",
    function (cevap) {
     if (cevap === "2") {
        console.log("Harikasın.");
        soru2();
      } else {
        can--;
        canKontrol(can);
        soru1();
      }
    }
  );
}
function soru2() {
    rl.question(
        "Şanslısın... İçeri girebildin. Etraf çok karanlık, yatağını bulamıyorsun burayı aydınlatmak için bazı büyülü sözlere ihtiyacın var. Üç seçeneğin var ve bunlardan sadece biri yolunu aydınlatacak büyü... Doğru büyüyü bulamazsan sabaha kadar beklemen gerekecek. İyi şanslar...\n1. Lumos\n2. Nox\n3. Obliviate ",
        function (cevap) {
            if (cevap === "1") {
                console.log("Harikasın.");
                soru3();
              } else {
                can--;
                canKontrol(can);
                soru2();
              } 
        }
    )
}
function soru3() { //TODO
    rl.question(
        "Günaydın! Bu güzel sabaha yüzünü yıkayıp başlamak isterken aynada arkanda bir trol olduğunu fark ettin. Şanslıysan Harry yardım çığlığını duyup seni kurtarmaya gelecek. Bakalım bugün şans seninle mi?\n1. İmdaattt! Yardım edin.\n2. Harryyyy!!! Yardım ettt!",
        function (cevap) {
            if (cevap === "1") {
                console.log("Harikasın.");
                soru4();
              } else {
                can--;
                canKontrol(can);
                soru3();
              } 
        }
    )
}
function soru4() { 
    rl.question(
        "Şanslısın. Harry seni kurtardı. İlk dersin Karanlık Sanatlara Karşı Savunma ve Profesör Lupin derse bir böcürt ile gelmiş. Hayatta en korktuğun şey kılığındaki böcürt'ü aklındaki en komik şeye dönüştürmek için gereken büyülü sözler şunlar:...\n1.Rictusempra\n2.Refillio\n3.Riddikulus",
        function (cevap) {
            if (cevap === "3") {
                console.log("Harikasın.");
                soru5();
              } else {
                can--;
                canKontrol(can);
                soru4();
              } 
        }
    )
}
function soru5() { 
    rl.question(
        "Dersten çıkınca bahçede 3 adet ruh emicinin sana doğru geldiğini gördün. Tüm mutluluğunu kaybetmemek için bazı büyülü sözlere ihtiyacın var. Doğru büyüyü bulamazsan mutluluğu geri kazanmak için kilolarca çikolata yemen gerekecek. İyi şanslar...\n1. Entomorphis\n2. Expecto Patronum\n3. Wingardium Leviosa",
        function (cevap) {
            if (cevap === "2") {
                console.log("Harikasın.");
              } else {
                can--;
                canKontrol(can);
                soru5();
              } 
        }
    )
}
function soru6() { 
    rl.question(
        "Ders dönemi sona erdi. Ailenin ve diğer muggle'ların yaşadığı o sıkıcı şehre dönebilmek için eşyalarını bavuluna yerleştirmen gerek. Bu süreçte sana yardım edebilecek büyülü sözler var. Eğer doğru olanı bulabilirsen Hogwarts Express'ine yetişebilirsin. İyi şanslar...\n1. Pack\n2. Protego Maxima\n3. Melofors",
        function (cevap) {
            if (cevap === "1") {
                console.log("Harikasın.");
              } else {
                can--;
                canKontrol(can);
                soru6();
              } 
        }
    )
}
