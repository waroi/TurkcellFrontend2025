import * as React from "react";
import Box from "@mui/material/Box";
import "./PlayBar.css"
import { useSpotify } from "../Context/SpotifyContext";

function CurrentPlaying() {
  const {track, setTrack} = useSpotify();
  return (
    <Box sx={{display:"flex", alignItems:"center",justifyContent:"left",height:"100%" ,gap:2}}>
              <img src={track?.album.images[0].url || "./imgs/Spotify_Logo.png"} style={{marginLeft: "20px",width:"60px", height:"60px", borderRadius:"5px"}} alt="Song Image" />
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", width:"fit-content"}}>
            <p style={{margin:0}}>{track?.name || "default"}</p>
            <p style={{margin:0}}>{track?.artists[0].name || "default"}</p>
      </Box>
    </Box>
  );
}

export default CurrentPlaying;
