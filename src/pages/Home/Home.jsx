import React from "react"
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Hero/>
            <Footer/>
        </div>
    )
}

export default Home