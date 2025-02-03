endGame = false;

function startGame() {
	console.clear();
	console.log(
		"🚨 **ACİL DURUM**: Şirketin güvenlik sistemleri saldırıya uğradı! Hemen müdahale etmelisin!"
	);
	console.log(
		"Şirketin en iyi siber güvenlik uzmanı olarak bu krizi çözmek senin görevin."
	);
	while (!endGame) {
		let choice = prompt(
			"Ne yapacaksın?\n" +
				"(1) Şirketin sunucularına doğrudan erişim sağla\n" +
				"(2) Yeraltı hacker topluluğundan yardım iste\n" +
				"(3) Şirketin eski loglarını incele\n" +
				"(4) Şirketin finansal sistemlerini kontrol et\n" +
				"(5) Devlet istihbarat kurumlarıyla iletişime geç\n" +
				"(6) Dark Web'den bilgi satın al\n" +
				"(7) Siber suç gruplarını takip et\n" +
				"(8) Bir güvenlik açığı yarat ve saldırganı yakalamak için kullan\n" +
				"(9) İç sabotaj ihtimalini araştır\n" +
				"(0) Çıkış yap"
		);

		switch (choice) {
			case "1":
				directAccess();
				break;
			case "2":
				hackerForum();
				break;
			case "3":
				analyzeLogs();
				break;
			case "4":
				financialSecurity();
				break;
			case "5":
				contactGovernment();
				break;
			case "6":
				darkWebOperations();
				break;
			case "7":
				cyberCrimeGroups();
				break;
			case "8":
				createSecurityBait();
				break;
			case "9":
				internalSabotage();
				break;

			case "0":
				console.log(
					"🔚 Oyun sona erdi. Verdiğin kararlar şirketin geleceğini belirledi."
				);
				endGame = true;
				break;
			default:
				console.log("❌ Geçersiz seçim, tekrar dene.");
		}
	}
}

function winnerFunction(message) {
	console.log(`${message}`);
	console.log("🏆 Oyun sona erdi. Şirketin sistemini büyük ölçüde korudun!");
	endGame = true;
}

function loserFunction(message) {
	console.log(`${message}`);
	console.log("🔥 Oyun sona erdi! Başarısız oldun.");
	endGame = true;
}

function diceFunction() {
	return Math.floor(Math.random() * 6) + 1;
}

function directAccess() {
    console.log("🔥 Sunuculara erişmeye çalışırken bir güvenlik alarmı tetiklendi!");
    let choice = prompt(
        "Ne yapacaksın?\n" +
        "(1) Kimlik doğrulamasını atlatmak için bir kod yaz\n" +
        "(2) Şirket içinden bir yönetici hesabı kullan\n" +
        "(3) Sunucuya sahte güvenlik güncellemesi yükle\n" +
        "(4) Yedekleme sunucusuna yönlen"
    );

    if (choice === "1") {
        console.log("✅ Kimlik doğrulamasını başarıyla atlattın! Ancak kötü amaçlı yazılım seni fark etti.");

        let virusChoice = prompt(
            "Virüs seni fark etti, ne yapacaksın?\n" +
            "(1) Virüsü temizlemek için kod kırma algoritmalarını çalıştır\n" +
            "(2) Virüsü tersine mühendislikle (reverse engineering) analiz et\n" +
            "(3) Sistemi kapatarak zarar büyümeden durdur\n"
        );  
        if (virusChoice === "1") {
          
            darkWebOperations("🦠 Virüsü temizleyemedin ancak seni dark web'e yönlendiren bir script buldun");
        } else if (virusChoice === "2") {
  
            winnerFunction("🔎 Virüsü tersine mühendislikle çözmeye çalıştın. Kodda bir zafiyet buldun ve virüsü devre dışı bıraktın!");
        
        } else if (virusChoice === "3") {
            loserFunction("🚫 Sistemi kapattın. Saldırı durdu, fakat şirketin operasyonu da durdu. Veri kaybı veya kesinti yaşanabilir!");
        }

    } 
    else if (choice === "2") {
        console.log("👤 Bir yöneticinin hesabını kullandın; gizli yetkilerle sisteme girdin. Etik mi bilmiyorsun...");
        let ethicalChoice = prompt(
            "Ne yapacaksın?\n" +
            "(1) Sistemi kontrol etmek için yetkileri kullan\n" +
            "(2) Sistemi kontrol etmek için yetkileri kullanma ve geri çekil\n"
        );
        if (ethicalChoice === "1") {
            console.log("🕵️ Sistemdeki kritik verilere erişim sağladın, saldırıyı durdurdun!");
            diceFunction() > 3 ? winnerFunction() : ( loserFunction("🚫Yetkisiz ve izinsiz erişimden dolayı kovuldun!"));
        } else if (ethicalChoice === "2") {
            console.log("🔙 Geri çekildin veya farklı bir yola yöneldin.");
        }
    }
    else if (choice === "3") {
        diceFunction() > 3 ? winnerFunction() : loserFunction("🛠 Sahte güvenlik güncellemesiyle erişimi açtın, saldırgan bunu kısa sürede fark edebilir!");
    } 
    else {
        console.log("🔙 Geri çekildin veya farklı bir yola yöneldin.");
    }
}

// 2) Yeraltı hacker topluluğundan yardım iste
function hackerForum() {
    console.log("💀 'ShadowByte' adlı yeraltı hacker grubuna ulaştın. Ancak onlara güvenmek zor olabilir.");
    let choice = prompt(
        "Hangi teklifi yapacaksın?\n" +
        "(1) Eski devlet veri tabanına erişim sağlamayı teklif et\n" +
        "(2) Onlara Bitcoin ödeyerek exploit satın al\n" +
        "(3) Onları kandırarak sahte bilgiler ver\n" +
        "(4) Bir hacker ile birebir anlaşmaya çalış"
    );

    if (choice === "1") {
        console.log("🔓 Eski devlet veri tabanına erişim sağladın, ama bu yasa dışı bir eylem!");
        let hackerChoice = prompt("Ne yapacaksın?\n" +
            "(1) Veritabanından kritik bilgileri al\n" +
            "(2) Veritabanını silerek izleri yok et\n" +
            "(3) Veritabanına erişimi kapat\n"
        );
        if (hackerChoice === "1") {
       
            diceFunction() > 3 ? winnerFunction() : loserFunction("🔍 Kritik bilgileri aldın, ama bu yasa dışı bir eylem!");
        } else if (hackerChoice === "2") {
           
            diceFunction() > 3 ? winnerFunction() : loserFunction("🔥 Veritabanını sildin, ancak bu yasa dışı bir eylem!");
        } else {
          
            diceFunction() > 3 ? winnerFunction() : loserFunction("🚫 Veritabanına erişimi kapattın, ancak bu yasa dışı bir eylem!");
        }
    } 
    else if (choice === "2") {
        console.log("🪙 Bir miktar Bitcoin ödedin, karşılığında saldırıyı engelleyebilecek kritik bir kod aldın.");
        let bitcoinChoice = prompt("Ne yapacaksın?\n" +
            "(1) Kodu kullanarak saldırıyı engelle\n" +
            "(2) Kodu kullanmamaya karar ver\n"
        );
        if (bitcoinChoice === "1") {
        
            winnerFunction("🛡 Kodu kullanarak saldırıyı engelledin!");
        } else {
            console.log("🔥 Kodu kullanmadın, saldırı devam ediyor!");
        }
    } 
    else if (choice === "3") {
        console.log("🕵️ Hackerları kandırdın, ancak sahte bilgileri fark ederlerse seni hedef alabilirler.");
        let fakeChoice = prompt("Ne yapacaksın?\n" +
            "(1) Onları takip etmek için sahte bilgileri kullan\n" +
            "(2) İletişimi kesmek ve başka bir yol denemek\n"
        );
        if (fakeChoice === "1") {
            console.log("🕵️ Sahte bilgileri kullandın ve hackerları takip ediyorsun.");
            winnerFunction("🔍 Sisteme saldıran grubun onlar olduğunu anladın.");
        } else {
            loserFunction("🔥 Hackerlar sahte bilgileri fark etti ve seni hedef olarak belirledi.");
        }
    } else {
        console.log("👥 Birebir anlaşmaya çalıştın, ama güvenmeleri için daha fazla kanıt istiyorlar.");
        let directChoice = prompt("Ne yapacaksın?\n" +
            "(1) Onlara daha fazla bilgi ver\n" +
            "(2) Onlara bir görev ver\n"
        );
        if (directChoice === "1") {
            console.log("🤨 Daha fazla bilgi vererek onları ikna ettin.");
         
            loserFunction("🔍 Ellerindeki bilgilerle sistemi geri döndürülemez biçimde tahrip ettiler!");
        } else {
            console.log("🔥 Görev vererek onları kandırdın, ancak saldırı devam ediyor.");
        }
    }
}

// 3) Şirketin eski loglarını incele
function analyzeLogs() {
    console.log("📜 Eski logları inceliyorsun. Belki geçmiş saldırılar ipucu verir.");
    let choice = prompt(
        "Nasıl inceleyeceksin?\n" +
        "(1) Otomatik log analiz yazılımı çalıştır\n" +
        "(2) Manuel olarak eski erişim kayıtlarını tarama\n" +
        "(3) Daha eski yedek logları arşivden çıkar"
    );

    if (choice === "1") {
        console.log("💻 Otomatik analiz, 2018’de benzer bir saldırı olduğunu ve aynı IP’lerin kullanıldığını tespit etti!");
        let autoChoice = prompt("Ne yapacaksın?\n" +
            "(1) Saldırıyı engellemek için aynı koruma önlemlerini al\n" +
            "(2) Saldırıyı izlemek için aynı IP’leri engelle\n" +
            "(3) Saldırıyı engellemek için sunucuyu kapat\n" +
            "(4) Saldırıyı engellemek için güncel ama riskli bir güvenlik yaması yükle"
        );
        if (autoChoice === "1") {
            diceFunction() > 3 ? ( winnerFunction("Aynı koruma önlemlerini alarak saldırıyı engelledin")) : (loserFunction("Koruma önlemi güncel olmadığı için işe yaramadı..."));
        }
        else if (autoChoice === "2") {
            console.log("🔒 Aynı IP’leri engelledin, ancak saldırgan yeni IP’lerle devam ediyor.");
        }
        else if (autoChoice === "3") {
            loserFunction("🚫 Sunucuyu kapattın, saldırı durdu ama şirketin operasyonu da durdu!");
        }
        else {
            
            loserFunction("🔥 Güvenlik yaması yükledin, ancak yama saldırganın daha önce fark ettiği bir zafiyeti içeriyor!");
        }
    } else if (choice === "2") {
        console.log("🕵️ Manuel tarama yaparak şüpheli bir çalışanın geçmişte sisteme izinsiz giriş yaptığını buldun.");
        internalSabotage();
    } else {
        console.log("📦 Arşivde çok eski loglar var, belki de saldırı daha uzun süredir planlanıyor.");
        diceFunction() > 3 ? ( winnerFunction("Saldırının kökenini buldun ve saldırıyı engelledin!")) : (console.log("Saldırıyı engelleyemedin ama loglarda bir hacker grubunun izine rastladın!"), hackerForum());
    }
}


function physicalSecurity() {
	console.log(
		"🔎 Şirketin güvenlik kameralarını ve kart giriş kayıtlarını inceliyorsun..."
	);
	let choice = prompt(
		"Ne yapmak istersin?\n" +
			"(1) Gece vakti sunucu odasına girenleri listele\n" +
			"(2) Güvenlik kameralarının yedek kayıtlarını kontrol et\n" +
			"(3) Fiziksel erişim kartlarını iptal et"
	);

	if (choice === "1") {
		console.log("🕵️‍♂️ Gece vakti sunucu odasına giren bir çalışan tespit ettin!");
		spyInvestigation();
	} else if (choice === "2") {
		console.log(
			"📹 Yedek kayıtlarda maskeli bir kişinin sunucu raflarında işlem yaptığı görülüyor!"
		);
		spyInvestigation();
	} else {
		loserFunction(
			"🔒 Tüm kartları iptal ettin, şirkette erişim kısıtlandı; kısa süreli kaos oluştu. Görevden alındın!"
		);
	}
}




function financialSecurity() {
    console.log("💰 Şirketin muhasebe ve ödeme sistemlerini inceliyorsun...");
    let choice = prompt(
        "Ne yapmak istersin?\n" +
        "(1) Banka havalelerini kontrol et\n" +
        "(2) Maaş listelerini doğrula\n" +
        "(3) Kripto para cüzdanlarını incele\n" +
        "(4) Ana menüye dön"
    );

    if (choice === "1") {
        console.log("💵 Yüklü miktarda para, bilinmeyen bir hesaba gitmiş. Biri şirketi soyuyor olabilir!");
        
        let bankChoice = prompt(
            "Nasıl müdahale edeceksin?\n" +
            "(1) Bankayı arayıp transferi durdurmaya çalış\n" +
            "(2) Polise haber ver\n" +
            "(3) Vakit kaybetmeden sistemi kapat ve zararı önle\n" +
            "(4) Ana menüye dön"
        );

        if (bankChoice === "1") {
            console.log("🏦 Bankayı aradın, transferi dondurdun. Para kurtarıldı! Oyun sonu: Şirketi büyük kayıptan kurtardın.");
            winnerFunction();
            } else if (bankChoice === "2") {
            console.log("👮 Polise haber verdin, hesabın sahibi kısa sürede tespit edildi!");
            winnerFunction();
        } else if (bankChoice === "3") {
            console.log("🚫 Sistemi kapattın, tüm işlemler durdu");
             loserFunction
        } else {
            console.log("Ana menüye dönülüyor...");
            return;  
        }

    } else if (choice === "2") {
        console.log("🪙 Şirketin kripto cüzdanından yüksek miktarda para çıkışı var. İçeriden biri kripto hırsızlığı yapıyor olabilir!");
        
        let cryptoChoice = prompt(
            "Nasıl müdahale edeceksin?\n" +
            "(1) Cüzdanı anında dondur, şifreleri değiştir\n" +
            "(2) Blockchain üzerinden transferi izleyerek saldırganı bulmaya çalış\n" 
        
        );

        if (cryptoChoice === "1") {
            console.log("🔒 Cüzdanı dondurdun, hırsızlık durduruldu.");
        winnerFunction();
            } else if (cryptoChoice === "2") {
            console.log("🌐 Transferi izleyerek saldırganın cüzdan adresini buldun, bu adresi polise verdin. Yakalanma ihtimali yüksek!");
        winnerFunction();
        } else {
            console.log("Ana menüye dönülüyor...");
            return;
        }
    
    }
}


// Devlet istihbarat kurumlarıyla iletişime geç
function contactGovernment() {
    console.log(" Devlet kurumuna (FBI) durumu bildirip bildirmemeye karar vermelisin.");

    let choice = prompt(
        "Ne yapacaksın?\n" +
        "(1) FBI'yı ara, saldırıyı onlarla çöz\n" +
        "(2) Devlet kurumlarına güvenmiyorsan vazgeç"
    );

    if (choice === "1") {
     
        winnerFunction("🚔 FBI kısa sürede saldırganı yakaladı!");
        } else {
  
        loserFunction(" Devlet kurumlarına güvenmeyi reddettin, saldırganı yakalama şansın azaldı!");
    }
}


// Dark Web’den bilgi satın al
function darkWebOperations() {
    console.log("🕵️ Dark Web'e bağlanıyorsun... İz bırakmamaya dikkat etmelisin.");

    let choice = prompt(
        "Ne yapacaksın?\n" +
        "(1) Hacker’ın kimliğini satın al\n" +
        "(2) Fidye yazılımı satın al ve saldırıyı durdur\n" +
        "(3) Vazgeç"
    );

    if (choice === "1") {
    
        winnerFunction("🔎 Hacker’ın kimliğini satın aldın! Polise haber verdin, saldırgan yakalandı.");
    } else if (choice === "2") {
        console.log("💀 Fidye yazılımını satın alıp saldırıyı durdurdun. Yöntem tartışmalı ama sonuç net! ");
         winnerFunction("💀 Fidye yazılımını satın alıp saldırıyı durdurdun. Yöntem tartışmalı ama sonuç net! ");
    } else if (choice === "2") {
        winnerFunction("📡 Dark Web’e girmekten vazgeçtin, saldırganı bulamadın.");
    }
}

function spyInvestigation() {
	console.log("🕵️ Şirket içi casusları bulmak için iç soruşturma başlattın...");
	let choice = prompt(
		"Hangi yöntemi kullanacaksın?\n" +
			"(1) Çalışanların e-posta ve mesajlarını analiz et\n" +
			"(2) Şirket içi toplantı kayıtlarını incele\n" +
			"(3) Şüpheli çalışanları sorguya çek\n"
	);

	if (choice === "1" && choice === "2") {
		winnerFunction(
			"🕵️‍♂️ Şirket içindeki casusları açığa çıkardın ve büyük bir veri sızıntısını önledin!"
		);
	} else if (choice === "3") {
		loserFunction(
			"⚠️ Yanlış kişiyi sorguladın, şirket içinde güvensizlik oluştu! Görevden alındın!"
		);
	}
}

function cyberCrimeGroups() {
	console.log("🌍 Siber suç gruplarına dair araştırma yapıyorsun...");
	let choice = prompt(
		"Hangi grupları odak noktası alacaksın?\n" +
			"(1) Fidye yazılımı çeteleri\n" +
			"(2) Dark Web üzerinde faaliyet gösteren anonim ekipler"
	);

	if (choice === "1") {
		console.log(
			"💰 Fidye yazılımı çeteleri şirketin sunucularını kilitlemiş olabilir."
		);
		let choice2 = prompt(
			"(1) Devlet istihbarat kurumlarıyla iletişime geç\n" +
				"(2) Yeraltı hacker topluluğundan yardım iste"
		);
		if (choice2 === "1") {
			contactGovernment();
		} else if (choice2 === "2") {
			hackerForum();
		}
	} else if (choice === "2") {
		console.log(
			"💀 Dark Web’deki anonim ekipler, verileri çalarak satmaya çalışıyor. Ne yapacaksin?"
		);
		let choice2 = prompt(
			"(1) Devlet istihbarat kurumlarıyla iletişime geç\n" +
				"(2) Yeraltı hacker topluluğundan yardım iste"
		);
		if (choice2 === "1") {
			contactGovernment();
		} else if (choice2 === "2") {
			hackerForum();
		}
	}
}

function createSecurityBait() {
	console.log(
		"🎯 Kasten bir güvenlik açığı bırakıp saldırganı tuzağa düşürmeyi planlıyorsun..."
	);
	let choice = prompt(
		"Hangi yöntemi kullanacaksın?\n" +
			"(1) Sahte bir veritabanı oluştur ve iz sürme yazılımı ekle\n" +
			"(2) Hackerı 'bal küpü' sunucusuna yönlendirmek\n" +
			"(3) Tersine mühendislik yaparak saldırganın araçlarına tuzak eklemek"
	);
	if (choice === "1") {
		winnerFunction(
			"🪤 Saldırgan sahte veritabanına daldı ve kimliği açığa çıktı!"
		);
	} else if (choice === "2") {
		console.log("🍯 Bal küpü sunucusuna giren saldırgan izini bıraktı!");
		diceFunction() > 4
			? winnerFunction(
					"💥 İşinize yaramaz! Saldırgan sadece sunucuyu geçmekle kalmadı, şifrelerini de ele geçirdi!"
			  )
			: loserFunction(
					"🔐 Başarılı! Saldırgan tüm izlerini bırakıp senin sunucuna çekildi."
			  );
	} else {
		winnerFunction(
			"🔍 Saldırganın araçlarını ele geçirip kendi sistemine sızdın!"
		);
	}
}

function internalSabotage() {
	console.log(
		"🤔 Şirket içinde bir sabotaj olabileceğinden şüpheleniyorsun..."
	);
	let choice = prompt(
		"Nasıl bir yol izleyeceksin?\n" +
			"(1) Fiziksel güvenliği kontrol et\n" +
			"(2) Çalışanların maaş/ödül sistemini araştır\n" +
			"(3) Sabotaj yapabilecek kilit çalışanları yakın takibe al"
	);
	if (choice === "1") {
		physicalSecurity();
	} else if (choice === "2") {
		console.log(
			"💵 Bazı çalışanların ani maaş artışları ve primler dikkat çekiyor. Rüşvet mi var?"
		);
		spyInvestigation();
	} else if (choice === "3") {
		console.log(
			"👤 Kilit çalışanların bilgisayarlarında şüpheli kod parçaları bulundu."
		);
		spyInvestigation();
	}
}

startGame();
