const InitialState = {
  books: [

    {
      id: 1,
      title: "Kırmızı Pazartesi",
      genre: "Dram",
      author: "Gabriel García Márquez",
      description: "Bir cinayetin kaçınılmaz olduğunu bilen bir kasabanın, bu olayı engelleyemeyişinin hikayesi.",
      posterUrl: "https://www.canyayinlari.com/productimages/119571/original/9789750740947_745.jpg",
      publishedYear: "1981",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 2,
      title: "Martı Jonathan Livingston",
      genre: "Kişisel Gelişim",
      author: "Richard Bach",
      description: "Sınırlarını zorlamayı ve özgürlüğü arayan bir martının hikayesi.",
      posterUrl: "https://productimages.hepsiburada.net/s/315/375/110000309168207.jpg/format:webp",
      publishedYear: "1970",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 3,
      title: "Kafamda Bir Tuhaflık",
      genre: "Roman",
      author: "Orhan Pamuk",
      description: "İstanbul’un değişen yüzünü, sıradan bir insanın gözünden anlatan etkileyici bir roman.",
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQByOKKMWHlk1-dQIB3zL6YfM7V4B11y0tog&s",
      publishedYear: "2014",
      isFavourite: false,
      publisherId: "canYayinlari123"
    },
    {
      id: 4,
      title: "Simyacı",
      genre: "Roman",
      author: "Paulo Coelho",
      description: "Hayallerin peşinden gitmenin önemi hakkında ilham verici bir hikaye.",
      posterUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11819904/wh:true/wi:500",
      publishedYear: "1988",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 5,
      title: "Dune",
      genre: "Bilim Kurgu",
      author: "Frank Herbert",
      description: "Çölde geçen epik bir bilim kurgu hikayesi.",
      posterUrl: "https://kitapdiyari.com.tr/wp-content/uploads/2022/01/Dune-Ozeti.jpg",
      publishedYear: "1965",
      isFavourite: false,
      publisherId: "canYayinlari123"
    },
    {
      id: 6,
      title: "Saatleri Ayarlama Enstitüsü",
      genre: "Roman",
      author: "Ahmet Hamdi Tanpınar",
      description: "Modernleşme sürecindeki Türkiye’yi ele alan bir başyapıt.",
      posterUrl: "https://kitapdiyari.com.tr/wp-content/uploads/2021/01/Saatleri-Ayarlama-Enstitusu.jpg",
      publishedYear: "1961",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 7,
      title: "Tutunamayanlar",
      genre: "Roman",
      author: "Oğuz Atay",
      description: "Türk edebiyatının en önemli postmodern eserlerinden biri.",
      posterUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11462655/wh:true/wi:800",
      publishedYear: "1971",
      isFavourite: false,
      publisherId: "canYayinlari123"
    },
    {
      id: 8,
      title: "Beyaz Zambaklar Ülkesinde",
      genre: "Tarih",
      author: "Grigory Petrov",
      description: "Eğitim ve aydınlanmanın gücünü anlatan ilham verici bir kitap.",
      posterUrl: "https://www.iskultur.com.tr/webp/2021/04/beyaz-zambaklar-ulkesinde-2.jpg",
      publishedYear: "1923",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 9,
      title: "1984",
      genre: "Dystopian",
      author: "George Orwell",
      description: "Bir totaliter rejimin karanlık yüzünü anlatan başyapıt.",
      posterUrl: "https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg",
      publishedYear: "1949",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 10,
      title: "Hayvan Çiftliği",
      genre: "Dystopian",
      author: "George Orwell",
      description: "Siyasi alegori içeren unutulmaz bir eser.",
      posterUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11447395/wh:true/wi:500",
      publishedYear: "1945",
      isFavourite: false,
      publisherId: "canYayinlari123"
    },
    {
      id: 11,
      title: "Savaş ve Barış",
      genre: "Tarihsel Roman",
      author: "Lev Tolstoy",
      description: "Napolyon döneminde geçen epik bir savaş ve barış hikayesi.",
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Se12DeP1fdon7YG6DYAjIENxm1xJTsPXOg&s",
      publishedYear: "1869",
      isFavourite: false,
      publisherId: "canYayinlari123"
    },
    {
      id: 12,
      title: "Uçurtma Avcısı",
      genre: "Dram",
      author: "Khaled Hosseini",
      description: "İhanet, pişmanlık ve affetme üzerine dokunaklı bir hikaye.",
      posterUrl: "https://i.dr.com.tr/cache/600x600-0/originals/0000000153127-1.jpg",
      publishedYear: "2003",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 13,
      title: "Sefiller",
      genre: "Tarihsel Roman",
      author: "Victor Hugo",
      description: "Fransa’daki toplumsal adaletsizliği konu alan etkileyici bir başyapıt.",
      posterUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11572198/wh:true/wi:800",
      publishedYear: "1862",
      isFavourite: false,
      publisherId: "canYayinlari123"
    },
    {
      id: 14,
      title: "Anna Karenina",
      genre: "Roman",
      author: "Lev Tolstoy",
      description: "Bir aşk hikayesinin toplumsal ve bireysel yıkımını anlatan eser.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTU0NDgxNDg0NV5BMl5BanBnXkFtZTcwMjE4MzkwOA@@._V1_FMjpg_UX1000_.jpg",
      publishedYear: "1877",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 15,
      title: "Suç ve Ceza",
      genre: "Roman",
      author: "Fyodor Dostoyevski",
      description: "Bir cinayet ve vicdan sorgulaması üzerine derin bir psikolojik roman.",
      posterUrl: "https://i.dr.com.tr/cache/600x600-0/originals/0001788076001-1.jpg",
      publishedYear: "1866",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 16,
      title: "Büyük Umutlar",
      genre: "Roman",
      author: "Charles Dickens",
      description: "Toplumsal adaletsizliğe ve bireysel gelişime dair klasik bir roman.",
      posterUrl: "https://img.kitapyurdu.com/v1/getImage/fn:3518241/wh:true/miw:200/mih:200",
      publishedYear: "1860",
      isFavourite: false,
      publisherId: "canYayinlari123"
    },
    {
      id: 17,
      title: "Moby Dick",
      genre: "Macera",
      author: "Herman Melville",
      description: "Dev bir beyaz balinanın peşinde geçen epik bir deniz macerası.",
      posterUrl: "https://m.media-amazon.com/images/I/712mdW4zCcL._AC_UF1000,1000_QL80_.jpg",
      publishedYear: "1851",
      isFavourite: false,
      publisherId: "canYayinlari123"
    },
    {
      id: 18,
      title: "Germinal",
      genre: "Sosyal",
      author: "Émile Zola",
      description: "Fransız işçi sınıfının 19. yüzyıldaki zorluklarını anlatan çarpıcı bir roman.",
      posterUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11877643/wh:true/wi:800",
      publishedYear: "1885",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },
    {
      id: 19,
      title: "Madame Bovary",
      genre: "Roman",
      author: "Gustave Flaubert",
      description: "Toplumsal beklentiler ve bireysel mutsuzluk üzerine derin bir inceleme.",
      posterUrl: "https://www.canyayinlari.com/productimages/119378/big/9789750738937_front_cover.jpg",
      publishedYear: "1857",
      isFavourite: false,
      publisherId: "canYayinlari123"
    },
    {
      id: 20,
      title: "Dracula",
      genre: "Gotik",
      author: "Bram Stoker",
      description: "Klasik bir gotik korku hikayesi ve vampir efsanesi.",
      posterUrl: "https://i.dr.com.tr/cache/600x600-0/originals/0001828853001-1.jpg",
      publishedYear: "1897",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },

    {
      id: 21,
      title: "Fahrenheit 451",
      genre: "Bilim Kurgu",
      author: "Ray Bradbury",
      description: "Bir distopyada, kitapların yasaklandığı bir dünyada özgürlüğü ve düşünceyi savunmak için verilen mücadeleyi anlatan klasik bir eser.",
      posterUrl: "https://img.kitapyurdu.com/v1/getImage/fn:11643403/wh:true/wi:800",
      publishedYear: "1953",
      isFavourite: true,
      publisherId: "canYayinlari123"
    },

  ],
  book: [{}]
};

export default InitialState;
