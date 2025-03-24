const cars = {
  cars:[
  {
    "carId":"1",
    "isRented": false,
    "model": "Model S",
    "productionYear": 2023,
    "brand": "Tesla",
    "rentValue": 5000,
    "rentedBy":"",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1200px-2018_Tesla_Model_S_75D.jpg",
    "description": "Tesla Model S, elektrikli araç dünyasında devrim yaratan bir modeldir. Uzun menzili ve yüksek performansı ile dikkat çeker. İç tasarımı minimalist olup, büyük dokunmatik ekranı ile teknoloji harikasıdır. Otonom sürüş özellikleri sayesinde geleceğin otomobil teknolojisini bugünden sunar. Sıfır emisyonlu olması çevre dostu bir sürüş deneyimi sağlar."
  },
  {
    "carId":"2",
    "isRented": false,
    "model": "Civic",
    "productionYear": 2021,
    "brand": "Honda",
    "rentValue": 7500,
    "rentedBy":"",
    "imageUrl": "https://cdn.motor1.com/images/mgl/rv9P9/s3/2022-honda-civic-prototype.jpg",
    "description": "Honda Civic, yıllardır güvenilirlik ve dayanıklılık konusunda kendini kanıtlamış bir modeldir. Yakıt ekonomisi ile hem şehir içi hem de uzun yolculuklar için idealdir. Modern tasarımı ve sportif hatları ile genç sürücülerin gözdesidir. Geniş iç hacmi ve konforlu sürüşü, aileler için de cazip bir seçenek sunar. Güvenlik donanımları sayesinde sürücüsüne ekstra koruma sağlar."
  },
  {
    "carId":"3",
    "isRented": false,
    "model": "Corolla",
    "productionYear": 2022,
    "brand": "Toyota",
    "rentValue": 6000,
    "rentedBy":"",
    "imageUrl": "https://www.webtekno.com/images/editor/default/0003/68/0c846d7641fbfd5c95980fde254b88655aca7820.jpeg",
    "description": "Toyota Corolla, dünyanın en çok satan sedan modellerinden biridir. Yakıt verimliliği ve sağlamlığı ile uzun ömürlü bir kullanım sunar. Geniş bagaj hacmi, aileler ve sık seyahat edenler için idealdir. Güvenlik donanımları arasında adaptif hız sabitleme ve şerit takip sistemi bulunur. Şık ve modern tasarımı ile hem genç hem de yaşlı sürücülere hitap eder."
  },
  {
    "carId":"4",
    "isRented": true,
    "model": "3 Series",
    "productionYear": 2020,
    "brand": "BMW",
    "rentValue": 4000,
    "rentedBy":"",
    "imageUrl": "https://cdn.motor1.com/images/mgl/jlwrMo/s1/novo-bmw-serie-3-2027---projecao.jpg",
    "description": "BMW 3 Serisi, sportif sürüş deneyimi sunan prestijli bir otomobildir. Dinamik motor seçenekleri ile hem şehir içi hem de uzun yolda üst düzey performans sağlar. İç mekanda kullanılan malzemeler premium bir his sunar. Gelişmiş sürüş destek sistemleri, güvenli ve konforlu bir yolculuk imkanı tanır. Şık tasarımı ve keskin hatları ile lüks bir görünüm sunar."
  },
  {
    "carId":"5",
    "isRented": false,
    "model": "A4",
    "productionYear": 2021,
    "brand": "Audi",
    "rentValue": 5500,
    "rentedBy":"",
    "imageUrl": "https://arabam-blog.mncdn.com/wp-content/uploads/2021/07/yeni-audi-a4.jpg",
    "description": "Audi A4, Alman mühendisliğinin zarafetle buluştuğu bir modeldir. İç mekandaki dijital kokpit, sürüş deneyimini daha akıllı hale getirir. Quattro dört tekerlekten çekiş sistemi sayesinde her türlü yol koşulunda güvenli bir sürüş sağlar. Sessiz ve konforlu iç kabini ile uzun yolculuklar için mükemmel bir tercihtir. Yenilikçi far teknolojisi gece sürüşlerinde mükemmel görüş sunar."
  },
  {
    "carId":"6",
    "isRented": false,
    "model": "Focus",
    "productionYear": 2022,
    "brand": "Ford",
    "rentValue": 6000,
    "rentedBy":"",
    "imageUrl": "https://www.arabazzi.com/images/yuklemeler/ford-focus-24815.jpg",
    "description": "Ford Focus, sürüş keyfi ve ekonomik yakıt tüketimini bir araya getiren popüler bir modeldir. Geniş iç hacmi ve ergonomik koltukları ile uzun yolculuklarda rahatlık sağlar. Çevik direksiyon tepkileri, şehir içinde pratik bir sürüş deneyimi sunar. Güçlü motor seçenekleri ile performans konusunda da tatmin edicidir. Modern teknolojiye sahip multimedya sistemi, eğlenceyi ve bağlantıyı bir araya getirir."
  },
  {
    "carId":"7",
    "isRented": true,
    "model": "Megane",
    "productionYear": 2023,
    "brand": "Renault",
    "rentValue": 3500,
    "rentedBy":"",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHy-lJggPTMNxmjpQtRj0aUp_IU6b22hci3A&s",
    "description": "Renault Megane, estetik tasarımı ve gelişmiş teknolojik donanımları ile öne çıkar. Ekonomik motor seçenekleri sayesinde yakıt tasarrufu sağlar. Rahat süspansiyon sistemi, yol tutuşu konusunda üstün bir deneyim sunar. Güvenlik sistemleri arasında kör nokta uyarısı ve otomatik frenleme desteği bulunur. Geniş iç hacmi, yolculara konforlu bir seyahat imkanı tanır."
  },
  {
    "carId":"8",
    "isRented": false,
    "model": "Accent",
    "productionYear": 2021,
    "brand": "Hyundai",
    "rentValue": 3200,
    "rentedBy":"",
    "imageUrl": "https://di-enrollment-api.s3.amazonaws.com/hyundai/models/2021/accent/colors/olympus-silver.jpg",
    "description": "Hyundai Accent, ekonomik fiyatı ve yüksek dayanıklılığı ile popüler bir modeldir. Kompakt tasarımı sayesinde şehir içi kullanıma oldukça uygundur. Geniş bagaj hacmi, günlük kullanım için yeterli depolama alanı sunar. Güvenlik sistemleri, yolcuların emniyetini ön planda tutar. Düşük bakım maliyetleri ile uzun vadede tasarruf sağlar."
  },
  {
    "carId":"9",
    "isRented": false,
    "model": "X1",
    "productionYear": 2023,
    "brand": "BMW",
    "rentValue": 4000,
    "rentedBy":"",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLeyae8sVA1vm2TbI4MSo9C0Y-JJRm70Lsw&s",
    "description": "BMW X1, lüks SUV segmentinde dikkat çeken bir modeldir. Şehir içi ve arazi koşullarında üstün yol tutuşu sunar. İç mekanda geniş oturma alanı ve premium malzemeler kullanılmıştır. Teknolojik donanımları ile sürüşü daha keyifli hale getirir. Güçlü motoru ve dinamik tasarımıyla her yolculuğu özel kılar."
  },
  {
    "carId": "10",
    "isRented": false,
    "model": "Corsa",
    "productionYear": 2020,
    "brand": "Opel",
    "rentValue": 5000,
    "rentedBy": "",
    "imageUrl": "https://www.benimopelim.com/images/YEN%C4%B0%20OPEL%20CORSA%20%C3%96ZELL%C4%B0K.jpg",
    "description": "Opel Corsa, şehir içi kullanım için ideal kompakt bir hatchback modelidir. Yakıt verimliliği yüksek olup ekonomik bir sürüş sunar. Küçük boyutlarına rağmen geniş iç hacmi ve konforlu koltuklarıyla ferah bir yolculuk sağlar. Modern teknolojik donanımları arasında dokunmatik multimedya ekranı ve sürüş destek sistemleri bulunur. Dinamik sürüş özellikleri ile hem genç hem de aileler için uygun bir seçenektir."
}
]
}

export default cars;
