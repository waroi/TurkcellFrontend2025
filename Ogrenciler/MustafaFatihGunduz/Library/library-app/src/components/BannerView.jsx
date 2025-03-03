import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import banner from "../assets/banner.png";

const BannerView = () => {
	return (
		<div className="w-100">
			<img src={banner} alt="banner-logo" className="h-50" />
			<div className="d-flex justify-content-between mt-4 bg-black container">
				<div className="offer">
					<img
						src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-4.png?v=1613723084&width=275"
						alt="free-shipping"
					/>
					<p>Free Shipping</p>
				</div>
				<div className="offer">
					<img
						src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-3.png?v=1613723084&width=275"
						alt="secure-payment"
					/>
					<p>Secure Payment</p>
				</div>
				<div className="offer">
					<img
						src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-2.png?v=1613723084&width=275"
						alt="best-price"
					/>
					<p>Best Price</p>
				</div>
				<div className="offer">
					<img
						src="https://bookly-theme.myshopify.com/cdn/shop/files/icon-1.png?v=1613723084&width=275"
						alt="free-return"
					/>
					<p>Free Return</p>
				</div>
			</div>
		</div>
	);
};

export default BannerView;
