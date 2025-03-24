import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import CarRentalIcon from "@mui/icons-material/CarRental";
import { useNavigate } from "react-router";
import useUserStore from "../Store/userStore";

const Header = () => {
  const user = useUserStore((state)=>state.user)
  const fetchUser = useUserStore((state)=>state.fetchUser)
  const userId = localStorage.getItem("user")
  const navigate = useNavigate();

  useEffect(()=>{
    fetchUser(userId)
  },[])


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Menü açma/kapatma fonksiyonları
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <nav>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "primary.main", mb: 5, p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CarRentalIcon sx={{ fontSize: 70, color: "secondary.main", mx: 2 }} />
            <Typography onClick={() => navigate("/carstore")} variant="h3" sx={{ color: "secondary.main", fontWeight: 700 }}>
              ShowRoom
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", border:"1px solid", borderColor:"secondary.main", p:1, px:1, borderRadius:"2rem"}}>
            <IconButton onClick={handleClick} sx={{ p: 0 }}>
            <Avatar>{user?.userName?.charAt(0)}</Avatar>
            </IconButton>
            <Typography sx={{ ml: 1, color: "white", fontWeight: 600 }}>{user?.userName}</Typography>
          </Box>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={() => { navigate("/rentedcars"); handleClose(); }}>Kiraladığım Araçlar</MenuItem>
            <MenuItem onClick={() => { navigate("/"); handleClose(); }}>Çıkış Yap</MenuItem>
          </Menu>
        </Box>
      </nav>
    </React.Fragment>
  );
};

export default Header;
