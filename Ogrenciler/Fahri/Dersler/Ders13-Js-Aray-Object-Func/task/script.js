alert("Görev Yöneticisine Hoşgeldiniz!");

// Görevleri tutacak dizi
let gorevler = [];

// Ana menü fonksiyonu
function menu() {
  while (true) {
    let secim = prompt(`
        GÖREV YÖNETİCİSİ
        1- Görev Ekle
        2- Görevleri Listele
        3- Görev Güncelle
        4- Görev Sil
        5- Çıkış
        Seçiminiz (1-5):`);

    if (secim === "1") {
      gorevEkle();
    } else if (secim === "2") {
      gorevleriListele();
    } else if (secim === "3") {
      gorevGuncelle();
    } else if (secim === "4") {
      gorevSil();
    } else if (secim === "5") {
      alert("Görev yöneticisi kapatılıyor...");
      break;
    } else {
      alert("Geçersiz seçim! Lütfen 1-5 arası bir sayı girin.");
    }
  }
}

// Görev ekleme fonksiyonu
function gorevEkle() {
  let baslik = prompt("Görev başlığını girin:");
  let aciklama = prompt("Görev açıklamasını girin:");

  if (baslik === "" || aciklama === "") {
    alert("Başlık ve açıklama boş olamaz!");
    return;
  }

  let yeniGorev = {
    numara: gorevler.length + 1,
    baslik: baslik,
    aciklama: aciklama,
  };

  gorevler.push(yeniGorev);
  alert("Görev başarıyla eklendi!");
}

// Görevleri listeleme fonksiyonu
function gorevleriListele() {
  if (gorevler.length === 0) {
    alert("Henüz hiç görev eklenmemiş!");
    return;
  }

  let tumGorevler = "GÖREV LİSTESİ\n";
  for (let i = 0; i < gorevler.length; i++) {
    tumGorevler += `
        Görev ${gorevler[i].numara}:
        Başlık: ${gorevler[i].baslik}
        Açıklama: ${gorevler[i].aciklama}
        ----------------`;
  }
  alert(tumGorevler);
}

// Görev güncelleme fonksiyonu
function gorevGuncelle() {
  if (gorevler.length === 0) {
    alert("Güncellenecek görev yok!");
    return;
  }

  gorevleriListele(); // Önce mevcut görevleri göster
  let guncellenecekNumara = prompt(
    "Güncellemek istediğiniz görevin numarasını girin:"
  );

  let bulundu = false;
  for (let i = 0; i < gorevler.length; i++) {
    if (gorevler[i].numara == guncellenecekNumara) {
      let yeniBaslik = prompt(`Yeni başlık (${gorevler[i].baslik}):`);
      let yeniAciklama = prompt(`Yeni açıklama (${gorevler[i].aciklama}):`);

      // Eğer yeni değer girilmezse eski değeri koru
      if (yeniBaslik !== "") {
        gorevler[i].baslik = yeniBaslik;
      }
      if (yeniAciklama !== "") {
        gorevler[i].aciklama = yeniAciklama;
      }

      alert("Görev güncellendi!");
      bulundu = true;
      break;
    }
  }

  if (!bulundu) {
    alert("Bu numarada bir görev bulunamadı!");
  }
}

// Görev silme fonksiyonu
function gorevSil() {
  if (gorevler.length === 0) {
    alert("Silinecek görev yok!");
    return;
  }

  gorevleriListele(); // Önce mevcut görevleri göster
  let silinecekNumara = prompt("Silmek istediğiniz görevin numarasını girin:");

  let bulundu = false;
  for (let i = 0; i < gorevler.length; i++) {
    if (gorevler[i].numara == silinecekNumara) {
      gorevler.splice(i, 1);
      alert("Görev silindi!");
      bulundu = true;
      break;
    }
  }

  if (!bulundu) {
    alert("Bu numarada bir görev bulunamadı!");
  }
}

// Programı başlat
menu();
