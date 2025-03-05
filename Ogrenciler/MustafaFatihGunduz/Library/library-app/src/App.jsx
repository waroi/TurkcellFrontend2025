import "./App.scss";
import BannerView from "./components/BannerView";
import BooksView from "./components/BooksView";
import FooterView from "./components/FooterView";
import NavbarView from "./components/NavbarView";
import SpecialOfferView from "./components/SpecialOfferView";
import SubscribeView from "./components/SubscribeView";
import { ThemeProvider } from "./context/ThemeContext";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbpY9awbFIBhcB45nn6vlZfiaDikV5u0o",
  authDomain: "kitapdunyasi-4853e.firebaseapp.com",
  projectId: "kitapdunyasi-4853e",
  storageBucket: "kitapdunyasi-4853e.firebasestorage.app",
  messagingSenderId: "778458505902",
  appId: "1:778458505902:web:122e1c56a7aeb72a58833f",
  measurementId: "G-W3K46KQGWB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
