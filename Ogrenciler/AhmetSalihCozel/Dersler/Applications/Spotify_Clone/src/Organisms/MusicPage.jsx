import * as React from "react";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

function MusicPage() {
  return (
    <Box sx={{ width: "100%", height:"100%", bgcolor: grey[800], py:1.5,pr:1.5}}>
      <Box sx={{height:"100%", bgcolor: "secondary.main" , color:"primary.main", borderRadius:3}}>
        Hello
      </Box>
    </Box>
  );
}

export default MusicPage;
