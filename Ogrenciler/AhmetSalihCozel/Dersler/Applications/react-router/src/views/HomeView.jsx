import React, { lazy } from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import GifSection from '../components/Gift/Gift'
import Footer from '../components/Footer/Footer'

const Products = lazy(() => import('../components/Products/Products'));
const Faq = lazy(() => import('../components/Faq/Faq'))
const About = lazy(() => import('../components/About/About'))
const Contact = lazy(() => import('../components/Contact/Contact'))


const HomeView = () => {
    return (
        <>
            <Header />
            <Banner />
            <Products />
            <About />
            <GifSection />
            <Faq />
            <Contact />
            <Footer />
        </>
    )
}

export default HomeView