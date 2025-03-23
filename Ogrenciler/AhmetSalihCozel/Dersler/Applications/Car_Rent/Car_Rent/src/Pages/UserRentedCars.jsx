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
import { useNavigate } from "react-router";

function UserRentedCars() {
    const user = localStorage.getItem("user")
    const cars = useUserStore((state) => state.cars);
    const rentCar = useUserStore((state) => state.rentCar);
    const cancelRentCar = useUserStore((state) => state.cancelRentCar);
    const getCars = useUserStore((state) => state.getCars);
    const navigate = useNavigate()
  
    const userRentedCars = cars.filter((car)=>car.rentedBy === localStorage.getItem("user"))

    useEffect(()=>{
      if(cars.length === 0){
        getCars()
      }
      },[cars])
  return (
    <Grid container spacing={3}>
      {userRentedCars?.map((car, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
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
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {car.model}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mt:2 }}>
                {car.productionYear}
              </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
              <Button onClick={()=>rentCar(car.carId,user)} size="small">Kirala</Button>
              <Button onClick={()=>navigate(`/cardetails/${car.carId}`)} size="small">İncele</Button>
              <Button onClick={()=>cancelRentCar(car.carId,user)} size="small">Vazgeç</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default UserRentedCars