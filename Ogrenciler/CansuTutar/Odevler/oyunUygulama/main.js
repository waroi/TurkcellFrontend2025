body = document.getElementsByTagName("body");
document.body.style.backgroundImage="url('https://arcadelife.wordpress.com/wp-content/uploads/2012/03/img_2206.jpg')";
document.body.style.backgroundSize="cover";
document.body.style.backgroundPosition="center";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.height="90vh";

alert("Hoşgeldin Hugo");
alert(
  "Oyunumuz 3 ayrı levelden oluşmaktadır. \n 1- Elmas Toplama: Amaç en fazla elması toplamaktır. Burada böcek ve bitkilerden kaçınmayı unutmayınız. \n 2- Canavarı Yen: Bu adımda karşılaştığınız canavarı yeniniz. Kaçmak size can kaybettirecektir. \n 3- Kutuları Tahmin Etme: Bu bölümde kazandığınız varlıklarınız koruyunuz."
);
eh = prompt("Oyuna başlamaya hazır mısınız? (e/h)");
elmas = 0;
can = 3;
if (eh == "e") {
  console.log("Oyun başlatma");
  elmasToplamaCan = elmasToplama();
  console.log(elmasToplamaCan);
  if (elmasToplamaCan != 0) {
    alert("Elmas Toplama Bölümünü Tamamladınız, Tebrikler!");
    canavariYenCan = canavariYen();
    if (canavariYenCan != 0) {
      alert("Canavarı Yen Bölümünü Tamamladınız, Tebrikler!");
      tahmin();
      if (can != 0) {
        alert("Kutuları Tahmin Et Bölümünü Tamamladınız, Tebrikler!");
      }
    }
  }
  if (can == 0) {
    alert("Game Over");
  }
}
function elmasYolu() {
  oyun = [];
  secenekler = ["🛣️", "💎", "🌵", "🦂"];
  for (let i = 0; i < 10; i++) {
    oyunSatiri = [];
    while (oyunSatiri.length < 3) {
      number = Math.floor(Math.random() * secenekler.length);
      sembol = secenekler[number];
      if (!oyunSatiri.includes(sembol)) {
        oyunSatiri.push(sembol);
      }
    }
    oyun.push(oyunSatiri);
  }
  return oyun;
}
function elmasToplama() {
  alert("1- İlk yol \n2- İkinci yol \n3- Üçüncü yol");
  oyun = elmasYolu();
  can = 3;
  for (let i = 0; i < oyun.length; i++) {
    alert(oyun[i].join(" "));
    secilen_yol = parseInt(prompt("Tercihinizi giriniz (1, 2 veya 3):"));
    if (secilen_yol >= 1 && secilen_yol <= 3) {
      sembol = oyun[i][secilen_yol - 1];
      if (sembol === "💎") {
        elmas += 1;
        alert(`Elmas kazandınız! Kazanılan toplam elmas :  ${elmas}`);
      } else if (sembol === "🌵" || sembol === "🦂") {
        can--;
        alert(`Dikkat! ${sembol} ile karşılaştınız. Kalan can: ${can}`);
        if (can === 0) {
          alert("Oyunu kaybettiniz! Canınız bitti.");
          break;
        }
      } else {
        alert("Güvenli bir yoldasınız.");
      }
    } else {
      alert("Geçersiz bir seçim yaptınız. Lütfen 1, 2 veya 3 giriniz.");
      i--;
    }
  }
  return can;
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
      alert("Savaşı kazandınız. Ödül olarak canınız yenilendi.");
      can = 3;
    } else {
      alert("Savaşı kaybettiniz. Canavar sizi yakaladı.");
      can = 0;
    }
  }
}
function kutuSec(kutular){
  const secilenKutular = [];
  while (secilenKutular.length < 3) {
    const box = Math.floor(Math.random() * 16);
    if (!secilenKutular.includes(box)) {
      secilenKutular.push(box);
      const satir = Math.floor(box / 4);
      const sutun = box % 4;
      kutular[satir][sutun] = "X";
      alert(kutular.map((satir) => satir.join(" ")).join("\n"));
    }
  }
  return secilenKutular;
}
function tahmin() {
  const kutular = [
    [" 1", " 2", " 3", " 4"],
    [" 5", " 6", " 7", " 8"],
    [" 9", "10", "11", "12"],
    ["13", "14", "15", "16"],
  ];
  alert("3. levele hoş geldiniz. Maymun'un seçtiği 3 kutuyu sırayla tahmin et");
  alert(" 1   2   3   4 \n 5   6   7   8 \n 9  10 11 12 \n13 14 15 16");
  const secilenKutular = kutuSec(kutular);
  const hugoTahmin = [];
  for (let i = 0; i < 3; i++) {
    const tahmin = parseInt(
      prompt(
        `Tahminleri sırayla girin (${i + 1}/3): 1-16 arasında bir kutu seçin.`
      ),
      10
    );
    if (!isNaN(tahmin) && tahmin >= 1 && tahmin <= 16) {
      hugoTahmin.push(tahmin - 1);
    } else {
      alert("Geçerli bir sayı girin (1-16 arası).");
      i--;
    }
  }
  let dogruTahmin = 0;
  for (i = 0; i < 3; i++) {
    if (secilenKutular[i] === hugoTahmin[i]) {
      dogruTahmin++;
    }
  }
  alert(`Tahminleriniz tamamlandı! ${dogruTahmin} doğru tahminde bulundunuz.`);
  if (dogruTahmin === 0) {
    can--;
    alert(`Hiç doğru tahmin yapamadınız. Kalan can: ${can}`);
  }
}