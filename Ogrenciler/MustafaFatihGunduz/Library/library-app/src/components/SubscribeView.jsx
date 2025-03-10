import React from "react";

const SubscribeView = () => {
	return (
		<section className="w-100  mt-5">
			<div
				className=" container section d-flex flex-column justify-content-center align-items-center subscribe py-4 "
				id="subscribe">
				<h4 className="text-uppercase fs-3  fw-bold">Abone Ol</h4>
				<p className=" fw-semi">
					Kaçırılmıyacak fırsatlar için sizde hemen abone olun ve size özel
					indirimlerden faydalanın
				</p>
				<div className="row">
					<div className="col-12 align-items-center d-flex justify-content-center">
						<input
							type="email"
							name="subs"
							placeholder="example@gmail.com"
							id="subs"
							className="me-0"
						/>
						<button type="submit" className="w-100 rounded-4">
							Abone Ol
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SubscribeView;
