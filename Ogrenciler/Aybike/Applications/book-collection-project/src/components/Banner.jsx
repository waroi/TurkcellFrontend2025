import { useUser } from "../context/UserContext";

const Banner = () => {
	const { user } = useUser();

	return (
		<div className="library-banner container d-flex-col align-items-center justify-content-center">
			{user === "Admin" ? (
				<h1>Manage Book Collection</h1>
			) : (
				<>
					<h1>My Book Collection</h1>
					<h4>Explore The Best Books on The World</h4>
				</>
			)}
		</div>
	);
};

export default Banner;
