import "./App.scss";
import BannerView from "./components/BannerView";
import BooksView from "./components/BooksView";
import FooterView from "./components/FooterView";
import NavbarView from "./components/NavBarView";
import SpecialOfferView from "./components/SpecialOfferView";
import SubscribeView from "./components/SubscribeView";

function App() {
	return (
		<>
			<NavbarView />
			<BannerView />
			<BooksView />
			<SpecialOfferView />
			<SubscribeView />
			<FooterView />
		</>
	);
}

export default App;
