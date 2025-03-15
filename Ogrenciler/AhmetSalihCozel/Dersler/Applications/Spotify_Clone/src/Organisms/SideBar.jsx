import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ThumbUp } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { grey } from "@mui/material/colors";
import { useSpotify } from "../Context/SpotifyContext";
import api from "../api/api";



function  SideBar() {
  const [playList, setPlayList] = useState();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const token = import.meta.env.VITE_SPOTIFY_TOKEN;

  api(token, "https://api.spotify.com/v1/me/playlists", "GET").then((resp)=>{
    }
    // setPlayList(resp)}
    )

  // useEffect(()=>{
  //   response
  //     console.log(resp)
  //   })
  // },[playList])

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{height:"100%", bgcolor: grey[800], p:1.5}}>
      <Box sx={{height:"100%", bgcolor: "secondary.main" , color:"primary.main",borderRadius:3}}>
      <List sx={{display:"flex", justifyContent:"space-betweens"}} component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <ThumbUp/>
          </ListItemIcon>
          <ListItemText primary="Beğendiklerim" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AutoStoriesIcon/>
          </ListItemIcon>
          <ListItemText primary="Kitaplik" />
        </ListItemButton>
      </List>
      <div>{null}</div>


    </Box>

    </Box>

  );
}

export default SideBar;
