import { Box, Button } from "@mui/material";
import * as React from "react";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { grey } from "@mui/material/colors";


export default function NavbarLeft() {
    return (
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center", justifyContent:"right" }}>
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
                InputProps={{ borderRadius: "30px" }}
                sx={{
                    fontWeight: "700",
                    color: grey[600],
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    borderRadius: "30px",
                    pt: 1,
                    "&:hover": { transform: "scale(1.05)" }
                }}
            >
                <DownloadForOfflineOutlinedIcon style={{ color: grey[600] }} />
                Uygulamayı Yükle
            </Button>
            <Button><NotificationsOutlinedIcon style={{ color: grey[600] }} /></Button>
        </Box>
    )

}