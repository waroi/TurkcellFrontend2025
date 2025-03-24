const ErrorState = ({ message = "An error occurred" }) => {
	return (
		<div className="container mt-5 pt-3">
			<div className="alert alert-danger" role="alert">
				{message}
			</div>
		</div>
	);
};

export default ErrorState;
