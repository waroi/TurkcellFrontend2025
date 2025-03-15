import React from 'react'
import { useRoutes } from 'react-router'
import SignIn from '../Pages/SignIn'
import CarStore from '../Pages/CarStore'
import CarDetails from '../Pages/CarDetails'
import Reservation from '../Pages/Reservation'

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <SignIn /> },
        { path: "/carstore", element: <CarStore /> },
        { path: "/cardetail/:carname", element: <CarDetails /> },
        { path: "/reservation", element: <Reservation /> },
 ])
  return routes
}

export default Router

