import React from 'react'
import Navbar from '../components/Navbar'
import CarouselComponent from '../components/Carousel'
import Card from '../components/Card'

const HomeView = () => {
    return (
        <>
            <Navbar />
            <CarouselComponent />
            <Card />
        </>
    )
}

export default HomeView