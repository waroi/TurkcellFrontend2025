import "./App.css";
import React from "react";
import SideBar from "./Organisms/SideBar";
import MusicPage from "./Organisms/MusicPage";
import NavigationBar from "./Organisms/NavigationBar";
import BotControlFooter from "./Organisms/BotControlFooter";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <Box sx={{height:"100%",width:"100%", display:"flex",flexDirection:"column"}}>
        <NavigationBar/>
        <Grid container sx={{ display: "flex", height: "100%" }}>
          <Grid item sm={3}><SideBar/></Grid>
          <Grid item sm={9}><MusicPage/></Grid>
        </Grid>
        <BotControlFooter/>
      </Box>
    </React.Fragment>
  );
}

export default App;
