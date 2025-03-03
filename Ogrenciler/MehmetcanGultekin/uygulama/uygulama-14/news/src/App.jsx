import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import Router from "./router/Router";
import NewsView from "./views/NewsView";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
