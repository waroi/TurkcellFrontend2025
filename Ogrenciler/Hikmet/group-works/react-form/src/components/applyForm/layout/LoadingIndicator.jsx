const LoadingIndicator = ({ message = "Yükleniyor..." }) => {
	return (
		<div className="container mt-5 pt-3 text-center">
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Yükleniyor...</span>
			</div>
			<p className="mt-3">{message}</p>
		</div>
	);
};

export default LoadingIndicator;
