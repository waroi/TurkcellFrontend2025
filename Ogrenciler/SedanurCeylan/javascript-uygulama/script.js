var devamMi = true;
const toplama = (x, y) => x + y;
const cikarma = (x, y) => x - y;
const carpma = (x, y) => x * y;
const bolme = (x, y) => x / y;
const modAlma = (x, y) => x % y;

do {
  var sayi1 = Number(prompt("Bir Sayı Giriniz:"));
  var sayi2 = Number(prompt("Bir Sayı Daha Giriniz:"));
  var islem = prompt(`Yapmak İstediğiniz İşlemi Seçiniz
    1-Toplama(+)
    2-Çıkarma(-)
    3-Çarpma(*)
    4-Bölme(/)
    5-Mod Alma(%)`);

  switch (islem) {
    case "1":
      alert(toplama(sayi1, sayi2));
      break;
    case "2":
      alert(cikarma(sayi1, sayi2));
      break;
    case "3":
      alert(carpma(sayi1, sayi2));
      break;
    case "4":
      alert(bolme(sayi1, sayi2));
      break;
    case "5":
      alert(modAlma(sayi1, sayi2));
        
      break;

    default:
      console.log("geçersiz işlem");
      break;
  }

  if (
    Number(
      prompt(`İşleme Devam Etmek İster Misiniz?
        1-True
        2-False `)
    ) === 2
  ) {
    devamMi = false;
  }
} while (devamMi);
