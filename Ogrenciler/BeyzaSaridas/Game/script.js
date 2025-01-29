// Kıyamet Senaryosu: Hayatta Kalma Oyunu
function startGame() {
   console.clear();
   let health = 100;
   let food = false;
   let water = false;
 
   function displayStatus() {
     console.log(`\nDurum: Sağlık = ${health}, Yiyecek = ${food ? "Var" : "Yok"}, Su = ${water ? "Var" : "Yok"}\n`);
   }
 
   function logDayMessage(day, message, choices) {
     console.log(`\n🗺️ ${day}. Gün: ${message}`);
     choices.forEach((choice, index) => {
       console.log(`${index + 1}) ${choice}`);
     });
     console.log("-------------------");
   }
 
   // 1. Gün
   logDayMessage("1", "Şehir sessiz ama uzaklardan gelen tuhaf sesler var.", [
     "Market Ara",
     "Terkedilmiş Ev",
     "Ormana Git"
   ]);
   let day1Choice = 1; // Konsol gösterimi için varsayılan seçim
 
   switch (day1Choice) {
     case 1:
       console.log("Markete gittin. Yiyecek ve su buldun, ancak bir zombi saldırısına uğradın. Kaçmayı başardın ama sağlığın azaldı.");
       health -= 30;
       food = true;
       water = true;
       break;
     case 2:
       console.log("Terkedilmiş bir eve girdin. Dinlendin ama içeride hasta bir adam vardı. Onu dışarı atarak güvende kaldın.");
       health += 10;
       break;
     case 3:
       console.log("Ormana gittin. Vahşi hayvanlar gece saldırdı ve sağlığın azaldı.");
       health -= 20;
       break;
     default:
       console.log("Geçersiz seçim, hiçbir şey yapmadın ve zaman kaybettin.");
   }
   displayStatus();
 
   // 2. Gün
   logDayMessage("2", "İşler daha da zorlaşıyor.", [
     "Başka bir markete git",
     "Bir araba bul ve çalıştırmaya çalış",
     "Radyo frekansı aç"
   ]);
   let day2Choice = 2; // Konsol gösterimi için varsayılan seçim
 
   switch (day2Choice) {
     case 1:
       console.log("Markete gittin ama büyük bir zombi sürüsünü yakaladın. Kaçarken sağlığın azaldı.");
       health -= 40;
       break;
     case 2:
       console.log("Bir araba buldun ve çalıştırmayı başardın. Güvenli bir mesafe katettin.");
       health += 10;
       break;
     case 3:
       console.log("Radyo frekansı açtın. Güvenli bir bölge hakkında bilgi aldın ama sinyali alan tehlikeli gruplar da olabilir.");
       break;
     default:
       console.log("Geçersiz seçim, hiçbir şey yapmadın ve zaman kaybettin.");
   }
   displayStatus();
 
   // 3. Gün (Final)
   logDayMessage("3", "Artık buradan çıkış yolu bulmalısın.", [
     "Güvenli bölgeye gitmeye çalış",
     "İşaret fişeği yak",
     "Yeraltı tüneline gir"
   ]);
   let day3Choice = 3; // Konsol gösterimi için varsayılan seçim
 
   switch (day3Choice) {
     case 1:
       if (health > 50) {
         console.log("Güvenli bölgeye ulaştın ve kurtuldun! 🎉");
       } else {
         console.log("Yolda zombilere yakalandın ve öldün. ☠");
       }
       break;
     case 2:
       console.log("İşaret fişeği yaktın. Helikopter seni fark etti ama zombiler de üzerine geldi. Kaçmayı başardın mı? Belki... 🎲");
       break;
     case 3:
       console.log("Yeraltı tüneline girdin. Sessizce ilerledin ve güvenli bir çıkış buldun! 🎉");
       break;
     default:
       console.log("Geçersiz seçim, hiçbir şey yapmadın ve kapana kısıldın. ☠");
   }
   displayStatus();
   console.log("Oyun Bitti. Tekrar denemek için sayfayı yenileyin.");
 }
 
 startGame();