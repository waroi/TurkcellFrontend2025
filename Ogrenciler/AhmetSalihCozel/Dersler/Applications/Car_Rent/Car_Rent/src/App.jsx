"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./Templates/Footer";
import Header from "./Templates/Header";
import { blue, red } from "@mui/material/colors";
import Router from "./Routes/Router";
import "./App.css";
import { BrowserRouter } from "react-router";
import useUserStore from "./Store/userStore";
import { useEffect } from "react";
import { Container } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: "#061E47",
    },
    secondary: {
      main: "#68A4F1",
    },
    third: {
      main: "#2B6AD0",
    },
    forth: {
      main: "#1F4591",
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
        <BrowserRouter>
          <Header />
          <Container maxWidth="md">
            <Router />
          </Container>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
