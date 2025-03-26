"use client";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import useUserStore from "../Store/userStore";

const CarDetails = () => {
  const user = localStorage.getItem("user")
  const rentCar = useUserStore((state) => state.rentCar);
  const { carId } = useParams();
  const navigate = useNavigate();
  const cars = useUserStore((state) => state.cars);
  const car = cars.find((c) => c.carId === carId);

  if (!car) {
    return <Typography variant="h5">Araç bulunamadı!</Typography>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ maxWidth: 600, p: 3, bgcolor: "secondary.main", color: "white" }}>
        <CardMedia
          component="img"
          height="300"
          image={car.imageUrl}
          alt={car.brand}
          sx={{ borderRadius: "10px" }}
        />
        <Typography variant="h4" sx={{color:"secondary.main",textAlign:"center",transform:"rotate(-20deg)", p:0.5, bgcolor:"primary.main", borderRadius:"1rem", display:car.isRented?`block`:"none" }}>Kiralandı</Typography>
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {car.brand} - {car.model}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Üretim Yılı: {car.productionYear}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Kira Bedeli: <strong>{car.rentValue}₺</strong>
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, textAlign:"left" }}>
           {car.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>Geri Dön</Button>
          <Button variant="contained" color="primary" size="large" disabled={(user !== car.rentedBy && car.rentedBy !== "")? true:false} onClick={()=>rentCar(carId,user)}>Kirala</Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CarDetails;
