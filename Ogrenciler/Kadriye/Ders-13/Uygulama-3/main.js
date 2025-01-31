alert("Hoşgeldiniz");

todo_list = [];

while (true) {
  islem = parseInt(
    prompt(
      "Lütfen yapmak istediğiniz işlemi seçiniz: \n 1- Ekleme \n 2- Düzenleme \n 3- Silme  \n 4- Listeyi Görüntüle \n 5- Çıkış"
    )
  );
  switch (islem) {
    case 1:
      ekleme();
      break;
    case 2:
      duzenleme();
      break;
    case 5:
      alert("Sayfadan ayrılıyorsunuz.");
      break;
  }
  if (islem == 5) {
    break;
  }
}

function ekleme() {
  icerik = prompt("Notunuzu giriniz.");
  todo_list.push(icerik);
  alert(`Notunuz Eklendi. \n${icerik}`);
}

function duzenleme() {
  if (todo_list.length == 0) {
    alert("Liste boş!");
  } else {
    todo_str = "";
    for (let i = 0; i < todo_list.length; i++) {
      todo_str += i + 1 + "- " + todo_list[i] + "\n";
    }
    let icerik_index =
      prompt(`Lütfen düzenlemek istediğiniz içeriği seçiniz: \n${todo_str}`) -
      1;
    if (icerik_index >= 0 && icerik_index < todo_list.length) {
      guncel_icerik = prompt(
        `Güncellemenizi gerçekleştiriniz.\n${todo_list[icerik_index]}`
      );
      if (guncel_icerik == "") {
        alert("Boş içerik oluşturamazsınız.");
      } else {
        todo_list[icerik_index] = guncel_icerik;
        alert("Güncellemeniz gerçekleştirildi.");
      }
    } else {
      alert("Geçerisiz sayı girdiniz.");
    }
  }
}
