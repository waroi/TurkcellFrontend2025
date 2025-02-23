import { Box, Button } from "@mui/material";
import * as React from "react";
import "./NavigationBar.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { grey } from "@mui/material/colors";
import { Scale } from "@mui/icons-material";

function NavigationBar() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        width: "100%",
        height: "80px",
        display: "flex",
        bgcolor: "black",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White-300x300.png"
          alt=""
        />
      </Box>
      <Box
        sx={{ my: "auto", display: "flex", gap: "10px", alignItems: "center" }}
      >
        <Tooltip title="Home">
          <Button
            variant="outlined"
            InputProps={{
              style: { "&:focus": { border: 3 }, borderColor: "primary.main" },
            }}
            sx={{
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              p: 3.5,
              minWidth: "unset",
              maxWidth: "unset",
              border: 0,
              bgcolor: "secondary.main",
              "&:focus": { border: 2 },
              BorderColor: "primary.main",
            }}
          >
            <HomeOutlinedIcon />
          </Button>
        </Tooltip>
        <TextField
          placeholder="Ne çalmak istiyorsun?"
          id="outlined-basic"
          variant="outlined"
          InputProps={{ style: { borderRadius: "30px" } }}
          sx={{
            bgcolor: "secondary.main",
            borderRadius: "30px",
            width: "300px",
            "& input::placeholder": { color: "primary.main" },
            "&:hover": { color: "primary.main" },
          }}
        ></TextField>
      </Box>
      <Box
        sx={{ my: "auto", display: "flex", gap: "10px", alignItems: "center" }}
      >
        <Button
          sx={{
            fontWeight: "700",
            bgcolor: "primary.main",
            color: "secondary.main",
            borderRadius: "20px",
          }}
        >
          Premium'u keşfet
        </Button>
        <Button
        InputProps={{borderRadius:"30px"}}
          sx={{
            fontWeight: "700",
            color: grey[600],
            display: "flex",
            gap: 1,
            alignItems: "center",
            borderRadius:"30px",
            pt:1,
            "&:hover":{transform:"scale(1.05)"}
          }}
        >
          <DownloadForOfflineOutlinedIcon style={{ color: grey[600] }} />
          Uygulamayı Yükle
        </Button>
        <Button><NotificationsOutlinedIcon style={{ color: grey[600] }}/></Button>
      </Box>
    </Box>
  );
}

export default NavigationBar;
