import { NavLink } from "react-router";

function Faq() {
	return (
		<section className="container sss py-5" id="sss">
			<div className="row py-5">
				<h1 className="text-black text-center">SIKÇA SORULAN SORULAR</h1>
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
					<NavLink
						className="btn btn-success btn-lg d-grid my-20 mx-5"
						to="/faq">
						Tüm Sıkça Sorulan Soruları Görüntüle
					</NavLink>
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
				</div>
			</div>
		</section>
	);
}

export default Faq;
