import React from "react"
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Cards from '../../components/Cards/Cards'

function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Hero/>
            <Cards/>
        </div>
    )
}

export default Home