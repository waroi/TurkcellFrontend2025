import "../App.scss";
import BannerView from "../components/BannerView";
import BooksView from "../components/BooksView";
import Footer from "../components/FooterView";
import NavbarView from "../components/NavbarView";
import PopularNow from "../components/PopularNow";
import Recommended from "../components/Recommended";
import SpecialOfferView from "../components/SpecialOfferView";
import SubscribeView from "../components/SubscribeView";
import { ThemeProvider } from "../context/ThemeContext";
import RightSide from "../Pages/RightSide";
import Sidebar from "../Pages/Sidebar";

const Home = () => {
	return (
		<>
			<ThemeProvider>
				<NavbarView />
				<div className="wrapper">
					<div className="side-left">
						<Sidebar />
					</div>
					<div className="side-middle d-flex flex-column align-items-center justify-content-center">
						<BannerView />
						<Recommended />
						<PopularNow />
						<BooksView />
						<SpecialOfferView />
						<SubscribeView />
						<Footer />
					</div>
					<div className="side-right">
						<RightSide />
					</div>
				</div>
			</ThemeProvider>
		</>
	);
};

export default Home;
