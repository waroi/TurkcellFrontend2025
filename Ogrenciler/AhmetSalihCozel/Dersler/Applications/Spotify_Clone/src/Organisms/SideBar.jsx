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


function  SideBar() {
  const {fetchPlayLists} = useSpotify();
  const [playList, setPlayList] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

  fetchPlayLists().then((resp)=>{setPlayList(resp)});


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
      {playList?.track?.name}

    </Box>

    </Box>

  );
}

export default SideBar;
