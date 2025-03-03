
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { Box, Button } from "@mui/material";
import * as React from "react";

export default function NavbarMid(){
    return(
        <Box
        sx={{ my: "auto", display: "flex", gap: "10px", alignItems: "center",justifyContent:"center"}}
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
    )
}