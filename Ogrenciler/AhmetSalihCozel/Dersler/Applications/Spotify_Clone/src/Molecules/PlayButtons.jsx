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
import { useEffect,useState } from "react";
import { useSpotify } from "../Context/SpotifyContext";

function PlayButtons() {
  const { player } = useSpotify();

  useEffect(() => {
    console.log(player)
  }, [player]);


  return (
    <Box
      className="btnGroup"
      sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
    >
      <IconButton>
        <Shuffle />
      </IconButton>
      <IconButton onClick={() => player.previousTrack()}>
        <SkipPrevious />
      </IconButton>
      <IconButton
        onClick={() => player.togglePlay()}
        id="toggleButton"
        sx={{ width: "50px", height: "50px" }}
      >
        <PlayCircleFilled sx={{ height: "50px", width: "50px" }} />
      </IconButton>
      <IconButton onClick={() => player.nextTrack()} id="skipNextButton">
        <SkipNextRounded />
      </IconButton>
      <IconButton>
        <Repeat />
      </IconButton>
    </Box>
  );
}

export default PlayButtons;

