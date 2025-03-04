import "./App.css";
import NavbarView from "./components/NavbarView";
import BannerView from "./components/BannerView";
import BooksView from "./components/BooksView";
import SpecialOfferView from "./components/SpecialOfferView";
import SubscribeView from "./components/SubscribeView";
import FooterView from "./components/FooterView";

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
