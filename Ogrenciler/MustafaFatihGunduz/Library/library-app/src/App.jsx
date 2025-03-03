import "./App.css";
import BannerView from "./components/BannerView";
import NavbarView from "./components/NavBarView";
import BooksView from "./components/BooksView";
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
    </>
  );
}

export default App;
