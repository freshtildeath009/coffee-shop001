import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Services from '../components/Services'
const Home = () => {
    return (
        <>
            <Hero />
            <Banner />
            <Services />
            <About />
            <Popular />
        </>
    )
}

export default Home
