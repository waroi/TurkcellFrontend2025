import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeView from "../views/HomeView";
import Navbar from "../components/Navbar";
import Router from "./routes/Routes";

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
