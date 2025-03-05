import "./App.scss";
import { ThemeProvider } from "./context/ThemeContext";
import NavbarView from "./components/NavbarView";
import BannerView from "./components/BannerView";
import BooksView from "./components/BooksView";
import SpecialOfferView from "./components/SpecialOfferView";
import SubscribeView from "./components/SubscribeView";
import FooterView from "./components/FooterView";
import app from "../firebase";
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
