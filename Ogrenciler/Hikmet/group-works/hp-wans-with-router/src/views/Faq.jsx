function FaqView() {
	return (
		<section className="container sss my-20" id="sss">
			<div className="row">
				<h1 className="text-black text-center my-10">SIKÇA SORULAN SORULAR</h1>
			</div>
			<div className="row">
				<div className="accordion accordion-flush" id="accordionFlushExample">
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseOne"
								aria-expanded="false"
								aria-controls="flush-collapseOne">
								Ürünü nasıl iade edebilirim?
							</button>
						</h2>
						<div
							id="flush-collapseOne"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Ürününüzde herhangi bir sorun olduğunda tarafımıza mail,
								Whatsapp ya da telefon ile iletişime geçtiğiniz taktirde
								sizlerin kolay iade yapabilmeniz için yardımcı olunacaktır. İade
								ürününüzü iade edebilmeniz için kargo firmasına verebileceğiniz
								kargo numarası ile firmamıza göndermeniz gerekmektedir. Ürün
								tarafımıza ulaştıktan sonra iade süreciniz başlayacaktır.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseTwo"
								aria-expanded="false"
								aria-controls="flush-collapseTwo">
								Ürün resimde gördüğüm gibi mi?
							</button>
						</h2>
						<div
							id="flush-collapseTwo"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Tüm ürünlerimiz resimler ile aynı kalite ve görünümdedir.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseThree"
								aria-expanded="false"
								aria-controls="flush-collapseThree">
								Alışveriş yapmak için üye olmak zorunda mıyım?
							</button>
						</h2>
						<div
							id="flush-collapseThree"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Zorunlu değil fakat herhangi bir sorun yaşamamanız adına üye
								olmanızı öneriyoruz.
								<a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">
									Üye olmak için tıklayın
								</a>
							</div>
						</div>
					</div>
					<div
						className="modal fade"
						id="loginModal"
						tabindex="-1"
						aria-labelledby="loginModalLabel"
						aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="loginModalLabel">
										Üye Giriş Formu
									</h5>
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<form>
										<div className="mb-3">
											<label for="email" className="form-label">
												E-posta Adresi
											</label>
											<input
												type="email"
												className="form-control"
												id="email"
												placeholder="E-postanızı girin"
											/>
										</div>
										<div className="mb-3">
											<label for="password" className="form-label">
												Şifre
											</label>
											<input
												type="password"
												className="form-control"
												id="password"
												placeholder="Şifrenizi girin"
											/>
										</div>
										<button type="submit" className="btn btn-primary w-100">
											Üye Ol
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseFour"
								aria-expanded="false"
								aria-controls="flush-collapseFour">
								Siparişlerim ne zaman teslim edilir?
							</button>
						</h2>
						<div
							id="flush-collapseFour"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Siparişlerimiz genellikle 3-5 iş günü içinde kargoya verilir.
								Kargo süresi, teslimat adresinize bağlı olarak değişiklik
								gösterebilir.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseFive"
								aria-expanded="false"
								aria-controls="flush-collapseFive">
								Hangi kargo firması ile anlaşmalısınız?
							</button>
						</h2>
						<div
							id="flush-collapseFive"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Ürünlerimiz Hogwarts Express ile dağıtıma çıkmaktadır.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseSix"
								aria-expanded="false"
								aria-controls="flush-collapseSix">
								Hangi ödeme yöntemlerini kabul ediyorsunuz?
							</button>
						</h2>
						<div
							id="flush-collapseSix"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Kredi kartı, banka kartı gibi çeşitli ödeme yöntemlerini kabul
								ediyoruz. Ayrıca, kapıda ödeme seçeneğimiz de bulunmaktadır.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseSeven"
								aria-expanded="false"
								aria-controls="flush-collapseSeven">
								Asalar özel kutusunda mı geliyor?
							</button>
						</h2>
						<div
							id="flush-collapseSeven"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Evet, tüm asalarımız, karaktere özel tasarlanmış şık bir kutu
								ile gönderilmektedir. Bu kutular, koleksiyonunuza değer katacak
								şekilde tasarlanmıştır.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseEight"
								aria-expanded="false"
								aria-controls="flush-collapseEight">
								Yurt dışına gönderim yapıyor musunuz?
							</button>
						</h2>
						<div
							id="flush-collapseEight"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Evet, uluslararası gönderim hizmetimiz bulunmaktadır. Kargo
								ücretleri ve teslimat süreleri, siparişin gönderileceği ülkeye
								göre değişiklik gösterebilir.
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseNine"
								aria-expanded="false"
								aria-controls="flush-collapseNine">
								Özel bir asa siparişi verebilir miyim?
							</button>
						</h2>
						<div
							id="flush-collapseNine"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Maalesef şu anda kişiye özel asa yapımı hizmetimiz
								bulunmamaktadır. Ancak ürün kataloğumuzu düzenli olarak
								güncelliyoruz, yeni asalar için bizi takipte kalın!
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#flush-collapseTen"
								aria-expanded="false"
								aria-controls="flush-collapseTen">
								Asalar hangi malzemelerden üretiliyor?
							</button>
						</h2>
						<div
							id="flush-collapseTen"
							className="accordion-collapse collapse"
							data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">
								Her asa, Harry Potter evrenindeki detaylara sadık kalınarak
								tasarlanmıştır. Seçtiğiniz asanın ağacı ve çekirdeği, karakterin
								kullandığı orijinal asaya uygun şekilde belirlenmiştir.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FaqView;
