import { NavLink } from "react-router";

function AllProducts() {
	return (
		<>
			<section className="container products" id="products">
				<div className="row py-5 px-5">
					<h1 className="text-black text-center mt-20">ÜRÜNLER</h1>
					<div className="text-center bg-light-green rounded-pill py-5 my-10">
						<h3 className="mt-3">Asa Sihirbazı Seçer Bay Potter</h3>
						<h6 className="mt-3">Ollivander</h6>
						<h5 className="mt-3">Harry Potter ve Felsefe Taşı</h5>
					</div>
					<p className="text-center my-10 fs-18">
						Başlamadan önce{" "}
						<a href="#" data-bs-toggle="modal" data-bs-target="#wandCoresModal">
							Asa Çekirdekleri
						</a>{" "}
						ve
						<a href="#" data-bs-toggle="modal" data-bs-target="#wandWoodsModal">
							Asa Ağaçları
						</a>{" "}
						hakkında bilgi sahibi olmak için inceleyiniz.
					</p>
				</div>
				<div
					className="modal fade"
					id="wandCoresModal"
					tabIndex="-1"
					aria-labelledby="wandCoresLabel"
					aria-hidden="true">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="wandCoresLabel">
									Asa Çekirdekleri Hakkında
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"></button>
							</div>
							<div
								className="modal-body"
								style={{ maxHeight: "400px", overflowY: "auto" }}>
								<p>
									Aşağıdaki açıklama, Mr. Garrick Ollivander tarafından
									kullanılan üç ana asa çekirdeğinin gücü ve özelliklerini
									anlatan notlarından alınmıştır.
								</p>
								<p className="fw-bold fs-18">Tek Boynulu At</p>
								<p>
									Tek boynuzlu at tüyü genellikle en tutarlı büyüleri üretir ve
									dalgalanmalara ve tıkanıklıklara karşı en az hassastır. Tek
									boynuzlu at çekirdeğine sahip asalar genellikle Kara Büyülere
									yönlendirilmesi en zor olanlardır. Bunlar, tüm asalardan en
									sadık olanlardır ve çoğunlukla ilk sahibine sıkı sıkıya bağlı
									kalır, ister başarılı bir cadı veya büyücü olsun, ister
									olmasın.
								</p>
								<p className="fw-bold fs-18">Ejderha</p>
								<p>
									Ejderha asaları, diğer türlere kıyasla daha hızlı öğrenirler.
									Asıl sahibinden alınıp yeni bir sahibine geçtiğinde bile, yine
									de o kişiye güçlü bir şekilde bağlanırlar. Ejderha asası, Kara
									Büyülere yönlendirilmesi en kolay olanıdır, ancak kendi başına
									bu yöne eğilim göstermez. Ayrıca, diğer iki çekirdek türünden
									en fazla kazaya meyilli olanıdır, çünkü biraz huysuzdur.
								</p>
								<p className="fw-bold fs-18">Anka Kuşu</p>
								<p>
									Bu, en nadir çekirdek türüdür. Anka kuşu tüyleri, en geniş
									büyü yelpazelerine sahip büyüler yapabilir, ancak bunun ortaya
									çıkması, tek boynuzlu at ve ejderha çekirdeklerinden daha uzun
									sürebilir. Anka kuşu tüyü asaları, potansiyel sahipleri
									konusunda her zaman en seçici olanlardır, çünkü tüylerinin
									alındığı yaratık, dünyadaki en bağımsız ve mesafeli
									varlıklardan biridir. Bu asalar, eğitilmesi ve
									kişiselleştirilmesi en zor olanlardır ve sadakatleri
									genellikle zorlukla kazanılır.
								</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal">
									Kapat
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className="modal fade"
					id="wandWoodsModal"
					tabIndex="-1"
					aria-labelledby="wandWoodsLabel"
					aria-hidden="true">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="wandWoodsLabel">
									Asa Ağaçları Hakkında
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"></button>
							</div>
							<div
								className="modal-body"
								style={{ maxHeight: "400px", overflowY: "auto" }}>
								<p>
									Aşağıdaki açıklama, Mr. Garrick Ollivander tarafından yazılmış
									asa ağaçlarıyla ilgili notlarından alınmıştır.
								</p>
								<p className="fw-bold fs-18">Alıç (Hawthorn)</p>
								<p>
									Alıç asaları, özellikle iyileştirme büyüsüne uygun olabilir,
									ancak lanetlerde de ustadırlar ve genellikle alıç asasının,
									çatışmalı bir doğası olan bir cadı ya da büyücüyle daha uyumlu
									olduğunu gözlemlemişimdir. Alıç, ustalaşması kolay bir odun
									değildir, bu yüzden yalnızca yetenekli olduğu kanıtlanmış bir
									cadı ya da büyücünün eline verilmelidir. Alıç asalarının
									belirgin bir özelliği vardır: Büyüleri, yanlış kullanıldığında
									geri tepebilir.
								</p>
								<p className="fw-bold fs-18">Asma (Vine)</p>
								<p>
									Sarmaşık asaları, daha az yaygın türler arasındadır ve
									sahiplerinin neredeyse her zaman daha büyük bir amaç peşinde
									koşan, sıradanın ötesinde bir vizyona sahip olan ve onları en
									iyi tanıyanları bile şaşırtan cadılar ya da büyücülerdir.
								</p>
								<p className="fw-bold fs-18">Ceviz (Walnut)</p>
								<p>
									Yüksek zekaya sahip cadılar ve büyücüler, ilk olarak bir ceviz
									asa denemelidir, çünkü on durumda dokuzunda, her ikisi de
									birbirlerinde ideal eşlerini bulurlar. Ceviz asaları,
									genellikle sihirli yenilikçiler ve mucitlerin ellerinde
									bulunur.
								</p>
								<p className="fw-bold fs-18">Çam (Pine)</p>
								<p>
									Çam asaları yaratıcı bir şekilde kullanılmaktan keyif alır ve
									diğer bazı asaların aksine, yeni yöntemlere ve büyülere
									itirazsız uyum sağlar. Çam asası, sözsüz büyülere en duyarlı
									olanlardan biridir.
								</p>
								<p className="fw-bold fs-18">Çobanpüskülü (Holly)</p>
								<p>
									Geleneksel olarak koruyucu olarak kabul edilir ve genellikle
									öfke ve acelecilik eğilimlerini aşmalarına yardımcı olmaya
									ihtiyaç duyanlar için en mutlu şekilde çalışır. performans
									açısından en dramatik şekilde değişen tahtalardan biridir ve
									özellikle phoenix tüyüyle birleştirilmesi son derece zor bir
									tahtadır, çünkü tahtanın değişkenliği, phoenix'in duygusal
									mesafesiyle tuhaf bir şekilde çatışır. Ancak böyle bir
									eşleşme, ideal sahibiyle buluştuğunda, hiçbir şey ve kimse
									yolunda durmamalıdır.
								</p>
								<p className="fw-bold fs-18">Dişbudak (Yew)</p>
								<p>
									Daha nadir türler arasında yer alır ve ideal eşleşmeleri de
									olağandışı, bazen de ünlüdür. sahibine yaşam ve ölüm gücü
									verme yeteneğiyle ünlüdür, ki bu, elbette, tüm asalar için
									söylenebilecek bir şeydir; ancak bu asalar, düellolar ve tüm
									lanetler alanında özellikle karanlık ve korkunç bir üne
									sahiptir. Büyücüler Dişbudak asalarla gömüldüklerinde, asa
									genellikle ölü sahibinin mezarını koruyan bir ağaca dönüşür.
									Deneyimlerime göre kesin olan şey ise, karaysal asanın asla
									sıradan veya çekingen bir sahibi seçmemesidir.
								</p>
								<p className="fw-bold fs-18">Ihlamur (Larch)</p>
								<p>
									Her zaman gizli yetenekler ve beklenmedik etkiler yaratan
									asalar yapar ki bu da ona layık olan sahibini tanımlar.
									Genellikle, Larch asasına sahip olan cadı veya büyücünün,
									sahip oldukları büyük yeteneklerin tam kapsamını ancak bu asa
									ile eşleşince fark ettiği, ancak o zaman olağanüstü bir uyum
									yakalayacakları görülür.
								</p>
								<p className="fw-bold fs-18">Karaçalı (Karaçalı)</p>
								<p>
									Oldukça sıra dışı bir asa ağacıdır. Karadiken çalısının,
									dikenli dikenleriyle ünlü olmasının garip bir özelliği vardır:
									En tatlı meyvelerini en sert donlardan sonra verir ve bu
									tahttan yapılan asaların, gerçek anlamda bağ kurabilmek için
									sahipleriyle birlikte tehlike veya zorluklardan geçmesi
									gerektiği görülür. Bu koşul altında, karadiken asa, istenilen
									kadar sadık ve güvenilir bir hizmetçi haline gelir.
								</p>
								<p className="fw-bold fs-18">Kavak (Poplar)</p>
								<p>
									İşte güvenebileceğiniz bir asa; tutarlılık, güç ve eşit
									düzeyde güç sunar, her zaman açık bir ahlaki vizyona sahip bir
									cadı ya da büyücüyle çalışırken en mutlu olur.
								</p>
								<p className="fw-bold fs-18">Mürver (Elder)</p>
								<p>
									En nadir asa tahtası olan Mürver, derin bir uğursuzlukla
									anılır ve diğerlerinden daha zor ustalaşılır. Güçlü bir sihir
									barındırır, ancak kendisine sahip olacak kişinin ya da kişinin
									grubunun üstün olmayacağı durumda kalmayı reddeder; mürver
									asasına uzun süre sahip olabilmek için olağanüstü bir büyücü
									olmak gerekir.
								</p>
								<p className="fw-bold fs-18">Sedir (Cypress)</p>
								<p>
									Sedir asaları, soylulukla ilişkilendirilir. Sedir asaları,
									cesurlar, atılganlar ve fedakarlar arasında ruh eşlerini
									bulur: kendi doğalarındaki ve başkalarının doğalarındaki
									gölgelerle yüzleşmekten korkmayanlar.
								</p>
								<p className="fw-bold fs-18">Söğüt (Willow)</p>
								<p>
									Söğüt, iyileştirici güce sahip alışılmadık bir asa odunu olup,
									bir söğüt asasının ideal sahibi genellikle bazı (çoğu zaman
									haksız) güvensizliklere sahiptir, ne kadar iyi saklamaya
									çalışsalar da.
								</p>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal">
									Kapat
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-3 g-4 my-12">
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/256320_2.png?v=1638955883&width=720"
									className="card-img-top"
									alt="Asa"
									href="product-1.html"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207005.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
									href="product-1.html"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Harry Potter'ın Asası</h5>
								<p className="card-text">
									Harry Potter’ın asası, cesaret ve kararlılığın sembolüdür.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-1"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/Hermione2_Product.png?v=1639063444&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207021.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Hermione Granger'ın Asası</h5>
								<p className="card-text">
									Hermione Granger’ın asası, zekâ ve yaratıcılığı yansıtır.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-2"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/Ron1_Product.png?v=1639126271&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207462.jpg"
									className="card-img-top hover-image"
									alt=" Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Ron Weasley'nin Asası</h5>
								<p className="card-text">
									Ron Weasley’nin asası, sıcak bir dostluğu ve sadakati temsil
									eder.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-3"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/files/wand_product_Dumbledore.png?v=1688717176&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207145.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Albus Dumbledore’un Asası</h5>
								<p className="card-text">
									Albus Dumbledore’un Mürver Asası, gücün ve bilgeliğin
									zirvesini temsil eder.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-4"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/siriusblack1.png?v=1641304045&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207081.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Sirius Black’in Asası</h5>
								<p className="card-text">
									Sirius Black’in asası, özgürlük ve isyan temalarını taşır.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-5"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/Snape1_Product.png?v=1639126161&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207150.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Severus Snape’in Asası</h5>
								<p className="card-text">
									Severus Snape’in asası, gizem ve karanlık gücü simgeler.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-6"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/lupin1.png?v=1641312566&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Large/PRP%20HP%208298.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Remus Lupin’in Asası</h5>
								<p className="card-text">
									Remus Lupin’in asası, denge ve içsel huzuru yansıtır.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-7"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/ProfessorMcGonagallWand1.png?v=1641308724&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%208290.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Minerva McGonagall’ın Asası</h5>
								<p className="card-text">
									Minerva McGonagall’ın asası, liderlik ve zekâyı yansıtır.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-8"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/Luna1_Product.png?v=1639128726&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%208232.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Luna Lovegood’un Asası</h5>
								<p className="card-text">
									Luna Lovegood’un asası, sıradışılığını ve yaratıcılığını
									yansıtır.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-9"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/Voldemort1_Product.png?v=1639127048&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207331.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Voldemort’un Asası</h5>
								<p className="card-text">
									Voldemort’un asası, karanlık güç ve ölüm temalarını yansıtır.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-10"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/Bellatrix1_Product.png?v=1639128253&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207976.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Bellatrix Lestrange’in Asası</h5>
								<p className="card-text">
									Bellatrix Lestrange’in asası, sadizm ve gücün tezatını
									yansıtır.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-11"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/PLATFORM-DRACO-MALFOY-WAND_1.png?v=1636364272&width=360"
									className="card-img-top"
									alt="Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%208409.jpg"
									className="card-img-top hover-image"
									alt="Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Draco Malfoy’un Asası</h5>
								<p className="card-text">
									Draco Malfoy’un asası, çatışmalar ve içsel mücadeleleri temsil
									eder.
								</p>
							</div>
							<div className="card-footer">
								<NavLink
									to="/product-12"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div>
				<img
					src="https://i.gifer.com/4nE.gif"
					className="d-block w-100"
					alt="gif"
				/>
			</div>
		</>
	);
}

export default AllProducts;
