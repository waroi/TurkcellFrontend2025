const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let gorevler = [];

function gorevEkle(gorev) {
  gorevler.push(gorev);
  console.log(`\nGörev eklendi: "${gorev}"`);
}

function gorevSil(gorevId) {
  console.log(typeof gorevId);
  if (gorevId >= 0 && gorevId < gorevler.length) {
    const silinen = gorevler.splice(gorevId, 1);
    console.log("Görev Silindi:", silinen);
  } else {
    console.log(`\nHatalı ID. Böyle bir görev yok.`);
  }
}
function gorevGuncelle(gorevId, yeniGorev) {
  if (gorevId >= 0 && gorevId < gorevler.length) {
    const eskiGorev = gorevler[gorevId];
    gorevler[gorevId] = yeniGorev;
    console.log(`\n Görev güncellendi: ${eskiGorev} -> ${yeniGorev}`);
  } else {
    console.log(`\nHatalı ID. Böyle bir görev yok.`);
  }
}
function Listele() {
  if (gorevler.length > 0) {
    console.log(`\n Görev listesi: `);
    console.table(gorevler);
  } else {
    console.log(`\n Hiç görev yok`);
  }
}
const basla = () => {
  rl.question(
    ` Lütfen bir işlem seçin:
  \n1. Görev Ekle
      \n2. Görev Sil
      \n3. Görev Güncelle
      \n4. Görev Listesini Görüntüle
      \n5. Çıkış\n`,
    (secim) => {
      switch (secim) {
        case "1":
          rl.question("Eklemek istediğiniz görevi yazınız: ", (gorev) => {
            gorevEkle(gorev);
            Listele();
            basla();
          });
          break;
        case "2":
          rl.question(
            "Silmek istediğiniz görevin index numarasını yazınız: ",
            (gorevId) => {
              gorevSil(parseInt(gorevId));
              Listele();
              basla();
            }
          );
          break;
        case "3":
          Listele();
          rl.question(
            "Güncellemek istediğiniz görevin ID'sini yazın: ",
            (gorevId) => {
              rl.question("Yeni görevi yazın: ", (yeniGorev) => {
                gorevGuncelle(parseInt(gorevId), yeniGorev);
                Listele();
                basla();
              });
            }
          );
          break;
        case "4":
          Listele();
          basla();
          break;
        case "5":
          console.log("Çıkılıyor...");
          rl.close();
          break;
        default:
          console.log("Geçersiz seçim!");
          basla();
          break;
      }
    }
  );
};
basla();
