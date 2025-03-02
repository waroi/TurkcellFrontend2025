import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import {
  PlayCircleFilled,
  Repeat,
  Shuffle,
  SkipNextRounded,
  SkipPrevious,
} from "@mui/icons-material";
import { useEffect } from "react";

function PlayButtons() {

  return (
    <Box
      className="btnGroup"
      sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
    >
      <IconButton>
        <Shuffle />
      </IconButton>
      <IconButton id="skipPreviousButton">
        <SkipPrevious />
      </IconButton>
      <IconButton id="toggleButton" sx={{ width: "50px", height: "50px" }}>
        <PlayCircleFilled sx={{ height: "50px", width: "50px" }} />
      </IconButton>
      <IconButton id="skipNextButton">
        <SkipNextRounded />
      </IconButton>
      <IconButton>
        <Repeat />
      </IconButton>
    </Box>
  );
}

export default PlayButtons;

