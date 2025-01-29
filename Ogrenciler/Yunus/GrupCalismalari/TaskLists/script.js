var gorevlerListesi = ['Alışveriş', 'Yemek yeeee']
var devamMi = true

const listeGoruntule = (gelenListe) => {
    if (gelenListe.length == 0) {
        return `Görüntülenecek Görev Yok!\n`
    }
    var liste = 'Görev Listesi \n ------------------------------  \n';
    for (var i = 0; i < gelenListe.length; i++) {
        liste += `${i + 1}-) ${gelenListe[i]}\n`
    }

    return liste + '-------------------------------\n'
}

do {
    var proccess = prompt(`Yapmak İstediğinzi İşlemi Seçin:
        1-Görevleri Görüntüle
        2-Görev Ekle
        3-Görev Sil
        4-Görev Güncelle
        5-Çıkış
        `)

    switch (proccess) {
        case '1':
            alert(listeGoruntule(gorevlerListesi) + "\n Listeye geri dönmek için tıklayın")
            break;
        case '2':
            var yeniGorev = prompt(`${listeGoruntule(gorevlerListesi)}\n Görev listenize ne eklemek istiyorsunuz?`)
            gorevlerListesi.push(yeniGorev)
            alert(listeGoruntule(gorevlerListesi) + "\n Görev Başarıyla Eklendi!")
            break;
        case '3':
            if (gorevlerListesi.length != 0) {
                var silinecekGorevIndexi = prompt(`${listeGoruntule(gorevlerListesi)}\n Silmek istediğiniz görevin numarasını giriniz:`)
                gorevlerListesi.splice(silinecekGorevIndexi - 1, 1)
                alert(listeGoruntule(gorevlerListesi) + "\n Görev Başarıyla Silindi!")
            } else {
                alert(`Bu liste boş!`)
            }

            break;
        case '4':
            var guncellenecekGorevIndexi = prompt(`${listeGoruntule(gorevlerListesi)}\n Güncellemek istediğiniz görevin numarasını giriniz:`)
            if (guncellenecekGorevIndexi > gorevlerListesi.length) {
                alert('Böyle bir görev yok listeye geri gönderiliyorsunuz...')
            } else {
                var old = gorevlerListesi.slice(guncellenecekGorevIndexi - 1, guncellenecekGorevIndexi)
                gorevlerListesi[guncellenecekGorevIndexi - 1] = prompt(`Güncellenecek olan görev: ${old}\nYeni görevi giriniz:`)
                alert(listeGoruntule(gorevlerListesi) + `\n ${guncellenecekGorevIndexi}. Görev Başarıyla Güncellendi!`)
            }
            break;

        case '5':
            alert('Çıkış yapıldı, görevleri console ekranından görüntüleyebilirsiniz\nbyyeeeee')
            console.log(listeGoruntule(gorevlerListesi))
            devamMi = false
            break;

        default:
            alert('Hatalı bir işlem seçtiniz menüye geri gönderiliyorsunuz...')
            break;
    }

} while (devamMi);