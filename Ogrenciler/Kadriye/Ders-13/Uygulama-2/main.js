alert("Hoşgeldin Hugo");

alert(
  "Oyunumuz 3 ayrı levelden oluşmaktadır. \n 1- Elmas Toplama: Amaç en fazla elması toplamaktır. Burada böcek ve bitkilerden kaçınmayı unutmayınız. \n 2- Canavarı Yen: Bu adımda karşılaştığınız canavarı yeniniz. Kaçmak size can kaybettirecektir. \n 3- Taşlardan Kaçma: Bu bölümde kazandığınız varlıklarınız koruyunuz."
);

eh = prompt("Oyuna başlamaya hazır mısınız?");
elmas = 0;
can = 3;
if (eh == "e") {
  console.log("Oyun başlatma");
  elmasToplamaCan = elmasToplama();
  console.log(elmasToplamaCan);
  if (elmasToplamaCan != 0) {
    alert("İlk leveli tamamladınız, Tebrikler!");
    canavariYenCan = canavariYen();
    if (canavariYenCan != 0) {
      alert("İkinci leveli tamamladınız, Tebrikler!");
      tahmin();
      if(can!= 0){
        alert("Tebrikler 3. leveli tamamlanıdınız.")
      }
    }
  }
  if (can == 0) {
    alert("Game Over");
  }
  
}

function elmasToplama() {
  alert("1- İlk yok \n 2- İkinci yol \n 3- Üçüncü yol");
  oyun = [
    ["🛣️", "💎", "🌵"],
    ["🦂", "🛣️", "💎"],
    ["🛣️", "💎", "🌵"],
    ["🦂", "🛣️", "💎"],
    ["🛣️", "💎", "🌵"],
    ["💎", "🛣️", "🦂"],
    ["🛣️", "💎", "🌵"],
    ["🦂", "🛣️", "💎"],
    ["🛣️", "💎", "🌵"],
    ["🦂", "🛣️", "💎"],
  ];
  for (let i = 0; i < oyun.length; i++) {
    alert(`${oyun[i]}`);
    secilen_yol = parseInt(prompt("Terchinizi giriniz:"));
    switch (secilen_yol) {
      case 1:
        yolKontrol(oyun[i], 1);
        break;
      case 2:
        yolKontrol(oyun[i], 2);
        break;
      case 3:
        yolKontrol(oyun[i], 3);
        break;
    }
  }
  return can;
}

function yolKontrol(yol, secilen_yol) {
  secilen_yol -= 1;
  if (yol[secilen_yol] === "🦂" || yol[secilen_yol] == "🌵") {
    can -= 1;
    alert(`Canınız eksildi! Kalan can : ${can}`);
  } else if (yol[secilen_yol] === "💎") {
    elmas += 1;
    console.log(elmas);
    alert(`Elmas kazandınız! Kazanılan toplam elmas :  ${elmas}`);
  }
}

function canavariYen() {
  alert("2. levele hoşgeldiniz.");
  alert(
    "Bir sonraki engelin canavar. Kurtulmak için 2 seçeneğin var kaç yada savaş."
  );
  ks = parseInt(prompt("1- Kaç \n 2- Savaş"));
  if (ks == 1) {
    kac();
  } else {
    savas();
  }
  return can;
}

function kac() {
  number = Math.random() * 10;
  if (number >= 5) {
    can -= 1;
    alert(`Canavar sizi yakaladı. Yaralandınız. Kalan can: ${can}`);
  } else {
    alert("Canavarda başarılı bir şekilde kaçtınız.");
  }
}
function savas() {
  number = Math.random() * 2;
  if (can >= 2) {
    if (elmas >= 5) {
      alert("Savaşı kazandınız. Ödül olarak canınız tamamlandı.");
      can = 3;
    } else {
      alert("Savaşı kazandınız ama savaş sırasında hazinenizi kaybettiniz.");
      elmas = 0;
    }
  } else {
    if (number >= 1) {
      alert("Savaşı kazandınız. Ödül olarak canınız tamamlandı.");
      can = 3;
    } else {
      alert("Savaşı kaybettiniz. Canavar sizi yakaladı.");
      can = 0;
    }
  }
}

function tahmin() {
  // const kutular = [
  //   [1,2,3,4],
  //   [5,6,7,8],
  //   [9,10,11,12],
  //   [13,14,15,16]
  // ];
  const kutular = [
    [" 1", " 2", " 3", " 4"],
    [" 5", " 6", " 7", " 8"],
    [" 9", "10", "11", "12"],
    ["13", "14", "15", "16"]
];
  alert("3. levele hoş geldiniz. Maymun'un seçtiği 3 kutuyu sırayla tahmin et");
  alert(" 1   2   3   4 \n 5   6   7   8 \n 9  10 11 12 \n13 14 15 16");
  const secilenKutular = [];
  while (secilenKutular.length < 3) {
    const box = Math.floor(Math.random() * 16); 
    if (!secilenKutular.includes(box)) { 
      secilenKutular.push(box);
      const satir = Math.floor(box / 4);
      const sutun = box % 4;
      kutular[satir][sutun] = "X";
      alert(kutular.map(satir => satir.join(' ')).join('\n'));
    }
  }
  console.log("Maymun'un seçtiği kutular: ", secilenKutular.map(x => x + 1)); 
  console.table(kutular);
  const hugoTahmin = [];
  for (let i = 0; i < 3; i++) {
    const tahmin = parseInt(prompt(`Tahminleri sırayla girin (${i + 1}/3): 1-16 arasında bir kutu seçin.`), 10);
    if (!isNaN(tahmin) && tahmin >= 1 && tahmin <= 16) {
      hugoTahmin.push(tahmin - 1); 
    } else {
      alert("Geçerli bir sayı girin (1-16 arası).");
      i--; 
    }
  }
  let dogruTahmin = 0;
  for (i=0; i<3; i++){
    if (secilenKutular[i] === hugoTahmin[i]){
      dogruTahmin++;
    }
  }
  alert(`Tahminleriniz tamamlandı! ${dogruTahmin} doğru tahminde bulundunuz.`);
  if (dogruTahmin === 0){
    can--;
    alert(`Hiç doğru tahmin yapamadınız. Kalan can: ${can}`);
  }
}