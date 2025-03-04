import React from "react";

const SubscribeView = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center subscribe p-4">
			<h4 className="text-uppercase fs-3 text-black fw-bold">Abone Ol</h4>
			<h6 className="fs-5 text-black fw-semi">
				Kaçırılmıyacak fırsatlar için sizde hemen abone olun ve size özel
				indirimlerden faydalanın!!
			</h6>
			<div className="row">
				<div className="col-12">
					<input type="email" name="email" id="email" />
					<button type="submit" className="btn btn-primary">
						Abone Ol
					</button>
				</div>
			</div>
		</div>
	);
};

export default SubscribeView;
