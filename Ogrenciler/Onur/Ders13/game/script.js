// Kodların Arasındaki Macera - Konsol Oyunu

function startGame() {
  console.log("Bir sabah uyandığında bilgisayar ekranında bir mesaj beliriyor: 'Sistemde olağanüstü bir güvenlik açığı tespit edildi. Hemen müdahale etmelisin!'");
  console.log("Şirketin en yetenekli yazılım geliştiricilerinden biri olarak, bu görevi üstlenmeye karar veriyorsun.");
  
  let choice1 = prompt("Ne yapacaksın? (1) Şirketin sunucularına doğrudan erişim sağla (2) Yeraltı hacker topluluğundan yardım iste (3) Şirketin eski loglarını incele");
  
  if (choice1 === "1") {
      console.log("Sisteme bağlandığında bir alarm tetikleniyor! Kimlik doğrulaması yapmazsan sistem seni kilitleyecek.");
      let choice2 = prompt("Ne yapacaksın? (1) Kimlik doğrulamasını atlatmak için bir kod yaz (2) Geri çekil");
      
      if (choice2 === "1") {
          if (Math.random() > 0.4) {
              console.log("Kimlik doğrulamasını başarıyla atlattın! Ancak kötü amaçlı yazılım seni fark etti.");
              let choice3 = prompt("Virüsü etkisiz hale getirmek için ne yapacaksın? (1) Kod kırma algoritmalarını çalıştır (2) Açıkları kullanarak devre dışı bırak");
              if (choice3 === "1") {
                  console.log("Uzun ama güvenli bir yöntemle virüsü etkisiz hale getirdin! Şirketin kahramanı oldun!");
              } else {
                  console.log("Virüsü devre dışı bırakmaya çalışırken sistem çöktü! Sunucu saldırıya uğradı ve işinden oldun.");
              }
          } else {
              console.log("Kimlik doğrulamasını geçemedin ve sistem seni kilitledi! Ancak eski bir yedekleme sunucusu olabilir...");
              let choice4 = prompt("Gizli yedekleme sunucusuna erişmeyi dener misin? (1) Evet (2) Hayır");
              if (choice4 === "1") {
                  console.log("Eski bir protokol kullanarak sisteme erişmeyi başardın ve açığı düzelttin!");
              } else {
                  console.log("Sisteme erişmeyi reddettin ve sistem tamamen çöktü. Oyun bitti.");
              }
          }
      } else {
          console.log("Geri çekildin ve başka bir yol arıyorsun...");
          startGame();
      }
  } 
  else if (choice1 === "2") {
      console.log("Hacker forumunda 'ShadowByte' ile iletişime geçiyorsun. Ancak onlara eski bir devlet veri tabanına erişim sağlamalısın.");
      let choice2 = prompt("Onların isteğini kabul edecek misin? (1) Evet (2) Hayır");
      
      if (choice2 === "1") {
          if (Math.random() > 0.3) {
              console.log("Hackerlar sana gizli bir exploit veriyor ve güvenlik açığını düzeltebiliyorsun. Ancak fark edilmemek için izlerini temizlemelisin.");
              let choice3 = prompt("İzlerini temizlemek için ne yapacaksın? (1) Sunuculara sahte loglar ekle (2) Şifrelenmiş bir tünel kullan");
              if (choice3 === "2") {
                  console.log("Şifrelenmiş tünel sayesinde izlerini gizleyerek başarılı oldun. Kimse bir şey fark etmedi!");
              } else {
                  console.log("Sahte loglar yetersiz kaldı ve güvenlik ekibi seni yakaladı! Oyun bitti.");
              }
          } else {
              console.log("Devlet seni takip etmeye başladı! FBI peşinde!");
          }
      } else {
          console.log("Hackerların yardımını reddettin ve kendi başına ilerlemeye karar verdin.");
          startGame();
      }
  } 
  else if (choice1 === "3") {
      console.log("Eski sistem loglarını incelerken 2015 yılında unutulmuş bir güvenlik açığı keşfediyorsun. Ancak eski bir çalışanın yardımına ihtiyacın var.");
      let choice2 = prompt("Onu nasıl bulacaksın? (1) Kişisel blogunu araştır (2) Şirket e-posta kayıtlarını tarama");
      
      if (choice2 === "1") {
          console.log("Blogunda bazı ipuçları buldun ve eski çalışan sana güvenlik açığını nasıl kapatacağını anlattı. Sistemi başarıyla kurtardın!");
      } else {
          console.log("Şirket içi verileri incelerken yanlışlıkla sistemi çökertecek bir kodu çalıştırdın! Ancak geri dönme şansın olabilir...");
          let choice3 = prompt("Sistemi kurtarmak için eski bir yedekleme dosyasını kullanmak ister misin? (1) Evet (2) Hayır");
          if (choice3 === "1") {
              console.log("Yedekleme dosyası sayesinde sistem kurtarıldı ve işine devam ettin!");
          } else {
              console.log("Şirketin tüm verileri kayboldu ve işinden kovuldun. Oyun bitti.");
          }
      }
  } 
  else {
      console.log("Geçersiz seçim, tekrar dene.");
      startGame();
  }
}

startGame();