import { useState } from "react";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import Navbar from "./components/organisms/Navbar/Navbar";
import Router from "./routes/router";

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
