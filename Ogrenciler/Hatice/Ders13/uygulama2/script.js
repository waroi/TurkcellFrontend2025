// Kayıp Şehir: Zamanın Laneti
function startGame() {
    console.log("Kayıp Şehir: Zamanın Laneti'ne Hoş Geldiniz!");
    console.log(
    "Derin bir ormanda kayboldunuz. Elinizdeki eski bir harita, efsanevi kayıp şehir Zanaris'e giden yolu gösteriyor."
    );
    console.log(
    "Bu şehir, zamanın lanetini taşıyor ve sadece en cesur ruhlar buraya ulaşabilir."
    );
    let choice1 = prompt(
    "Üç yoldan birini seçmelisiniz: Sisli Patika, Gölge Yolu ya da Gizemli Nehir. (Type 'patika', 'yol' veya 'nehir')"
    );
    if (choice1 === "patika") {
    sisliPatika();
    } else if (choice1 === "yol") {
    golgeYolu();
    } else if (choice1 === "nehir") {
    gizemliNehir();
    } else {
    console.log("Kararsızlık sizi ele geçirir ve sonsuza kadar kaybolursunuz. Oyun bitti!");
    }
    }
    function sisliPatika() {
    console.log("Sisli Patika'ya adım attınız. Görüşünüz sınırlı ve bir huzursuzluk hissediyorsunuz.");
    console.log(
    "İleride bir kulübeden titrek bir ışık yayılıyor. İçeriden bir ses sizi çağırıyor."
    );
    let choice2 = prompt(
    "Kulübeye GİRİŞ yapacak mısınız yoksa SİSİN içinde devam mı edeceksiniz? (Type 'giriş' veya 'devam')"
    );
    if (choice2 === "giriş") {
    console.log(
    "Kulübede yaşlı bir bilgeyle karşılaşıyorsunuz. Size güvenli bir yol gösteriyor ama bir bulmaca çözmenizi istiyor."
    );
    let choice3 = prompt(
    "Bulmacayı çözmeyi DENEYİN ya da reddedip yolunuza DEVAM edin. (Type 'deneyin' veya 'devam')"
    );
    if (choice3 === "deneyin") {
    console.log(
    "Bulmacayı başarıyla çözüyorsunuz. Bilge size güvenli bir çıkış yolu gösteriyor ve bir büyülü harita hediye ediyor. Kazandınız!"
    );
    } else if (choice3 === "devam") {
    console.log(
    "Bilgeyi reddediyorsunuz ve yolunuza devam ediyorsunuz. Ancak sisin içinde bir yaratık size saldırıyor. Oyun bitti!"
    );
    } else {
    console.log("Hata yapıyorsunuz ve ormanda kayboluyorsunuz. Oyun bitti!");
    }
    } else if (choice2 === "devam") {
    console.log(
    "Sisin içinde yürümeye devam ediyorsunuz. Ancak sisin içinde garip gölgeler beliriyor."
    );
    let choice3 = prompt(
    "Gölgelerden KAÇAR mısınız yoksa onlarla YÜZLEŞİR misiniz? (Type 'kaç' veya 'yüzleş')"
    );
    if (choice3 === "kaç") {
    console.log(
    "Gölgelerden kaçmayı başarıyorsunuz ve güvenli bir şekilde patikadan çıkıyorsunuz. Şimdi yeni bir yola devam edebilirsiniz. Kazandınız!"
    );
    } else if (choice3 === "yüzleş") {
    console.log(
    "Gölgelerle yüzleşiyorsunuz ama onların birer hayalet olduğunu fark ediyorsunuz. Onların laneti sizi ele geçiriyor. Oyun bitti!"
    );
    } else {
    console.log("Kararsızlık sizi ele geçiriyor ve sisin içinde kayboluyorsunuz. Oyun bitti!");
    }
    } else {
    console.log("Kararsız kalıyorsunuz ve sisin sizi yutmasına izin veriyorsunuz. Oyun bitti!");
    }
    }
    function golgeYolu() {
    console.log("Gölge Yolu'na giriyorsunuz. Yol karanlık ve ürkütücü.");
    console.log(
    "Birden etrafınızı garip yaratıklar sarıyor. Onlar açgözlü ruhlar."
    );
    let choice2 = prompt(
    "Yaratıklarla SAVAŞIR mısınız yoksa onlara değerli bir eşya sunup BAŞKA BİR YOL arar mısınız? (Type 'savaş' veya 'sun')"
    );
    if (choice2 === "savaş") {
    console.log(
    "Yaratıklarla savaşıyorsunuz ama sayıları çok fazla. Ne yazık ki kaybediyorsunuz. Oyun bitti!"
    );
    } else if (choice2 === "sun") {
    console.log(
    "Onlara değerli bir eşyanızı veriyorsunuz ve onlar size yolu açıyor. Güvenle Gölge Yolu'nu geçiyorsunuz. Kazandınız!"
    );
    } else {
    console.log("Yaratıklar kararsızlığınızı fark edip sizi ele geçiriyor. Oyun bitti!");
    }
    }
    function gizemliNehir() {
    console.log(
    "Gizemli Nehir'in kenarına geldiniz. Suyun altında bir varlığın sizi izlediğini hissediyorsunuz."
    );
    console.log(
    "Nehir kenarında eski bir kayık var. Ancak kayık garip bir şekilde sallanıyor."
    );
    let choice2 = prompt(
    "Kayığa BİNİP nehri geçmeyi mi deneyeceksiniz yoksa nehir boyunca YÜRÜYECEK misiniz? (Type 'bin' veya 'yürü')"
    );
    if (choice2 === "bin") {
    console.log(
    "Kayığa biniyorsunuz ama suyun altından devasa bir yılan çıkıyor ve sizi kayığa alıkoyuyor. Oyun bitti!"
    );
    } else if (choice2 === "yürü") {
    console.log(
    "Nehir boyunca yürüyorsunuz ve bir köprü buluyorsunuz. Güvenli bir şekilde nehri geçiyorsunuz. Kazandınız!"
    );
    } else {
    console.log("Nehir kenarında beklerken karanlık sular sizi içine çekiyor. Oyun bitti!");
    }
    }
    // Oyunu başlat
    startGame();