import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	keyword: "",
	books: [
		{
			id: 1,
			title: "DİJİTAL DÜNYADA GÜVENLİ ADIMLAR",
			author: "Dr. Ahmet Ali SÜZEN",
			category: "Teknoloji",
			page: 128,
			image:
				"https://www.kodlab.com/2450-thickbox_default/dijital-duenyada-guevenli-adimlar.jpg",
			releaseDate: "2025-10-01",
			description:
				"Günümüz çocukları, dijital araçlar sayesinde hem öğrenme hem de eğlence süreçlerinde pek çok imkâna sahip oluyor. Ancak bu fırsatlarla birlikte çevrimiçi dünyada onları bekleyen çeşitli riskler de var. Dijital Dünyada Güvenli Adımlar, tam da bu noktada devreye girerek çocuklara ve gençlere internet, sosyal medya, oyunlar, uygulamalar ve daha fazlası hakkında temel siber güvenlik farkındalığı kazandırmayı amaçlıyor.",
			publishing: "kodlab",
		},
		{
			id: 2,
			title: "Yapay Zeka İle Modern Web Tasarımı",
			author: "Tahsin Berk Ceylan",
			category: "Teknoloji",
			page: 1104,
			description:
				"Web teknolojileri büyük bir hızla ilerlemekte ve kullandığımız tüm elektronik cihazlar ile erişim sağladığımız yüzlerce hizmet için yazılan mobil uygulamaların, masaüstü uygulamaları oluşturulma aşamasında kısmen, web sitelerinin oluşturulmasında ise tamamen HTML, JAVASCRIPT ve CSS kullanılmakta.",
			image:
				"https://www.kodlab.com/2423-thickbox_default/yapay-zeka-ile-modern-web-tasarimi.jpg",
			releaseDate: "2025-10-01",
			publishing: "kodlab",
		},
		{
			id: 3,
			title: "Java ile Programlama ve Veri Yapıları",
			author: "Bülent Çobanoğlu",
			category: "Teknoloji",
			page: 248,
			description:
				"Elinizdeki kitap, Java dili ile programlama mantığını kavramak, programlamayı öğrenmek veya programlamanın temel kavramlarında eksikliklerini gidermek isteyenlere yardımcı olmayı hedefleyen orta seviye bir programlama kitabı olmakla birlikte, bu alanda yükseköğretimde okutulan derslerin müfredatları dikkate alınarak hazırlanmıştır.",
			image:
				"https://www.pusulakitaplik.com/UserFiles/Fotograflar/org/641-java-ile-programlama-ve-veri-yapilari-6-baski-java-ile-programlama-ve-veri-yapilari-6-baski-0.jpg",
			releaseDate: "2023-10-01",
			publishing: "pusula",
		},
		{
			id: 4,
			title: "UML Swift ve Kotlin ile Dizayn Paternleri",
			image:
				"https://www.pusulakitaplik.com/UserFiles/Fotograflar/org/588-uml-swift-ve-kotlin-ile-dizayn-paternleri-swiftvekotlin-uml-swiftvekotlin-onkapak.jpg",
			author: "Aykut Taşdelen",
			releaseDate: "2020-07-08",
			category: "Teknoloji",
			page: 228,
			description:
				"Aykut Taşdelen’in kaleme aldığı bu kitap, kariyerinde yazılım mimarı/proje yöneticisi olmayı hedefleyen, ileri düzeyde nesne yönelimli programlama öğrenmek, dizayn paternleri ve yazılım mimarileri ile mimari paternlere hakim olmak isteyen, analiz ve modelleme konularında bilgisini arttırmak isteyen yazılım geliştiriciler için benzersiz bir kaynaktır.",
			publishing: "pusula",
		},
		{
			id: 5,
			title: "BECOMING A PRODUCTIVITY GURU And Maintaining Your Well-Being",
			image:
				"https://ideacdn.net/idea/ct/82/myassets/products/227/becoming-a-productivity-guru-and-maintaining-your-well-being-1173.jpeg?revision=1735814512",
			author: "Perçin İmrek",
			releaseDate: "2021-07-08",
			description:
				"It willnot be a book where I will constantly advise you to work hard, long hours, exhaustyourself, die for what you do, and all that. It will not be like one of themotivational Youtube videos where a thick-voiced man yells at you to wake up at04:00 a.m. every day and hustle all the time.",
			category: "Kişisel Gelişim",
			page: 136,
			publishing: "abakus",
		},
		{
			id: 6,
			title: "Yeni Başlayanlar İçin C# ile Nesne Tabanlı Programlama",
			category: "Teknoloji",
			image:
				"https://ideacdn.net/idea/ct/82/myassets/products/637/yeni-baslayanlar-icin-c-ile-nesne-tabanli-programlama-1091.jpeg?revision=1735814273",
			author: "Fahrettin Erdinç",
			releaseDate: "2020-07-08",
			page: 496,
			description:
				"Bu kitap hiç C# bilmeyip öğrenmek isteyen veya var olan C# bilgisini geliştirmek isteyenler için yazılmıştır. Kitap özellikle okullarda, kurslarda, meslek liselerinde, yüksekokul ve üniversitelerin başta bilgisayar mühendisliği öğrencileri olmak üzere, nesne yönelimli programlama dersi alan tüm mühendislik öğrencileri için başvuru kaynağıdır. Kitap sadece programcılığa yeni başlayan öğrenciler değil, aynı zamanda programcılık eğitimi veren öğretmenler de göz önünde bulundurularak hazırlanmıştır.",
			publishing: "abakus",
		},
		{
			id: 7,
			title: "İşletim Sistemleri",
			image: "https://cdn.bkmkitap.com/isletim-sistemleri-12379420-75-B.jpg",
			releaseDate: "2020-07-08",
			description:
				"Bu kitap, bilgisayar donanımını canlandırarak işlevsel duruma getiren “işletim sistemleri” konusu üzerinedir; bilindiği gibi işletim sistemleri bilgisayar mühendisliği alanında çok önemli ve çok özel bir yere sahiptir. Hem sistem kaynaklarının adil bir şekilde paylaşılarak kullanılmasını sağlarlar hem de sistem çağrıları denilen fonksiyonlarıyla program tasarımcılarına hazır kütüphane desteği verirler. ",
			author: "Prof. Dr. Vedat Çoşkun",
			category: "Teknoloji",
			page: 456,
			publishing: "papatya",
		},
	],
	keyword: "",
};

export const bookSlice = createSlice({
	name: "book",
	initialState:  initialState,
	reducers: {
		addBook: (state, action) => {
			state.books = [...state.books, action.payload];
			localStorage.setItem("books", JSON.stringify(state.books));
		},
		sortingBook: (state, action) => {
			state.books = [
				...state.books.sort((a, b) =>
					action.payload === "asc"
						? new Date(a.releaseDate) - new Date(b.releaseDate)
						: new Date(b.releaseDate) - new Date(a.releaseDate)
				),
			];
		},
		updateBook: (state, action) => {
			const index = state.books.findIndex(
				(book) => book.id === action.payload.id
			);
			if (index !== -1) {
				state.books[index] = action.payload;
				localStorage.setItem("books", JSON.stringify(state.books));
			}
		},
		searchBook: (state, action) => {
			state.keyword = action.payload;
		},
		deleteBook: (state, action) => {
			state.books = state.books.filter((book) => book.id !== action.payload);
			localStorage.setItem("books", JSON.stringify(state.books));
		},
	},
});

export const { addBook, deleteBook, updateBook, sortingBook, searchBook } =
	bookSlice.actions;

export default bookSlice.reducer;
