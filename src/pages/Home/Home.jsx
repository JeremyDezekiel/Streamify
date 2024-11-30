import React from "react"
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'

function Home(props) {
    return (
        <div className="home">
            <Navbar/>
            <Hero playing={props.playing} popular={props.popular} topRated={props.topRated} upcoming={props.upcoming}/>
            <Footer/>
        </div>
    )
}

export default Home