
let gorevler = [];

function gorevEkle(gorev){
    gorevler.push(gorev);
    console.log(`\nGörev eklendi: "${gorev}"`);
}

function gorevSil(gorevId){
    if(gorevId >= 0 && gorevId < gorevler.length){
        const silinen = gorevler.splice(gorevId, 1);
        console.log = (`\n Görev Silindi: "${silinen}"`);
    } else{
        console.log(`\nHatalı ID. Böyle bir görev yok.`);
    }
}
function gorevGuncelle(gorevId, yeniGorev){
    if(gorevId >= 0 && gorevId < gorevler.length){
        const eskiGorev = gorevler[gorevId];
        gorevler[gorevId] = yeniGorev;
        console.log(`\n Görev güncellendi: ${eskiGorev} -> ${yeniGorev}`);
    } else{
        console.log(`\nHatalı ID. Böyle bir görev yok.`);
    }
}
function Listele(){
    if(gorevler.length > 0){
        console.log(`\n Görev listesi: `);
        gorevler.forEach((gorev, i) => {
            console.log(`${i}. ${gorev}`);
        });
    }else{
        console.log(`\n Hiç görev yok`);
    }
}
