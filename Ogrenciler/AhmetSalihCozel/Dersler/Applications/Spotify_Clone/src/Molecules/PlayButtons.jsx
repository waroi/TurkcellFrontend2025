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
import { useSpotify } from "../Context/SpotifyContext";

function PlayButtons() {
  const { player } = useSpotify();
  // const { setPlayClick, setPreviousClick, setNextClick, } = useSpotify();

  // const handlePlayClick = () => {
  //   setPlayClick((prevPlayClick) => !prevPlayClick);
  // };

  // const handleNextClick = () => {
  //   setPreviousClick((prevPlayClick) => !prevPlayClick);
  // };

  // const handlePreviousClick = () => {
  //   setNextClick((prevPlayClick) => !prevPlayClick);
  // };
  return (
    <Box
      className="btnGroup"
      sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}
    >
      <IconButton>
        <Shuffle />
      </IconButton>
      <IconButton onClick={()=>{player.previousTrack()}} id="skipPreviousButton">
        <SkipPrevious />
      </IconButton>
      <IconButton onClick={()=>{player.togglePlay()}} id="toggleButton" sx={{ width: "50px", height: "50px" }}>
        <PlayCircleFilled sx={{ height: "50px", width: "50px" }} />
      </IconButton>
      <IconButton onClick={()=>{player.nextTrack()}} id="skipNextButton">
        <SkipNextRounded />
      </IconButton>
      <IconButton>
        <Repeat />
      </IconButton>
    </Box>
  );
}

export default PlayButtons;

