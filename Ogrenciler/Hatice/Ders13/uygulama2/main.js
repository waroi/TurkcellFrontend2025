// The Last of Us: Hayatta Kalma Macerası
function startGame() {
    console.log("The Last of Us: Hayatta Kalma Macerası'na Hoş Geldiniz!");
    console.log(
    "Dünya, insanlığı yok eden bir mantar enfeksiyonuyla mahvolmuş durumda. Hayatta kalan az sayıdaki insan, tehlikeli bir dünyada yaşam savaşı veriyor."
    );
    console.log(
    "Sen, geçmişi acılarla dolu bir hayatta kalansın ve yanında genç bir kız olan Ellie var. Onu korumak ve birlikte güvenli bir bölgeye ulaşmak zorundasınız."
    );
    let choice1 = prompt(
    "Şehirdeki tehlikelerden kaçarken bir yol ayrımına geliyorsunuz. Etrafta enfekte yaratıklar var. Sol tarafta terk edilmiş bir bina, sağ tarafta ise karanlık bir sokak var. Nereye gitmek istersiniz? (Type 'bina' veya 'sokak')"
    );
    if (choice1 === "bina") {
    terkEdilmisBina();
    } else if (choice1 === "sokak") {
    karanlikSokak();
    } else {
    console.log(
    "Kararsızlık ölüm getirir. Enfekte yaratıklar sizi fark eder ve saldırır. Oyun bitti!"
    );
    }
    }
    function terkEdilmisBina() {
    console.log(
    "Terk edilmiş binaya giriyorsunuz. İçeride her şey sessiz, ancak bir kapının ardında bir şeyler hareket ediyor."
    );
    console.log("Ellie size endişeyle bakıyor ve sessiz kalmanızı işaret ediyor.");
    let choice2 = prompt(
    "Kapıyı açıp ne olduğunu kontrol eder misiniz, yoksa başka bir çıkış aramayı mı tercih edersiniz? (Type 'kontrol' veya 'çıkış')"
    );
    if (choice2 === "kontrol") {
    console.log(
    "Kapıyı açıyorsunuz ve içeride bir Stalker ile karşılaşıyorsunuz. Ellie hızlı bir şekilde size yardım ediyor, ancak kısıtlı merminiz olduğu için çok zorlanıyorsunuz."
    );
    let choice3 = prompt(
    "Ellie size 'Kaçalım mı yoksa savaşalım mı?' diye soruyor. Ne yaparsınız? (Type 'kaç' veya 'savaş')"
    );
    if (choice3 === "kaç") {
    console.log(
    "Zekice bir hamleyle kaçıyorsunuz ve bir sonraki güvenli noktaya ulaşıyorsunuz. Ellie, doğru kararı verdiğiniz için size teşekkür ediyor. Hayatta kaldınız!"
    );
    } else if (choice3 === "savaş") {
    console.log(
    "Savaşmaya çalışıyorsunuz, ancak cephaneniz bitiyor ve yaratık sizi alt ediyor. Ellie'nin çığlıklarıyla her şey kararıyor. Oyun bitti!"
    );
    } else {
    console.log(
    "Tereddüt ediyorsunuz ve yaratık saldırıya geçiyor. İkiniz de kurtulamıyorsunuz. Oyun bitti!"
    );
    }
    } else if (choice2 === "çıkış") {
    console.log(
    "Başka bir çıkış arıyorsunuz ve bodrum katındaki gizli bir tüneli buluyorsunuz. Bu tünel sizi güvenli bir şekilde binadan çıkarıyor. Hayatta kaldınız!"
    );
    } else {
    console.log("Tereddüt ediyorsunuz ve yaratık sizi fark ediyor. Oyun bitti!");
    }
    }
    function karanlikSokak() {
    console.log(
    "Karanlık bir sokağa giriyorsunuz. Her yer sessiz, ama duvarlarda taze kan izleri var. Birileri buradan geçmiş olmalı."
    );
    console.log("Ellie, bir çöp konteynerinde bazı erzaklar buluyor.");
    let choice2 = prompt(
    "Erzakları alıp ilerlemeye devam eder misiniz yoksa geri dönüp başka bir yol mu ararsınız? (Type 'al' veya 'geri')"
    );
    if (choice2 === "al") {
    console.log(
    "Erzakları alıyorsunuz ve sokak boyunca ilerliyorsunuz. Ancak ileride bir grup yağmacı ile karşılaşıyorsunuz."
    );
    let choice3 = prompt(
    "Yağmacılardan saklanır mısınız yoksa onlarla yüzleşir misiniz? (Type 'saklan' veya 'yüzleş')"
    );
    if (choice3 === "saklan") {
    console.log(
    "Sessizce bir arabanın arkasına saklanıyorsunuz ve yağmacıların uzaklaşmasını bekliyorsunuz. Tehlike geçiyor ve yolunuza devam ediyorsunuz. Hayatta kaldınız!"
    );
    } else if (choice3 === "yüzleş") {
    console.log(
    "Cesurca onlarla yüzleşiyorsunuz, ancak sayıca üstün oldukları için sizi alt ediyorlar. Ellie'nin çaresiz bakışlarıyla her şey sona eriyor. Oyun bitti!"
    );
    } else {
    console.log(
    "Tereddüt ettiğiniz sırada yağmacılar sizi fark ediyor ve saldırıyorlar. Oyun bitti!"
    );
    }
    } else if (choice2 === "geri") {
    console.log(
    "Geri dönmeye çalışıyorsunuz, ancak sokakta pusu kurmuş bir yaratık sizi fark ediyor. Kaçmak için yeterince hızlı olamıyorsunuz. Oyun bitti!"
    );
    } else {
    console.log("Tereddüt ediyorsunuz ve etrafınızı yaratıklar sarıyor. Oyun bitti!");
    }
    }
    // Oyunu başlat
    startGame();