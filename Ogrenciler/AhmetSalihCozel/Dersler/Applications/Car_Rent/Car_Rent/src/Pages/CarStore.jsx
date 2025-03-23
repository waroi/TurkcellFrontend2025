"use client";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useUserStore from "../Store/userStore";
import { useNavigate } from "react-router-dom";

const CarStore = () => {
  const user = localStorage.getItem("user")
  const cars = useUserStore((state) => state.cars);
  const rentCar = useUserStore((state) => state.rentCar);
  const cancelRentCar = useUserStore((state) => state.cancelRentCar);
  const getCars = useUserStore((state) => state.getCars);
  const navigate = useNavigate();


  useEffect(()=>{
    if(cars.length === 0){
      getCars()
    }
  },[cars])


  return (
    <Grid container spacing={3}>
      {cars?.map((car, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345, border:"1px solid", borderColor:"third.main", bgcolor:"secondary.main", color:"primary.main" }}>
            <CardMedia
              sx={{ height: 140, display:"flex", alignItems:"center", justifyContent:"center" }}
              image={car.imageUrl}
              title={car.brand}
            >
              <Typography variant="h4" sx={{color:"secondary.main",textAlign:"center",transform:"rotate(-20deg)", p:0.5, bgcolor:"primary.main", borderRadius:"1rem", display:car.isRented?`block`:"none" }}>Kiralandı</Typography>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.brand}
              </Typography>
              <Typography variant="body2" >
                {car.model}
              </Typography>
              <Typography variant="body1" >
                {car.productionYear}
              </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
              <Button variant="contained" onClick={()=>rentCar(car.carId,user)} size="small">Kirala</Button>
              <Button variant="contained" onClick={()=>navigate(`/cardetails/${car.carId}`)} sx={{fontSize:"1rem"}}>İncele</Button>
              <Button variant="contained" onClick={()=>cancelRentCar(car.carId,user)} size="small">Vazgeç</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CarStore;
