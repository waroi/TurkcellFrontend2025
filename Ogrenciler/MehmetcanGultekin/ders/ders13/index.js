// Toplama fonksiyonu
function toplama(sayi1, sayi2) {
    return sayi1 + sayi2;
  }
  
  // Çıkarma fonksiyonu
  function cikarma(sayi1, sayi2) {
    return sayi1 - sayi2;
  }
  
  // Çarpma fonksiyonu
  function carpma(sayi1, sayi2) {
    return sayi1 * sayi2;
  }
  
  // Bölme fonksiyonu
  function bolme(sayi1, sayi2) {
    if (sayi2 === 0) {
      return "Hata: Bir sayı sıfıra bölünemez!";
    }
    return sayi1 / sayi2;
  }
  
  // Hesap makinesi ana fonksiyonu
  function hesapMakinesi() {
    let devamEt = true;
  
    while (devamEt) {
      // Kullanıcıdan işlem seçmesini iste
      const islem = prompt(
        "Bir işlem seçin:\n1- Toplama\n2- Çıkarma\n3- Çarpma\n4- Bölme"
      );
  
      // Kullanıcıdan sayıları al
      const sayi1 = parseFloat(prompt("Birinci sayıyı girin:"));
      const sayi2 = parseFloat(prompt("İkinci sayıyı girin:"));
  
      let sonuc;
  
      switch (islem) {
        case "1": // Toplama
          sonuc = toplama(sayi1, sayi2);
          alert(`Sonuç: ${sayi1} + ${sayi2} = ${sonuc}`);
          break;
        case "2": // Çıkarma
          sonuc = cikarma(sayi1, sayi2);
          alert(`Sonuç: ${sayi1} - ${sayi2} = ${sonuc}`);
          break;
        case "3": // Çarpma
          sonuc = carpma(sayi1, sayi2);
          alert(`Sonuç: ${sayi1} * ${sayi2} = ${sonuc}`);
          break;
        case "4": // Bölme
          sonuc = bolme(sayi1, sayi2);
          if (isNaN(sonuc)) {
            alert(sonuc); // Bölme hatasını göster
          } else {
            alert(`Sonuç: ${sayi1} / ${sayi2} = ${sonuc}`);
          }
          break;
        default:
          alert("Geçersiz bir seçim yaptınız. Lütfen tekrar deneyin.");
          continue; // Geçersiz seçimde döngüyü tekrar başlat
      }
  
      // Devam etmek isteyip istemediğini sor
      devamEt = confirm("Devam etmek istiyor musunuz?");
    }
  
    alert("Hesap makinesi sona erdi. Güle güle!");
  }
  
  // Hesap makinesini başlat
  hesapMakinesi();
  