import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CarRentalIcon from "@mui/icons-material/CarRental";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "secondary.main",
        py: 4,
        px: 2,
        mt: 5,
      }}
    >
      {/* Üst Kısım */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CarRentalIcon sx={{ fontSize: 50, color: "secondary.main", mr: 1 }} />
          <Typography variant="h5" fontWeight="bold">
            ShowRoom
          </Typography>
        </Box>

        {/* Linkler */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Typography variant="body1" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
            Hakkımızda
          </Typography>
          <Typography variant="body1" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
            Hizmetlerimiz
          </Typography>
          <Typography variant="body1" sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
            İletişim
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="body2">© 2025 ShowRoom - Tüm Hakları Saklıdır</Typography>
        <Box>
          <IconButton sx={{ color: "secondary.main" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "secondary.main" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "secondary.main" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: "secondary.main" }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
