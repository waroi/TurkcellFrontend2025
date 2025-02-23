import "./App.css";
import React from "react";
import SideBar from "./Organisms/SideBar";
import NavigationBar from "./Organisms/NavigationBar";
import { Box } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Box sx={{ display: "flex" , mt:10}}>
        <SideBar />
      </Box>
    </React.Fragment>
  );
}

export default App;
