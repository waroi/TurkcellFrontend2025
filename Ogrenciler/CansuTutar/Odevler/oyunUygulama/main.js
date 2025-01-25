alert("Hoşgeldin Hugo");

alert(
  "Oyunumuz 3 ayrı levelden oluşmaktadır. \n 1- Elmas Toplama: Amaç en fazla elması toplamaktır. Burada böcek ve bitkilerden kaçınmayı unutmayınız. \n 2- Canavarı Yen: Bu adımda karşılaştığınız canavarı yeniniz. Kaçmak size can kaybettirecektir. \n 3- Taşlardan Kaçma: Bu bölümde kazandığınız varlıklarınız koruyunuz."
);

eh = prompt("Oyuna başlamaya hazır mısınız?");
elmas = 0;
can = 3;
if (eh == "e") {
  console.log("Oyub başlatma");
  elmasToplamaCan = elmasToplama();
  console.log(elmasToplamaCan);
  if (elmasToplamaCan != 0) {
    alert("İlk leveli tamamladınız, Tebrikler!");
    canavariYenCan = canavariYen();
    if (canavariYenCan != 0) {
      alert("İkinci leveli tamamladınız, Tebrikler!");
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
    // ["🦂", "🛣️", "💎"],
    // ["🛣️", "💎", "🌵"],
    // ["💎", "🛣️", "🦂"],
    // ["🛣️", "💎", "🌵"],
    // ["🦂", "🛣️", "💎"],
    // ["🛣️", "💎", "🌵"],
    // ["🦂", "🛣️", "💎"],
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
  nunber = Math.random() * 10;
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