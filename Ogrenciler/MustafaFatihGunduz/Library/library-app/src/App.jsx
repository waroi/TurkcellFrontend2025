import "./App.scss";
import LoginScreen from "./components/LoginScreen";
import { ThemeProvider } from "./context/ThemeContext";
import app from "../firebase";
function App() {
  return (
    <>
      <ThemeProvider>
        {/* <NavbarView />
        <BannerView />
        <BooksView />
        <SpecialOfferView />
        <SubscribeView />
        <FooterView /> */}
        <LoginScreen />
      </ThemeProvider>
    </>
  );
}

export default App;
