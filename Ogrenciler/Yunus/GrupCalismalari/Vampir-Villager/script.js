const supheliler = ['Ali', 'Ayşe', 'Mehmet', 'Zeynep', 'Emre', 'Fatma', 'Serkan', 'Meryem'];
var katil, gunduz, gece, devam = true;
var oyundaHayattaOlanlar = [];
var olenler = [];


for (let i = 0; i < supheliler.length; i++) {
    oyundaHayattaOlanlar.push(supheliler[i]);
}

const katilBelirle = () => {
    let katilIndex = Math.floor(Math.random() * oyundaHayattaOlanlar.length);
    katil = oyundaHayattaOlanlar[katilIndex];
    console.log(`Katil belirlendi: ${katil}`);
};


const gecedeOlanlar = () => {
    let kurbanIndex = Math.floor(Math.random() * oyundaHayattaOlanlar.length);
    let kurban = oyundaHayattaOlanlar[kurbanIndex];
    if (kurban !== katil) {
        alert(`${kurban} gece öldü 🧛👻🧛`);
        olenler.push(kurban);
        oyundaHayattaOlanlar.splice(kurbanIndex, 1);
    } else {
        gecedeOlanlar();
    }
};


const soruyaCevapVer = (supheli) => {
    const katilCevaplar = [
        "😠 Beni suçlama, ben sadece burada dolaşıyordum",
        "🤷‍♂️ Gerçekten bir şey bilmiyorum ve o an orada değildim",
        "🚶‍♂️ Sadece geçiyordum, kimseye zarar verme amacım yoktu",
        "👀 Evet, ben de gördüm ama kimseyi suçlamak istemiyorum"
    ];

    const masumCevaplar = {
        "Ali": [
            "😇 Benim hiç suçum yok, lütfen bana güvenin",
            "🚶‍♂️ Ben sadece bir yolcuyum, hiç bir alakam yok",
            "🙏 Bana bir şey söyleyin, ben hepinizden masumum",
        ],
        "Ayşe": [
            "🛡️ Suçlu olsam bunu kabul ederdim, ama ben masumum",
            "🤔 Bunu yapmam, gerçekten bilmiyorum ne oldu",
            "🙅‍♀️ Beni suçlamayın, ben sadece bir şüphelim",
        ],
        "Mehmet": [
            "🧑‍🔧 Benim işim değil, inanın bana",
            "🤯 Her şey çok karmaşık, ama ben buna karışmadım",
            "🤦‍♂️ Suçlu değilim, biri beni yanlış anlamış olabilir",
        ],
        "Zeynep": [
            "🙅‍♀️ Hayır, kesinlikle suçlu değilim",
            "✋ Beni karıştırmayın, olayla ilgim yok",
            "🤷‍♀️ Herkes masum, ben de dahil, birini suçlamak kolay değil",
        ],
        "Emre": [
            "😇 Ben hiç kimseye zarar veremem, masumum",
            "👀 Hepinizin gözleri önümde, ben sadece izliyorum",
            "🌌 Gecenin karanlığında bir şey göremem ki, ben çok korkarım",
        ],
        "Fatma": [
            "😨 Gerçekten bir şey görmedim, sadece korktum",
            "🪤 Suçlu olmadığımı biliyorum, biri bana tuzak kuruyor",
            "🤔 Beni suçlamadan önce düşünmelisiniz, ben masumum",
        ],
        "Serkan": [
            "🙅‍♂️ Kimseyi öldüremem, buna cesaretim yok",
            "🗨️ Ben burada bir şeyler konuşmak için değilim, masumum",
            "🚪 Bir şey bilmiyorum, sadece içeri girmeye çalışıyordum",
        ],
        "Meryem": [
            "🤷‍♀️ Gerçekten ne olduğuna dair bir fikrim yok",
            "🤔 Herkes masum, ben de dahil, birini suçlamak kolay değil",
            "😇 Kimseye zarar vermem, bana güvenin",
        ]
    };


    if (supheli === katil) {
        return katilCevaplar[Math.floor(Math.random() * katilCevaplar.length)];
    } else {
        return masumCevaplar[supheli][Math.floor(Math.random() * masumCevaplar[supheli].length)];
    }
};

const herkesinCevaplari = () => {
    let cevaplar = '';
    for (let i = 0; i < oyundaHayattaOlanlar.length; i++) {
        let supheli = oyundaHayattaOlanlar[i];
        cevaplar += `${i + 1}-) ${supheli}: "${soruyaCevapVer(supheli)}"\n`;
    }
    alert(`Gündüz oldu ve herkes cevap veriyor:\n${cevaplar}`);
};


const katiliBulmayaCalis = () => {
    katilBelirle();
    let geceGerceklesecek = true;

    while (devam) {
        if (oyundaHayattaOlanlar.length <= 2) {
            alert(`Oyun bitti ve Katil kazandı 🧛🧛🧛 Katil ${katil}'idi`);
            break;
        }

        alert("Gündüz oldu...");
        herkesinCevaplari();

        let secim = prompt(`Yapmak istediğiniz işlemi seçin:
1- Şüpheli Sorgula
2- Katili Bulmaya Çalış
3- Çıkış`);

        switch (secim) {
            case '1':
                var sorguMetni = "Şüphelilere soru sormak için birini seçin:\n";
                for (let i = 0; i < oyundaHayattaOlanlar.length; i++) {
                    sorguMetni += `${i + 1}) ${oyundaHayattaOlanlar[i]}\n`;
                }
                var sorgu = prompt(sorguMetni);
                var sorguIndex = Number(sorgu) - 1;

                if (sorguIndex >= 0 && sorguIndex < oyundaHayattaOlanlar.length) {
                    var supheli = oyundaHayattaOlanlar[sorguIndex];
                    alert(`${supheli} diyor ki: "${soruyaCevapVer(supheli)}"`);


                    alert("Gece oluyor...");
                    gecedeOlanlar();
                } else {
                    alert("Geçerli bir şüpheli seçiniz");
                }
                break;
            case '2':
                let katilMetni = "Katili bulmaya çalışın Şüpheliyi seçin:\n";
                for (let i = 0; i < oyundaHayattaOlanlar.length; i++) {
                    katilMetni += `${i + 1}) ${oyundaHayattaOlanlar[i]}\n`;
                }
                let katilSecim = prompt(katilMetni);
                let secilenKatil = oyundaHayattaOlanlar[Number(katilSecim) - 1];

                if (secilenKatil === katil) {
                    console.log(`Katili buldunuz Katil: ${katil}`);
                    alert("Tebrikler Katili buldunuz");
                    devam = false;
                } else {
                    alert("Yanlış kişi gece oluyor...");
                    gecedeOlanlar();
                }
                break;
            case '3':
                alert("Oyun sonlandırıldı.");
                devam = false;
                break;
            default:
                alert("Hatalı bir seçim yaptınız lütfen tekrar deneyin.");
                break;
        }

    }
};

const yeniOyunBaslat = () => {
    oyundaHayattaOlanlar = [];
    for (let i = 0; i < supheliler.length; i++) {
        oyundaHayattaOlanlar.push(supheliler[i]);
    }
    olenler = [];
    devam = true;
    katiliBulmayaCalis();
};

const oyunBaslat = () => {
    let oyunSecimi = prompt("Vampir-Köylü Oyununa Hoşgeldiniz!\nBaşlamak için 'Başla(1)' yazın veya çıkmak için 'Çık(0)' yazın.");
    if (oyunSecimi.toLowerCase() === 'başla' || oyunSecimi.toLocaleLowerCase() === "1") {
        yeniOyunBaslat();
        let tekrarOyna = prompt("Tekrar oynamak ister misiniz? (Evet/Hayır)");
        if (tekrarOyna.toLowerCase() === "evet") {
            oyunBaslat();
        } else {
            alert("Oyun sonlandırıldı. Teşekkürler");
        }
    } else {
        alert("Oyun sonlandırıldı. Görüşmek üzere");
    }
};

oyunBaslat();