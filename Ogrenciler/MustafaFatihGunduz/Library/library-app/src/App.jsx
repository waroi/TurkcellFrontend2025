import "./App.scss";
import BannerView from "./components/BannerView";
import BooksView from "./components/BooksView";
import FooterView from "./components/FooterView";
import NavbarView from "./components/NavbarView";
import SpecialOfferView from "./components/SpecialOfferView";
import SubscribeView from "./components/SubscribeView";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavbarView />
        <BannerView />
        <BooksView />
        <SpecialOfferView />
        <SubscribeView />
        <FooterView />
      </ThemeProvider>
    </>
  );
}

export default App;
