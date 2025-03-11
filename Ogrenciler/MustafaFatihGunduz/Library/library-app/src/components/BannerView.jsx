import React from "react";
import { auth } from "../../firebase";
import bookStack from "../assets/book-stack.png";

const BannerView = () => {
	return (
		<section className="w-100 mx-4">
			<div className="container section py-5 my-5 mx-2 d-flex flex-column">
				<div className="row">
					<div className="col-md-7 d-flex flex-column justify-content-center px-5 gap-2">
						<h4>
							Hoşgeldin,{" "}
							{auth.currentUser !== null
								? auth.currentUser.displayName
								: "Kullanıcı"}
						</h4>
						<h6>Senin için en iyi kitapları seçtik! Göz atmaya hazır mısın?</h6>
						<button className="w-50 rounded-2">Hadi Başlayalım</button>
					</div>
					<div className="col-md-5">
						<img src={bookStack} id="book-stack" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerView;
