"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useUserStore from "../Store/userStore";

const CarStore = () => {
  const cars = useUserStore((state) => state.cars);
  console.log(cars.cars);

  return (
    <Grid container spacing={3}>
      {cars.cars?.map((car, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={car.imageUrl}
              title={car.brand}
            />
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
            <CardActions>
              <Button size="small">Kirala</Button>
              <Button size="small">İncele</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CarStore;
