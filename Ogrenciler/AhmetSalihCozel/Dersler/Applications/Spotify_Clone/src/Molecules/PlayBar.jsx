import * as React from "react";
import Box from "@mui/material/Box";
import "./PlayBar.css"

function PlayBar() {
  return (
    <Box sx={{width:"100%", display:"flex", alignItems:"center",justifyContent:"center",gap:2}}>
    <p className="currentTime">00:00</p>
    <div className="playBar">
      <div className="playBarInner">
      </div>
      <div className="playBarThumb"></div>
    </div>
    <p className="totalTime">00:00</p>
    </Box>
  );
}

export default PlayBar;
