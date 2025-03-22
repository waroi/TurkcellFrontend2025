"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./Templates/Footer";
import Header from "./Templates/Header";
import { red } from "@mui/material/colors";
import Router from "./Routes/Router";
import "./App.css";
import { BrowserRouter } from "react-router";
import useUserStore from "./Store/userStore";
import { useEffect } from "react";
import { Container } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  const getCars = useUserStore((state) => state.getCars);
  useEffect(() => {
    getCars();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="md">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
