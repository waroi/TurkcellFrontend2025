let choice8;
let choices=[];
let outcomes=[];
let sağlık=100;
function startGame() {
    console.log("The Last of Us: Hayatta Kalma Macerası'na Hoş Geldiniz!");
    console.log(
        "Yıl 2033.'Kordiseps' adı verilen beyne yerleşen bir mantar nüfusun yüzde 60 ına bulaşmış ve dünyayı yıkıma götürmüştür.",
        "Bulaşanlar yamyamlık eğilimi gösteren saldırgan yaratıklara dönüşür.",
        "önce medeniyet ardından devletler çöker.şehirler askeri düzenin hüküm sürdüğü küçük ülkeler olmuştur",
        "2013 yılında salgın ilk ortaya çıktığında şehirden çıkmaya çalışırken görevli bir asker tarafından vurulan kızı Sarah'ın acısını atlatamayan joel bu Öyküde hayatta kalmaya çalışmaktadır.Sarah'ın ölümü bir hikayenin bitişi ve başka birinin başlayış olacaktır"
    );
    console.log(
        "İşte böyle bir dünyada 1985 doğumlu joel ve 2019 doğumlu ellie ile bir hikaye oynayacağız."
    );
    displayHealth();
    let choice1 = prompt(
        "Hikayemiz Sarah'ın ölümünden 19 yıl sonra bostonda devam ediyor kaçakçı olarak yaşayan Joel ve ortağı tess in karşılarına bir fırsat çıkar ihtiyacı olan malzemeleri almak için 14 yaşındaki kızı şehrin dışına çıkarmalıdırlar yoksa ellerine bir şey geçmeyecektir hangisini seçersin? (Type 'kabul' veya 'red')"
    );
    if (choice1 === "kabul") {
        oyunBasladi();
    } else if (choice1 === "red") {
        baslamadanBitti();
    } else {
        console.log(
            "Kararsızlık ölüm getirir. Bu kararı vermeye çalışırken çok vakit kaybettiniz ve enfekteler sizi öldürdü. Oyun bitti!"
        );
    }
}
startGame();

function oyunBasladi() {
    console.log(
        "14 yaşında bir yetim olan ellie yi götürmeye söz veriyorsunuz.ellie biraz küstah olsa da kendi başının çaresine bakmayı bilen bir gençtir"
    );
    console.log("Yolda bir grup asker tarafından durduruldunuz ve bu kızın enfekte olduğunu öğrendiniz .Kız yarasının 3 hafta önce olduğunda ırarcı.Ne yaparsınız?");
    let choice2 = prompt(
        "Kızı öldürüp şehre dönmeyi mi tercih edersiniz yoksa askerleri öldürüp kızı buluşma yerine götürmeyi mi tercih edersiniz? (Type 'kızı öldür' veya 'asker öldür')"
    );
    choices.push(choice2);
    if (choice2 === "kızı öldür") {
        outcomes.push("Ellie'yi öldürdünüz ve şehre döndünüz.");
        console.log(
            "Ellie'ye güvenmeyip onu öldürmeyi seçtiniz ve şehre döndünüz.Bu seçimden sonra  ortağınız tess ile birlikte uzun bir ömür sürüp DOĞAL yollarla yaklaşık 20 yıl sonra hayata veda ediyorsunuz."
        );
    } else if (choice2 === "asker öldür") {
        outcomes.push("Askerleri öldürdünüz ve yolunuza devam ettiniz.");
        console.log(
            "Kızın sözlerine güvenip askerleri öldürmeyi tercih ediyorsunuz.Hep beraber buluşma noktasına doğru yolunuza devam ediyorsunuz."
        );
        askerOldur();
    } else {
        console.log("Çok uzun süre kararsız kaldınız ve askerler Ellie'yi öldürdü son bir hücumla askerleri öldürmeyi denediniz siz de öldünüz.. Oyun bitti!");
    }
}
function baslamadanBitti(){
    console.log("Kızı götürmeyi reddediyorsunuz ve ortağınız tess ile birlikte uzun bir ömür sürüp DOĞAL yollarla yaklaşık 20 yıl sonra hayata veda ediyorsunuz.")
}
function askerOldur(){
    console.log("yolunuza ilerlemeye devam ettiniz ama ellie'yi teslim alacak kişilerin öldüğünü gördünüz.Bu sırada da ..");
    let choice3=prompt("ortağın tess ağır yaralandı son isteği kargoyu Ateşböcekleri'ne teslim etmen .Ne yaparsın?(type: götür veya götürme)");
    choices.push(choice3);
    if(choice3==="götürme"){
        outcomes.push("Ellie yi götürmedin ve dönüş yolunda öldürüldünüz.");
        console.log("görevini yeterince yaptığını düşünerek kızı yeni teslimat noktasına götürmemeye karar verdin.Kızı orada bıraktın ve öldü sende şehre girmeye çalışırken askerler tarafından öldürüldün .Oyun Bitti!");
    }
    else if(choice3==="götür"){
        outcomes.push("Ellie'yi götürmeye karar verip yoluna devam ettin.");
        console.log("Kızı burada bırakamayacağına karar verdin ve yola çıktınız.Bu yolculuk sırasında kardeşin tommy'e uğrayıp yeni rotanızı öğrenmeye karar verdiniz.");
        bill();
    }
}
function displayHealth() {
    console.log(`Sağlığınız:${sağlık}%`);
    let doluKalp=sağlık/10;
    let boşKalp=10-doluKalp;
    console.log(`Sağlık: [${'♥'.repeat(doluKalp)}${'♡'.repeat(boşKalp)}]`);
}
function updateHealth(değer) {
    sağlık += değer;
    if (sağlık > 100) sağlık = 100; 
    if (sağlık <= 0) {
        sağlık = 0;
        console.log("Sağlığınız tükendi. Oyun bitti!");
        alert("Sağlığınız tükendi. Oyun bitti!"); 
        return; 
    }
    displayHealth();
}
function bill() {
    console.log("Yolculuğunuz sırasında sana borcu olan arkadaşın Bill'e uğradın.");
    let choice4 = prompt("Ellie buradan kitap ve yiyecek çalmaya çalışırken Bill'e yakalandı. Bill hem araba tamirine devam etmek hem de Ellie'yi affetmek için Ellie'nin bir bilmece çözmesini istiyor. Ne yapacaksın? (type: Kabul et veya kabul etme)");
    choices.push(choice4);

    if (choice4 === "kabul etme") {
        outcomes.push("Arabasız yola devam ettiniz ve öldürüldünüz.");
        console.log("Bill arabayı tamir etmekten vazgeçti ve sizi kovdu. Tommy'e ulaşmaya çalışırken yol magandaları tarafından öldürüldünüz. Oyun bitti...");
        updateHealth(-100);
    } else if (choice4 === "kabul et") {
        outcomes.push("Bill'in bilmecesini sormasını kabul ettin.");
        console.log("Bill bilmecesini sordu. Bilmece şöyle:",
            "What did the green grape say to the purple grape?");

        let deneme = 5;
        let çözdüm = false;

        while (deneme > 0 && çözdüm === false ) {
            let choice5 = prompt(`Cevabınız nedir? (${deneme} hakkınız kaldı!!!)`);
            choices.push(choice5);

            if (choice5 === "breath you idiot") {
                outcomes.push("Bilmecenizi doğru bilip yolunuza araba ile devam ettiniz.");
                console.log("Tebrikler doğru bildiniz. Bill size bir araba verdi ve yolunuza onunla devam ettiniz.");
                çözdüm = true
                araba();
                return;
            } else {
                outcomes.push("Bilmeceye yanlış cevap verdiniz.");
                console.log("Yanlış cevap. Bir hakkınızı kaybettiniz.");
                updateHealth(-20); 
                deneme--; 
            }
        }
        if (!çözdüm) {
            outcomes.push("Bilmeceyi çözemediniz ve arabanız olmadığı için yolda öldürüldünüz.");
            console.log("Bilmeceyi çözemediniz. Bill araba tamirinden vazgeçti ve yolunuza yaya devam ettiniz. Tommy'e ulaşmaya çalışırken yol magandaları tarafından öldürüldünüz. Oyun bitti...");
            updateHealth(-100); 
        }
    }
}
function araba(){
    console.log("Yolculuğunuza ellie'nin pek komik olmayan şakaları ve çaldığı kitapları okumasıyla devam ediyorsunuz.");
    let choice6=prompt("Arabayla yolunuza devam ederken karşınıza yaralı bir kişi çıktı ve arabayı durdurmanızı istiyor ne yaparsınız?(type:dur veya durma)");
    choices.push(choice6);
    if(choice6==="dur"){
        outcomes.push("Durdunuz ve yol magandaları tarafından öldürüldünüz.");
        console.log("arabayı durdurmayı seçtiniz.Karşınıza çıkan kişinin aslında yaralı olmadığını ve bir maganda olduğunu gördünüz.Sizi zorla arabadan indirip öldürdüler.Oyun bitti!");
    }
    else if(choice6==="durma"){
        outcomes.push("Durmadınız ve yol magandalarının elinden kaçtınız.");
        console.log("Arabayı durdurmamayı seçtiniz.Karşınıza çıkan kişi aslında yaralı değildi ve arabanızı çalmaya çalışıyordu.Grubunun geri kalanı kaza yapmanıza neden oldu.Ama oradan sağ salim kaçmayı başardınız.Yolunuza yaya devam ediyorsunuz.");
        sam();
    }
}
function sam(){
    console.log("yolunuza devam ederken 2 kardeşle karşılaştınız.Sam ve henry.");
    let choice7=prompt("yoluna onlarla devam edecek misin ?(type:evet veya hayır)");
    choices.push(choice7);
    if(choice7==="hayır"){
        outcomes.push("Tek başınıza şehirden çıkamadınız ve enfekteler sizi öldürdü.");
        console.log("yolunuza devam ederken enekteler yüzünden öldünüz.Oyun bitti!");
    }
    else if(choice7==="evet"){
        outcomes.push("Sam ve henry şehirden güvenlice çıkmanıza yardım etti..");
        console.log("yolunuza onlarla devam ettiniz ve sizi bu enfekte dolu şehirden güvenli bir yolla çıkardılar.");
        soyle();
    }
}
function soyle(){
    console.log("Yolunuza ilerlerken sam size enfekte olduğunu söylüyor.Sen de immun olduğun için onu iyileştirmeyi deniyorsun.");
    choice8=prompt("Bu deneyimin başarısızlıkla sonuçlanıyor ve sam ölüyor.Buna dayanamayan henry de kendini vuruyor.Bu olaylar sonucunda joel'e sam'i iyileştirmeye çalıştığını söylecek misin?(type evet veya hayır)");
    choices.push(choice8);
    if(choice8==="hayır"){
        outcomes.push("Joele sami iyileştirmeye çalıştığınızı söylemediniz.");
        console.log("Şimdilik yolunuza devam ediyorsunuz.(ileride bir sonucu olacak)");
        tommy();
    }
    else if(choice8==="evet"){
        outcomes.push("Joele sami iyileştirmeye çalıştığınızı söylediniz.");
        console.log("Şimdilik yolunuza devam ediyorsunuz.(ileride bir sonucu olacak)");
        tommy();
    }
}
function tommy(){
    console.log("Vakit ilerledi mevsim sonbahar oldu ve biz sonunda kardeşimiz Tommy'e ulaştık ve karışım Maria ile tanıştık");
    let choice9=prompt("Artık bu yolculuktan yorulduğunu hisseden joel ellie'yi güvende tutamayacağından korkmaktadır.Bu yüzden tommyden ellie'yi bir sonraki destinasyona götürmesini istemeyi düşünmektedir.Ne yapmalı?(type:iste veya isteme)");
    choices.push(choice9);
    if(choice9==="iste"){
        outcomes.push("Joel tommy den ellie yi götürmesini istedi ve yoda ikisi de öldü.");
        console.log("tommy bu teklifi kabul etti ve ellie ile yola çıktılar.İkisi de pusuya düşürüldü ve öldürüldü.joel bu vicdan azabıyla intihar etti.Oyun bitti!");
    }else if(choice9==="isteme"){
        outcomes.push("Joeltommy den ellie yi götürmesini istemedi ve yolunuza beraber devam ettiniz..");
        console.log("joel artık duygusal ba kurduğu bu kızıkardeşi dahi olsa kimseye emanet edemeyeceğini keşfetti.Ve Tommyden gerekli bilgileri aldıktan sonra yola çıkıp doğu Collaroda Üniversitesine doğru yola çıktınız.");
        savas();
    }
}
function savas(){
    console.log("Üniversiteye vardınız ve çoktan enfektelerle dolu olduğunu gördünüz.Dinlediğiniz bir ses kaydından yeni rotanızın aziz mary hastanesi olması gerketiğine karar verdiniz.");
    let choice10=prompt("Üniversiteden ayrılmaya hazırlanırken bir takım haydutlarla karşılaştınız.Savaşmalı mısınız kaçmalı mısınız(type savaş veya kaç)");
    choices.push(choice10);
    if(choice10==="kaç"){
        outcomes.push("Kaçmaya çalıştınız.Haydutlar sizi öldürdü.");
        console.log("haydutlar çoktan etrafınızı çevirmişti.Kaçmaya çalışırken öldürüldünüz.Oyun bitti!");
        //console.log("başarıyla kaçtınız ve tommynin yanına döndünüz.beraber güzel bir hayat yaşadınız.");
    }
    else if (choice10==="savaş"){
        outcomes.push("Savaştınız ve kazandınız ama joel ağır yaralandı.");
        console.log("savaştınız ve kazandınız ama joel yüksek br yerden düşüp ağır yaralandı.");
        yara();
    }
}
function yara(){
    console.log("Elli joel ile  ilgilenmeye çalışırken iki adamla karşılaşır :david ve James .ve onlardan joel için ilaç ister" );
    let choice11=prompt("ellie bu kararını joele anlatmalı mı:(type evet veya hayır)");
    choices.push(choice11);
    if(choice11==="hayır"){
        outcomes.push("Ellie joele davidden bahsetmedi ve yamyam bir grup tarafından öldürüldü.");
        console.log("joel ilaçlar sayesinde kendine gelmeye başladı ama ellieyi ne kadar arasa da bulamadı.Bu kış ayında bir kar fırtınasında hayatını kaybetti.");
    }else if(choice11==="evet"){
        outcomes.push("Ellie joele yamyam gruptan bahsetti ve kurtuldu");
        console.log("İyileşmeye başlayan joel ellie'yi kurtarmak için öldürmesi gerekenleri öldürür , hayatta kalanları işkence yaparak ellie'yi kurtarırjoel ellienin anlattığı bilgileri hayal meyal hatırlıyordu bu sayede ellieyi yamyam grubun elinden kurtarabildi.");
        karar();
    }
}
function karar(){
    console.log("aylar sonra yeniden bahar geldiğinde ellie ve Joel son destinasyonları olan Aziz mary hastanesine ulaşmışlardır");
    let choice12=prompt("joel son destinasyonlarına yaklaşırken ellie ye geri dönüp tommynin yanında huzurlu bir hayat yaşamayı teklif etti.Ellie olarak cevabınız nedir?(type evet veya hayır)");
    choices.push(choice12);
    if (choice12==="hayır"){
        outcomes.push("tommy'e dönmeyi reddettiniz.");
        console.log("Hastaneye doğru yol aldınız");
        hastane();
    }
    else if(choice12==="evet"){
        outcomes.push("tommy'e dönmeyi kabul ettiniz.");
        console.log("Bir otorite istiyor diye bir kızını daha kaybetmeyi göze alamayan Joël ve eli mutlu bir yaşam sürerler ve Juel doğal yollarla hayatını kaybeder");
        console.log("tommynin yanına dönüp mutlu bir hayat sürdünüz.Joel öleiye kadar ellie ye kızı gibi davranmaya devam etti.Araları hiç bozulmadı.Oyun bitti!");
    }

}
function hastane(){
    console.log("sonunda aziz mary hastanesine ulaştınız.Görevliler ellie nin ameliyata hazırlandığını ve her şeyin normal olduğunu söyleyip hastaneden ayrılmamızı istediler.");
    let choice13=prompt("İçinizde bir kuşku var ne yapmanız gerektiğini bilmiyorsunuz.Ne yapmalısınız?(type ayrıl veya ayrılma)");
    choices.push(choice13);
    if(choice13==="ayrıl"){
        outcomes.push("Hastaneden ayrılıp tommy nin yanına döndünüz.");
        console.log("Ellienin bunu istediğini düşünerek veda bile edemeden hastaneden ayrıldınız .tommynin yanına döndünüz.ömrünüzün sonuna kadar doğru bir karar verip vermediğinizi düşünüp durdunuz.Oyun bitti!!!");
    }else if(choice13==="ayrılma"){
        outcomes.push("Hastaneden ayrılmayıp ellie yi görmek istediğinize karar verdiniz..");
        console.log("Hastaneden ayrılmamaya karar verdiniz.Ellie'yi görmeye karar verdiniz.ve yüzünüze silahlar doğrultuldu.");
        if(choice8==="evet"){
            outcomes.push("Sam'i iyileştirmeye çalıştığınızı söylemeniz ikinizin de hayatını kurtardı..");
            console.log("aylar önce ellienin size söylediği bir şey aklınıza geldi.Kan işe yaramamıştı ellie den aşı nasıl üretilecekti?");
            console.log("Bu düşünceden sonra ellienin ölüceğini düşünüp onu mutlaka görmek istediğinize karar verdiniz.Ve yolunuza çıkan her şeyi ve herkesi öldürerek ellieye ulaştınız.Baygın olan ellie ile beraber bir araba ile hastaneden ayrıldınız");
            son();
        }
        else if(choice8==="hayır"){
            outcomes.push("sam'i iyileştirmeye çalıştığınızı söylemediğiniz için ikiniz de öldünüz..");
            console.log("silahların size doğrultulmasıyla beraber şüpheleriniz doğrulandı.");
            console.log("ellieye ulaşmaya çalışırken ateş böcekleri tarafından öldürüldünüz.Ellie'nin fedakarlığı sayesinde aşı üretildi ama çok sınırlı sayıdaydı.Bu yüzden dünya hala aynı karanlığında kalmaya devam etti.Oyun bitti!");
        }
    }
}
function son(){
    console.log("her şey yolunda.ellie ye her şeyi anlattınız ve anlayışla karşıladı.");
    let choice14=prompt("tommy e varmak üzeresiniz.Yolunuz ikiye ayrılıyor.Nehirden mi geçmelisiniz yoksa dağlık yoldan mı?(type nehir veya yol)");
    choices.push(choice14);
    if (choice14==="nehir"){
        outcomes.push("Nehirden geçmeye çalıştınız ve ellie yüzme bilmediği için boğuldu");
        console.log("ellie yüzme bilmiyor bu yüzden nehirde akıntıya kapıldı ve boğuldu joel onu kurtaramadı ve tommy nin yanına döndü.kısa bir süre sonra intihar etti.oyun bitti!");
    }else if(choice14==="yol"){
        outcomes.push("Ellie'nin yüzme bilmediğini hatırlayıp doğru yolu seçtiniz.");
        console.log("sıkıntısız bir şekilde tommynin yanına vardınız");
        console.log("Bir otorite istiyor diye bir kızını daha kaybetmeyi göze alamayan Joel ve elli mutlu bir yaşam sürerler ve Joel DOĞAL yollarla hayatını kaybeder.Oyun bitti!");
    }
}
function displayChoicesAndOutcomes() {
    console.log("*************************Oyun boyunca yaptığınız seçimler ve sonuçları:*********************************");
    for (let i = 0; i < choices.length; i++) {
        console.log(`Seçim ${i + 1}: ${choices[i]} ------- Sonuç: ${outcomes[i]}`);
    }
}
displayChoicesAndOutcomes();displayHealth();
