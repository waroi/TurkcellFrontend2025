import * as React from "react";
import NavbarMid from "../Molecules/NavbarMid";
import NavbarLeft from "../Molecules/NavbarLeft";
import { Grid } from "@mui/material";

function NavigationBar() {
  return (
    <Grid container
      sx={{
        width: "100%",
        height: "80px",
        bgcolor: "black",
        alignItems:"center"
      }}
    >
      <Grid item xs={4}>
        <img style={{ padding: "10px 0", marginLeft: "20px", width: "50px" }}
          src="../imgs/Spotify_Logo.png"
          alt="Spotify Brand Logo"
        />
      </Grid>
      <Grid item xs={4}><NavbarMid /></Grid>
      <Grid item xs={4}><NavbarLeft /></Grid>
    </Grid>
  );
}

export default NavigationBar;
