const gorevler = ['Alışveriş', 'Yemek yapmak'];
let devam = true;

const listeyiGoruntule = (liste) => {
    if (liste.length === 0) {
        return `Görüntülenecek görev yok\n`;
    }
    var goruntu = 'Görev Listesi:\n------------------------------\n';
    for (var i = 0; i < liste.length; i++) {
        goruntu += `${i + 1}-) ${liste[i]}\n`
    }
    return goruntu + '------------------------------\n';
};

const gorevEkle = () => {
    var yeniGorev = prompt(`${listeyiGoruntule(gorevler)}\nListeye eklemek istediğiniz görevi yazın:`);
    if (yeniGorev) {
        gorevler.push(yeniGorev);
        alert(listeyiGoruntule(gorevler) + "\nGörev başarıyla eklendi");
    } else {
        alert("Boş bir görev eklenemez");
    }
};

const gorevSil = () => {
    if (gorevler.length === 0) {
        alert("Bu liste zaten boş!");
        return;
    }
    var silinecekIndex = Number(prompt(`${listeyiGoruntule(gorevler)}\nSilmek istediğiniz görevin numarasını giriniz:`));
    if (silinecekIndex > 0 && silinecekIndex <= gorevler.length) {
        gorevler.splice(silinecekIndex - 1, 1);
        alert(listeyiGoruntule(gorevler) + "\nGörev başarıyla silindi");
    } else {
        alert("Geçerli bir görev numarası giriniz");
    }
};

const gorevGuncelle = () => {
    if (gorevler.length === 0) {
        alert("Bu liste boş, güncellenecek bir görev yok");
        return;
    }
    var guncellenecekIndex = Number(prompt(`${listeyiGoruntule(gorevler)}\nGüncellemek istediğiniz görevin numarasını giriniz:`));
    if (guncellenecekIndex > 0 && guncellenecekIndex <= gorevler.length) {
        var eskiGorev = gorevler[guncellenecekIndex - 1];
        var yeniGorev = prompt(`Güncellenecek olan görev: ${eskiGorev}\nYeni görevi giriniz:`);
        if (yeniGorev) {
            gorevler[guncellenecekIndex - 1] = yeniGorev;
            alert(listeyiGoruntule(gorevler) + `\n${guncellenecekIndex}. görev başarıyla güncellendi`);
        } else {
            alert("Güncelleme için geçerli bir görev giriniz");
        }
    } else {
        alert("Geçerli bir görev numarası giriniz");
    }
};

const cikisYap = () => {
    alert("Çıkış yapıldı. Görevler konsol ekranına yazdırılıyor.\nbyee");
    console.log(listeyiGoruntule(gorevler));
    devam = false;
};

do {
    var secim = prompt(`Yapmak istediğiniz işlemi seçin:
1- Görevleri Görüntüle
2- Görev Ekle
3- Görev Sil
4- Görev Güncelle
5- Çıkış`);
    switch (secim) {
        case '1':
            alert(listeyiGoruntule(gorevler));
            break;
        case '2':
            gorevEkle();
            break;
        case '3':
            gorevSil();
            break;
        case '4':
            gorevGuncelle();
            break;
        case '5':
            cikisYap();
            break;
        default:
            alert("Hatalı bir seçim yaptınız, lütfen tekrar deneyin.");
            break;
    }
} while (devam);