import * as React from "react";
import Box from "@mui/material/Box";
import "./PlayBar.css"

function CurrentPlaying() {
  return (
    <Box sx={{display:"flex", alignItems:"center",justifyContent:"left",height:"100%" ,gap:2}}>
              <img src="./imgs/Spotify_Logo.png" style={{padding: "10px 0",marginLeft: "20px",width:"60px", height:"60px", border:"1px solid"}} alt="Song Image" />
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", width:"fit-content"}}>
            <p style={{margin:0}}>Song Title</p>
            <p style={{margin:0}}>Artist</p>
      </Box>
    </Box>
  );
}

export default CurrentPlaying;
