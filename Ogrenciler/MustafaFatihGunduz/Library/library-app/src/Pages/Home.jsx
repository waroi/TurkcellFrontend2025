import "../App.scss";
import BannerView from "../components/BannerView";
import BooksView from "../components/BooksView";
import Footer from "../components/FooterView";
import NavbarView from "../components/NavbarView";
import SpecialOfferView from "../components/SpecialOfferView";
import SubscribeView from "../components/SubscribeView";

const Home = () => {
	return (
		<>
			<NavbarView />
			<BannerView />
			<BooksView />
			<SpecialOfferView />
			<SubscribeView />
			<Footer />
		</>
	);
};

export default Home;
