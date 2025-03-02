import * as React from "react";
import Box from "@mui/material/Box";
import PlayBar from "../Molecules/PlayBar";
import PlayButtons from "../Molecules/PlayButtons";
import CurrentPlaying from "../Molecules/CurrentPlaying";
import { Grid } from "@mui/material";

function BotControlFooter() {
  return (
    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ height: "120px", bgcolor: "black", color: "primary.main" }}>
      <Grid item xs={4} >
        <CurrentPlaying />
      </Grid>
      <Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 1 }}>
        <PlayButtons />
        <PlayBar />
      </Grid>
      <Grid item xs={4} >
      </Grid>
    </Grid>
  );
}

export default BotControlFooter;
