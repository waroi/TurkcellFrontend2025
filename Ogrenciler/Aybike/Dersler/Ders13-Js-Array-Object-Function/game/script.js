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
	console.log(
		"🔥 Sunuculara erişmeye çalışırken bir güvenlik alarmı tetiklendi!"
	);
	let choice = prompt(
		"Ne yapacaksın?\n" +
			"(1) Kimlik doğrulamasını atlatmak için bir kod yaz\n" +
			"(2) Şirket içinden bir yönetici hesabı kullan\n" +
			"(3) Sunucuya sahte güvenlik güncellemesi yükle\n" +
			"(5) Yedekleme sunucusuna yönlen"
	);

	if (choice === "1") {
		console.log(
			"✅ Kimlik doğrulamasını başarıyla atlattın! Ancak kötü amaçlı yazılım seni fark etti."
		);

		let virusChoice = prompt(
			"Virüs seni fark etti, ne yapacaksın?\n" +
				"(1) Virüsü temizlemek için kod kırma algoritmalarını çalıştır\n" +
				"(2) Virüsü tersine mühendislikle (reverse engineering) analiz et\n" +
				"(3) Honeypot/tuzak kurup virüsü izlemeye devam et\n" +
				"(4) Sistemi kapatarak zarar büyümeden durdur\n"
		);
		if (virusChoice === "1") {
			winnerFunction();
		} else if (virusChoice === "2") {
			console.log(
				"🔎 Virüsü tersine mühendislikle çözmeye çalıştın. Kodda bir zafiyet buldun ve virüsü devre dışı bıraktın!"
			);
			winnerFunction();
		} else if (virusChoice === "3") {
			console.log(
				"🍯 Bir tuzak kurdun, saldırganın hareketlerini izleyerek daha fazla bilgi topluyorsun. Risk devam ediyor ama büyük resme ulaşabilirsin."
			);
		} else if (virusChoice === "4") {
			console.log(
				"🚫 Sistemi kapattın. Saldırı durdu, fakat şirketin operasyonu da durdu. Veri kaybı veya kesinti yaşanabilir!"
			);
			loserFunction();
		}
	} else if (choice === "2") {
		console.log(
			"👤 Bir yöneticinin hesabını kullandın; gizli yetkilerle sisteme girdin. Etik mi bilmiyorsun..."
		);
	} else if (choice === "4") {
		console.log(
			"🛠 Sahte güvenlik güncellemesiyle erişimi açtın, saldırgan bunu kısa sürede fark edebilir!"
		);
		diceFunction() > 3 ? winnerFunction() : loserFunction();
	} else {
		console.log("🔙 Geri çekildin veya farklı bir yola yöneldin.");
	}
}

function hackerForum() {
	console.log(
		"💀 'ShadowByte' adlı yeraltı hacker grubuna ulaştın. Ancak onlara güvenmek zor olabilir."
	);
	let choice = prompt(
		"Hangi teklifi yapacaksın?\n" +
			"(1) Eski devlet veri tabanına erişim sağlamayı teklif et\n" +
			"(2) Onlara Bitcoin ödeyerek exploit satın al\n" +
			"(3) Onları kandırarak sahte bilgiler ver\n" +
			"(4) Bir hacker ile birebir anlaşmaya çalış"
	);

	if (choice === "1") {
		console.log(
			"💾 Hackerlar sana bir exploit verdi, ama devlet senin peşine düşebilir!"
		);
	} else if (choice === "2") {
		console.log(
			"🪙 Bir miktar Bitcoin ödedin, karşılığında saldırıyı engelleyebilecek kritik bir kod aldın."
		);
	} else if (choice === "3") {
		console.log(
			"🕵️ Hackerları kandırdın, ancak sahte bilgileri fark ederlerse seni hedef alabilirler."
		);
	} else {
		console.log(
			"👥 Birebir anlaşmaya çalıştın, ama güvenmeleri için daha fazla kanıt istiyorlar."
		);
	}
}

function analyzeLogs() {
	console.log(
		"📜 Eski logları inceliyorsun. Belki geçmiş saldırılar ipucu verir."
	);
	let choice = prompt(
		"Nasıl inceleyeceksin?\n" +
			"(1) Otomatik log analiz yazılımı çalıştır\n" +
			"(2) Manuel olarak eski erişim kayıtlarını tarama\n" +
			"(3) Daha eski yedek logları arşivden çıkar"
	);

	if (choice === "1") {
		console.log(
			"💻 Otomatik analiz, 2018’de benzer bir saldırı olduğunu ve aynı IP’lerin kullanıldığını tespit etti!"
		);
	} else if (choice === "2") {
		console.log(
			"🕵️ Manuel tarama yaparak şüpheli bir çalışanın geçmişte sisteme izinsiz giriş yaptığını buldun."
		);
		internalSabotage();
	} else {
		console.log(
			"📦 Arşivde çok eski loglar var, belki de saldırı daha uzun süredir planlanıyor."
		);
	}
}

function informIT() {
	console.log(
		"👨‍💻 IT ekibine durumu bildirdin, ancak içlerinde saldırıyla bağlantılı biri olabilir."
	);
	let choice = prompt(
		"IT ekibi nasıl tepki veriyor?\n" +
			"(1) Tüm sistemi kapatarak saldırıyı durdurmak istiyorlar\n" +
			"(2) Saldırganı izlemek için sisteme tuzak eklemeyi öneriyorlar\n" +
			"(3) Seni suçlayan bir IT uzmanı var!"
	);

	if (choice === "1") {
		console.log(
			"🚫 Sistemi kapatmak veri kaybına yol açabilir, ama saldırı durabilir de."
		);
	} else if (choice === "2") {
		console.log("🪤 Tuzağa düşürülen saldırganın izlerini takip edebilirsin!");
	} else {
		console.log("⚠️ IT uzmanı seni suçladı, belki aralarında bir hain var!");
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

function networkAnalysis() {
	console.log(
		"🌐 Ağ trafiğinde anormal veri akışını tespit etmeye çalışıyorsun..."
	);
	let choice = prompt(
		"Ne yapacaksın?\n" +
			"(1) Firewall loglarını incele\n" +
			"(2) VPN bağlantılarının kaynağını ara\n" +
			"(3) Şüpheli IP adreslerini engelle\n" +
			"(4) Tüm kullanıcıların bağlantılarını kes"
	);

	if (choice === "1") {
		console.log(
			"🔥 Firewall loglarında anormal şifreli trafik tespit ettin. Belki saldırının kaynağını bulursun."
		);
	} else if (choice === "3") {
		console.log(
			"📍 Bazı IP’leri engelledin ama saldırı yeni IP’lerle devam ediyor."
		);
	} else {
		console.log("🔌 Ağ bağlantılarını kestin, şirketin operasyonu durdu!");
	}
}

function employeeAccounts() {
	console.log(
		"🔑 Çalışan hesaplarını analiz ediyorsun. Belki birisi yetkilerini kötüye kullanıyor."
	);
	let choice = prompt(
		"Ne yapacaksın?\n" +
			"(1) Yetkili hesapların hareketlerini kontrol et\n" +
			"(2) Şifre değiştirme taleplerini gözden geçir\n" +
			"(3) E-posta trafiğini analiz et"
	);

	if (choice === "1") {
		console.log(
			"⚠️ Bir yönetici hesabının çok fazla dosyaya eriştiğini gördün. Bu hesap ele geçirilmiş olabilir!"
		);
		financialSecurity();
	} else if (choice === "3") {
		console.log(
			"✉️ E-posta trafiğinde phishing amaçlı dış adresler tespit ettin."
		);
		cyberCrimeGroups();
	} else {
		console.log("🔎 Şifre değiştirme taleplerinde bir anormallik bulunamadı.");
	}
}

function financialSecurity() {
	console.log("💰 Şirketin muhasebe ve ödeme sistemlerini inceliyorsun...");
	let choice = prompt(
		"Ne yapmak istersin?\n" +
			"(1) Banka havalelerini kontrol et\n" +
			"(2) Maaş listelerini doğrula\n" +
			"(3) Kripto para cüzdanlarını incele"
	);

	if (choice === "1") {
		console.log(
			"💵 Yüklü miktarda para, bilinmeyen bir hesaba gitmiş. Biri şirketi soyuyor olabilir!"
		);
	} else if (choice === "3") {
		console.log(
			"🪙 Şirketin kripto cüzdanından yüksek miktarda para çıkışı var. İçeriden biri kripto hırsızlığı yapıyor olabilir!"
		);
	} else {
		console.log(
			"📊 Finansal işlemlerde küçük tutarsızlıklar dışında bir şey yok."
		);
	}
}

function contactGovernment() {
	console.log(
		"🏛️ Devlet kurumlarına durumu bildiriyorsun. Ama bu riskli olabilir; seni de izleyebilirler."
	);
	let choice = prompt(
		"Hangi kurumla iletişime geçeceksin?\n" +
			"(1) FBI Siber Suçlar Birimi\n" +
			"(2) Ulusal Güvenlik Ajansı (NSA)\n" +
			"(3) Interpol Siber Güvenlik Birimi\n" +
			"(4) Devlet kurumlarına güvenmiyorsan vazgeç"
	);

	if (choice === "1") {
		console.log(
			"🚔 FBI olaya el koydu, ancak senin hareketlerini de izliyorlar!"
		);
	} else if (choice === "2") {
		console.log(
			"🔎 NSA, saldırının kökünü bulmak için geniş çaplı dinleme yapıyor. Mahremiyet mi?"
		);
	} else if (choice === "3") {
		console.log(
			"🌍 Interpol, saldırının uluslararası boyutta olduğunu keşfetti. Büyük bir hacker grubu işin içinde!"
		);
	} else {
		console.log(
			"👀 Devlet kurumlarına güvenmeyi reddettin. Belki kendi başına çözebilirsin."
		);
	}
}

function darkWebOperations() {
	console.log(
		"🕵️ Dark Web'e bağlanıyorsun... İz bırakmamaya dikkat etmelisin."
	);
	let choice = prompt(
		"Ne satın alacaksın?\n" +
			"(1) Şirketine saldıran hacker'ın kimliği\n" +
			"(2) Bir fidye yazılımı satın al ve saldırıyı tersine çevir\n" +
			"(3) Gizli istihbarat bilgileri al\n" +
			"(4) Dark Web'e girmeden çıkış yap"
	);

	if (choice === "1") {
		console.log("🔎 Hacker’ın kimliğini buldun! Şimdi onu takip edebilirsin.");
	} else if (choice === "2") {
		console.log("💀 Fidye yazılımı satın aldın! Bunu ne amaçla kullanacaksın?");
	} else {
		console.log(
			"📡 Dark Web’e girmeden çıktın, belki daha güvenli bir yol bulursun."
		);
	}
}

function aiAnalysis() {
	console.log(
		"🤖 Yapay zeka sistemini başlatıyorsun, bu saldırının izini sürmekte yardımcı olabilir."
	);
	let choice = prompt(
		"Yapay zekayı nasıl kullanacaksın?\n" +
			"(1) Hacker'ın saldırı modelini analiz et\n" +
			"(2) Otomatik savunma sistemi kur\n" +
			"(3) Yapay zeka tabanlı bir güvenlik duvarına yönlendir"
	);

	if (choice === "1") {
		console.log("🧠 Saldırının bir iç sabotaj olduğunu tespit ettin!");
	} else if (choice === "2") {
		console.log(
			"⚔️ Otomatik savunma devrede, fakat hacker saldırıyı güçlendiriyor!"
		);
	} else {
		console.log("🛡 Yapay zeka tabanlı güvenlik duvarı saldırıyı yavaşlatıyor.");
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
