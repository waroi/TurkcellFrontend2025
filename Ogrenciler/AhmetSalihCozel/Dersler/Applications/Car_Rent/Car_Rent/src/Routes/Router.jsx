import React from 'react'
import { useRoutes } from 'react-router'
import SignIn from '../Pages/SignIn'
import CarStore from '../Pages/CarStore'
import CarDetails from '../Pages/CarDetails'
import Reservation from '../Pages/Reservation'
import LogIn from '../Pages/LogIn'
import UserRentedCars from '../Pages/UserRentedCars'

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <LogIn /> },
        { path: "/login", element: <LogIn /> },
        { path: "/signin", element: <SignIn /> },
        { path: "/carstore", element: <CarStore /> },
        { path: "/cardetails/:carId", element: <CarDetails /> },
        { path: "/reservation", element: <Reservation /> },
        { path: "/rentedcars", element: <UserRentedCars /> },
 ])
  return routes
}

export default Router

