const LoadingState = ({ message = "Loading job listings..." }) => {
	return (
		<div className="container mt-5 pt-3 text-center">
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
			<p className="mt-3">{message}</p>
		</div>
	);
};

export default LoadingState;
