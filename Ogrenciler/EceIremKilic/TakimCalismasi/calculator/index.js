const toplama = (sayi1, sayi2) =>
  console.log("toplama sonucunuz:", sayi1 + sayi2);
const cikarma = (sayi1, sayi2) =>
  console.log("çıkarma sonucunuz", sayi1 - sayi2);
const carpma = (sayi1, sayi2) => console.log("çarpma sonucunuz", sayi1 * sayi2);
const bolme = (sayi1, sayi2) => console.log("bölme sonucunuz", sayi1 / sayi2);

while (true) {
  var secim = prompt(
    "İşlem seçiniz: (\n 1:+, \n 2:-, \n 3:*, \n 4:/, \n 5:Çıkış )"
  );
  if (secim !== "5") {
    const sayi1 = prompt("ilk sayı:");
    const intSayi1 = Number(sayi1);
    const sayi2 = prompt("ikinci sayı: ");
    const intSayi2 = Number(sayi2);
    console.log(sayi1, sayi2);
    switch (secim) {
      case "1":
        toplama(intSayi1, intSayi2);
        break;
      case "2":
        cikarma(intSayi1, intSayi2);
        break;
      case "3":
        carpma(intSayi1, intSayi2);
        break;
      case "4":
        bolme(intSayi1, intSayi2);
        break;
      default:
        console.log("Geçersiz işlem girdiniz.");
        break;
    }
  } else {
    break;
  }
}
