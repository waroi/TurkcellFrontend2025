import React from "react";
import { NavLink } from "react-router";

function Products() {
	return (
		<section className="container products py-5 mb-5" id="products">
			<div className="row container-fluid">
				<h1 className="text-black text-center w-100 my-10">ÜRÜNLER</h1>
			</div>
			<div className="d-flex justify-content-center align-items-center">
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
					<div className="col">
						<div className="card h-100">
							<div className="image-container position-relative">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/256320_2.png?v=1638955883&width=720"
									className="card-img-top"
									alt="Harry Potter Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%209421.jpg"
									className="card-img-top hover-image"
									alt="Harry Potter Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Harry Potter Asası</h5>
								<p className="card-text">
									Harry Potter’ın asası, cesaret ve kararlılığın sembolüdür.
								</p>
							</div>
							<div className="card-footer">
								<a
									href="product-1.html"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container position-relative">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/Hermione2_Product.png?v=1639063444&width=360"
									className="card-img-top"
									alt="Hermione Granger Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%209422.jpg"
									className="card-img-top hover-image"
									alt="Hermione Granger Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Hermione Granger Asası</h5>
								<p className="card-text">
									Hermione Granger’ın asası, zekâ ve yaratıcılığı yansıtır.
								</p>
							</div>
							<div className="card-footer">
								<a
									href="product-2.html"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<div className="image-container position-relative">
								<img
									src="https://harrypottershop.co.uk/cdn/shop/products/Ron1_Product.png?v=1639126271&width=360"
									className="card-img-top"
									alt="Ron Weasley Asa"
								/>
								<img
									src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%209423.jpg"
									className="card-img-top hover-image"
									alt="Ron Weasley Asa Hover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">Ron Weasley Asası</h5>
								<p className="card-text">
									Ron Weasley’nin asası, sıcak bir dostluğu ve sadakati temsil
									eder.
								</p>
							</div>
							<div className="card-footer">
								<a
									href="product-3.html"
									className="btn btn-success d-flex justify-content-center align-items-center">
									Detaylar
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<NavLink
				className="btn btn-success btn-lg d-grid my-20 mx-5"
				to="/all-products">
				Tüm Ürünleri Görüntüle
			</NavLink>
		</section>
	);
}

export default Products;
