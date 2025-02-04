// Futbolcu oyun tarzı
const oyuncuTipleri = {
  hizli: { hiz: 70, guc: 40, teknik: 50, dayaniklilik: 60 },
  guclu: { hiz: 40, guc: 70, teknik: 45, dayaniklilik: 65 },
  teknik: { hiz: 50, guc: 45, teknik: 70, dayaniklilik: 55 },
};

// Oyuncu özellikleri
let oyuncu = {
  isim: "",
  tip: "",
  pozisyon: "",
  hiz: 0,
  guc: 0,
  teknik: 0,
  dayaniklilik: 100,
  yetenek: 50,
  populerlik: 30,
  para: 1000,
  enerji: 100,
  maksimumEnerji: 100,
  form: 70,
};

// Başlangıç hikayesi ve karakter oluşturma
function oyunuBaslat() {
  alert(
    "Genç bir futbolcu olarak büyük hayallerin var. Alt liglerde başlayıp, " +
      "en üst seviyeye çıkmak ve bir efsane olmak istiyorsun. " +
      "Bunun için çok çalışman ve doğru kararlar vermen gerekecek."
  );

  oyuncu.isim = prompt("Futbolcu adınızı girin:");

  // Oyuncu tipi seçimi
  let tipSecimi;
  while (true) {
    tipSecimi = prompt(
      "Nasıl bir futbolcu olmak istersin?\n" +
        "1) Hızlı (Sürat ve çeviklik avantajı)\n" +
        "2) Güçlü (Fizik ve dayanıklılık avantajı)\n" +
        "3) Teknik (Top tekniği ve şut avantajı)"
    );

    if (tipSecimi === "1" || tipSecimi === "2" || tipSecimi === "3") {
      break;
    }
    alert("Lütfen 1, 2 veya 3 seçeneklerinden birini giriniz.");
  }

  // Seçilen oyuncu tipine göre özellikler farklı güçte oluyor
  switch (tipSecimi) {
    case "1":
      oyuncu.tip = "Hızlı";
      oyuncu.hiz = 70;
      oyuncu.guc = 40;
      oyuncu.teknik = 50;
      oyuncu.dayaniklilik = 60;
      break;
    case "2":
      oyuncu.tip = "Güçlü";
      oyuncu.hiz = 40;
      oyuncu.guc = 70;
      oyuncu.teknik = 45;
      oyuncu.dayaniklilik = 65;
      break;
    case "3":
      oyuncu.tip = "Teknik";
      oyuncu.hiz = 50;
      oyuncu.guc = 45;
      oyuncu.teknik = 70;
      oyuncu.dayaniklilik = 55;
      break;
  }

  pozisyonSec();
}

function pozisyonSec() {
  while (true) {
    oyuncu.pozisyon = prompt(
      "Hangi mevkide oynamak istersin?\n" +
        "1) Forvet (Gol atma sansi yuksek)\n" +
        "2) Orta Saha (Dengeli ozellikler)\n" +
        "3) Defans (Dayaniklilik avantaji)\n" +
        "4) Kaleci (Ozel yetenekler)"
    );

    if (
      oyuncu.pozisyon === "1" ||
      oyuncu.pozisyon === "2" ||
      oyuncu.pozisyon === "3" ||
      oyuncu.pozisyon === "4"
    ) {
      break;
    }
    alert("Lutfen gecerli bir pozisyon secin!");
  }

  const pozisyonlar = {
    1: "Forvet",
    2: "Orta Saha",
    3: "Defans",
    4: "Kaleci",
  };

  oyuncu.pozisyon = pozisyonlar[oyuncu.pozisyon];
  alert(
    `${oyuncu.isim}, ${oyuncu.tip} stilli bir ${oyuncu.pozisyon} olarak kariyerine basliyorsun!`
  );
  durumGoster();
  oyunDongusu();
}

function durumGoster() {
  alert(
    "OYUNCU BİLGİLERİ:\n" +
      `İsim: ${oyuncu.isim}\n` +
      `Tip: ${oyuncu.tip}\n` +
      `Pozisyon: ${oyuncu.pozisyon}\n` +
      `Hız: ${oyuncu.hiz}\n` +
      `Güç: ${oyuncu.guc}\n` +
      `Teknik: ${oyuncu.teknik}\n` +
      `Kondisyon: ${oyuncu.dayaniklilik}\n` +
      `Form: ${oyuncu.form}\n` +
      `Para: ${oyuncu.para} TL\n` +
      `Popülerlik: ${oyuncu.populerlik}`
  );
}

function oyunDongusu() {
  while (true) {
    const konum = menuSecimYap();
    if (konum === "cikis") break;

    oyunMenu(konum);

    // Enerji kontrolü
    if (oyuncu.enerji <= 0) {
      alert("Çok yorgunsun! Dinlenmen gerekiyor.");
      dinlen();
    }
  }
}

function menuSecimYap() {
  const secim = prompt(
    "Nereye gitmek istersin?\n" +
      "1) Antrenman Sahasi (Yeteneklerini gelistir)\n" +
      "2) Stadyum (Mac yap)\n" +
      "3) Saglik Merkezi (Iyiles ve dinlen)\n" +
      "4) Menajer Ofisi (Transfer tekliflerini degerlendir)\n" +
      "5) Istatistiklerini Gor\n" +
      "6) Cikis"
  );

  switch (secim) {
    case "1":
      return "antrenman";
    case "2":
      return "stadyum";
    case "3":
      return "saglik";
    case "4":
      return "menajer";
    case "5":
      durumGoster();
      return menuSecimYap();
    case "6":
      return "cikis";
    default:
      alert("Gecersiz secim!");
      return menuSecimYap();
  }
}

function oyunMenu(konum) {
  switch (konum) {
    case "antrenman":
      antrenmanSahasi();
      break;
    case "stadyum":
      stadyum();
      break;
    case "saglik":
      saglikMerkezi();
      break;
    case "menajer":
      menajerOfisi();
      break;
  }
}

function antrenmanSahasi() {
  if (oyuncu.enerji < 20) {
    alert("Antrenman yapamayacak kadar yorgunsun! Once dinlenmelisin.");
    return;
  }

  const secim = prompt(
    "Hangi antrenman programini secmek istersin?\n" +
      "1) Fiziksel Antrenman (Guc ve Hiz)\n" +
      "2) Teknik Antrenman (Top teknigi)\n" +
      "3) Taktik Antrenman (Oyun zekasi)\n" +
      "4) Geri Don"
  );

  if (secim === "4") return;

  oyuncu.enerji -= 20;
  const gelisim = Math.floor(Math.random() * 3) + 1;

  switch (secim) {
    case "1":
      oyuncu.hiz += gelisim;
      oyuncu.guc += gelisim;
      alert(
        `Fiziksel antrenman tamamlandi!\nHiz: +${gelisim}\nGuc: +${gelisim}`
      );
      break;
    case "2":
      oyuncu.teknik += gelisim * 2;
      alert(`Teknik antrenman tamamlandi!\nTeknik: +${gelisim * 2}`);
      break;
    case "3":
      oyuncu.yetenek += gelisim;
      alert(`Taktik antrenman tamamlandi!\nYetenek: +${gelisim}`);
      break;
  }
}

function stadyum() {
  if (oyuncu.enerji < 30) {
    alert("Mac oynamak icin cok yorgunsun! Dinlenmen gerek.");
    return;
  }

  const macTipi = prompt(
    "Hangi tur mac oynamak istersin?\n" +
      "1) Hazirlik Maci (Kolay)\n" +
      "2) Lig Maci (Normal)\n" +
      "3) Kupa Maci (Zor)\n" +
      "4) Geri Don"
  );

  if (macTipi === "4") return;

  oyuncu.enerji -= 30;
  macOyna(macTipi);
}

function macOyna(macTipi) {
  const zorluk = {
    1: 50, // Hazirlik maci
    2: 70, // Lig maci
    3: 90, // Kupa maci
  };

  const temelPerformans = performansHesapla();
  const macZorlugu = zorluk[macTipi];
  const sonuc = temelPerformans - macZorlugu + Math.floor(Math.random() * 30);

  let odul, populerlikArtisi;
  if (sonuc > 20) {
    alert("Muhtesem bir performans sergiledin! 🌟");
    odul = macTipi === "3" ? 2000 : macTipi === "2" ? 1000 : 500;
    populerlikArtisi = macTipi === "3" ? 15 : macTipi === "2" ? 10 : 5;
  } else if (sonuc > 0) {
    alert("Iyi bir performans gosterdin.");
    odul = macTipi === "3" ? 1000 : macTipi === "2" ? 500 : 250;
    populerlikArtisi = macTipi === "3" ? 10 : macTipi === "2" ? 5 : 3;
  } else {
    alert("Bu mac pek iyi gecmedi...");
    odul = macTipi === "3" ? 500 : macTipi === "2" ? 250 : 100;
    populerlikArtisi = macTipi === "3" ? 5 : macTipi === "2" ? 3 : 1;
  }

  oyuncu.para += odul;
  oyuncu.populerlik += populerlikArtisi;
  if (oyuncu.form + sonuc / 10 > 100) {
    // Eğer form 100'ü geçecekse
    oyuncu.form = 100; // 100'de sabitle
  } else if (oyuncu.form + sonuc / 10 < 50) {
    // Eğer form 50'nin altına düşecekse
    oyuncu.form = 50; // 50'de sabitle
  } else {
    // Bu aralıktaysa
    oyuncu.form = oyuncu.form + sonuc / 10; // Normal hesaplamayı yap
  }

  alert(
    `Mac sonucu:\n` +
      `Kazanilan para: ${odul} TL\n` +
      `Populerlik artisi: +${populerlikArtisi}\n` +
      `Yeni form durumu: ${oyuncu.form}`
  );
}

function performansHesapla() {
  let performans = 0;

  switch (oyuncu.pozisyon) {
    case "Forvet":
      performans =
        (oyuncu.hiz * 0.3 + oyuncu.teknik * 0.4 + oyuncu.guc * 0.3) *
        (oyuncu.form / 100);
      break;
    case "Orta Saha":
      performans =
        (oyuncu.hiz * 0.3 + oyuncu.teknik * 0.5 + oyuncu.guc * 0.2) *
        (oyuncu.form / 100);
      break;
    case "Defans":
      performans =
        (oyuncu.hiz * 0.2 + oyuncu.teknik * 0.3 + oyuncu.guc * 0.5) *
        (oyuncu.form / 100);
      break;
    case "Kaleci":
      performans =
        (oyuncu.hiz * 0.2 + oyuncu.teknik * 0.4 + oyuncu.guc * 0.4) *
        (oyuncu.form / 100);
      break;
  }

  return Math.floor(performans);
}

function saglikMerkezi() {
  const secim = prompt(
    "Saglik Merkezi'ne hos geldin!\n" +
      "1) Dinlen (Enerji +50, 200 TL)\n" +
      "2) Masaj (Form +10, Enerji +30, 500 TL)\n" +
      "3) Tam Tedavi (Full iyilesme, 1000 TL)\n" +
      "4) Geri Don"
  );

  switch (secim) {
    case "1":
      if (oyuncu.para >= 200) {
        oyuncu.enerji = Math.min(oyuncu.maksimumEnerji, oyuncu.enerji + 50);
        oyuncu.para -= 200;
        alert("Enerji yenilendi!");
      } else {
        alert("Yeterli paran yok!");
      }
      break;
    case "2":
      if (oyuncu.para >= 500) {
        oyuncu.form = Math.min(100, oyuncu.form + 10);
        oyuncu.enerji = Math.min(oyuncu.maksimumEnerji, oyuncu.enerji + 30);
        oyuncu.para -= 500;
        alert("Masaj tamamlandi! Form ve enerji yenilendi.");
      } else {
        alert("Yeterli paran yok!");
      }
      break;
    case "3":
      if (oyuncu.para >= 1000) {
        oyuncu.enerji = oyuncu.maksimumEnerji;
        oyuncu.form = 100;
        oyuncu.para -= 1000;
        alert("Tam tedavi tamamlandi! Tamamen iyilestin.");
      } else {
        alert("Yeterli paran yok!");
      }
      break;
  }
}

function menajerOfisi() {
  // Oyuncunun değerini hesaplıyoruz
  const oyuncuDegeri = (oyuncu.populerlik + oyuncu.yetenek) * 100;

  // Rastgele bir teklif yap oyuncu değerinin %80 ile %120'si arasında teklifler geliyor
  const teklifMiktari = Math.floor(oyuncuDegeri * (0.8 + Math.random() * 0.4));

  const secim = prompt(
    `Yeni bir transfer teklifi aldin!\n` +
      `Teklif edilen ucret: ${teklifMiktari} TL\n` +
      `1) Kabul et\n` +
      `2) Reddet`
  );

  if (secim === "1") {
    oyuncu.para += teklifMiktari;
    oyuncu.populerlik += 10;
    alert(`Transfer tamamlandi! Kazandigin para: ${teklifMiktari} TL`);
  } else {
    alert("Teklifi reddettin.");
  }
}

function dinlen() {
  alert("Dinleniyorsun...");
  oyuncu.enerji = oyuncu.maksimumEnerji;
  if (oyuncu.form > 55) {
    oyuncu.form -= 5;
  } else {
    oyuncu.form = 50;
  }
}

oyunuBaslat();
