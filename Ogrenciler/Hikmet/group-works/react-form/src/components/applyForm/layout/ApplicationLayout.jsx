const ApplicationLayout = ({ jobInfoComponent, formComponent }) => {
	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-md-4">{jobInfoComponent}</div>
				<div className="col-md-8">
					<div className="card shadow-sm border-0">
						<div className="card-header bg-primary text-white">
							<h5 className="mb-0 text-start">Başvuru Formu</h5>
						</div>
						<div className="card-body text-start p-0">{formComponent}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplicationLayout;
