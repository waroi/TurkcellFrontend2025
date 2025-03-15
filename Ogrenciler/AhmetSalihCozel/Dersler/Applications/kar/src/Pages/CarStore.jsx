import React from 'react'
import carStore from '../Store/carStore'
import Container from '@mui/material/Container'


const CarStore = () => {
  const {car} = carStore((state)=>state)
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={6} s={12}>
            
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CarStore