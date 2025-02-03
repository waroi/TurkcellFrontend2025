alert("Task Manager'a hoşgeldiniz!");

function taskManager() {
    while (true) {
        console.log(`
            Seçenekleriniz:
            1=) Görev Eklemek
            2=) Görev Listelemek
            3=) Görev Güncellemek
            4=) Görev Silmek
            5=) Çıkış Yapmak
        `);
        let secenek = prompt("1-5 arasında bir seçenek girin:");
        if (secenek == "1") {
            gorevEkle();
        } else if (secenek == "2") {
            gorevListele();
        } else if (secenek == "3") {
            gorevGuncelle();
        } else if (secenek == "4") {
            gorevSil();
        } else if (secenek == "5") {
            console.log("Task Manager'dan çıkıyorsunuz.");
            break;
        } else {
            console.log("Geçersiz seçenek girdiniz!");
        }
    }
}

const gorevler = [];

function gorevEkle() {
    const ad = prompt("Görevinizin adı nedir?");
    const icerik = prompt("Görevinizin içeriği nedir?");
    if (ad === "" || icerik === "") {
        console.log("Ad ve içerik alanlarını doldurmak zorunludur!");
        return;
    }
    const gorev = {
        id: gorevler.length + 1,
        ad: ad,
        icerik: icerik
    };
    gorevler.push(gorev);
    console.log(`Göreviniz "${gorev.id}" ID ile "${gorev.ad}" adında ve "${gorev.icerik}" içeriğiyle başarıyla eklendi!`);
}

function gorevListele() {
    if (gorevler.length === 0) {
        console.log("Task Manager gösterecek herhangi bir görev bulamadı.");
        return;
    }
    console.log("Task Manager içindeki görev listeniz:");
    for (let i = 0; i < gorevler.length; i++) {
        let gorev = gorevler[i];
        console.log(`
            ${i + 1}. Görev:
            ID: ${gorev.id}
            Ad: ${gorev.ad}
            İçerik: ${gorev.icerik}
        `);
    }
}

function gorevGuncelle() {
    let id = prompt("Güncellemek istediğiniz görevin ID'sini girin. (Bu işlemden önce listeleme yapmanız önerilir!)");
    if (id === "") {
        console.log("Geçerli bir ID girin!");
        return;
    }
    for (let i = 0; i < gorevler.length; i++) {
        if (gorevler[i].id == id) {
            let yeniAd = prompt(`Yeni görev adını giriniz (Eski ad: ${gorevler[i].ad}):`);
            let yeniIcerik = prompt(`Yeni görev içeriğini giriniz (Eski içerik: ${gorevler[i].icerik}):`);
            //şu kısmı hocaya sor
            if(yeniAd===""){
                gorevler[i].ad=gorevler[i].ad;
            }
            gorevler[i].ad = yeniAd ; 
            
            gorevler[i].icerik = yeniIcerik ;
            if(yeniIcerik===""){
                gorevler[i].icerik=gorevler[i].icerik;
            }
            console.log(`Göreviniz "${gorevler[i].ad}" adıyla ve "${gorevler[i].icerik}" içeriğiyle güncellendi!`);
            return;
        }
    }
    console.log("Bu ID'ye ait görev bulunamadı!");
}

function gorevSil() {
    let id = prompt("Silmek istediğiniz görevin ID'sini girin. (Bu işlemden önce listeleme yapmanız önerilir!)");
    if (id === "") {
        console.log("Geçerli bir ID girin!");
        return;
    }
    for (let i = 0; i < gorevler.length; i++) {
        if (gorevler[i].id == id) {
            const silinenGorev = gorevler.splice(i, 1)[0];
            console.log(`"${silinenGorev.ad}" adına ve "${silinenGorev.icerik}" içeriğine sahip görev silindi.`);
            return;
        }
    }
    console.log("Bu ID'ye ait görev bulunamadı!");
}

taskManager();
