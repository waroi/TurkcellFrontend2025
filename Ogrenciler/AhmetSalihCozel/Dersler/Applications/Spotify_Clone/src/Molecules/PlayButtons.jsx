import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { PlayCircleFilled, Repeat, Shuffle, SkipNextRounded, SkipPrevious } from "@mui/icons-material";

function PlayButtons() {
  return (
    <Box className="btnGroup" sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
    <IconButton><Shuffle/></IconButton>
    <IconButton><SkipPrevious/></IconButton>
    <IconButton sx={{width:"50px", height:"50px"}} ><PlayCircleFilled sx={{height:"50px",width:"50px"}}/></IconButton>
    <IconButton><SkipNextRounded/></IconButton>
    <IconButton><Repeat/></IconButton>
  </Box>
  );
}

export default PlayButtons;
