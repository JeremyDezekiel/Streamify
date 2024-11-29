import React from "react"
import './Hero.css'
import playIcon from '../../assets/playIcon.png'
import infoIcon from '../../assets/infoIcon.png'
import replayIcon from '../../assets/replayIcon.png'
import Cards from '../../components/Cards/Cards'

function Hero() {
    return (
        <>
        <div className="hero">
            <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXHmi6uJcTXcB8nDD1fHqkT3_F98Ay_uTmhhK8vY0OeDOtoDEXQYJ2wJ_qgcoHnfDDULEHSjzdbKsEcuykDm87j4RsvE0DI9O5IR.webp?r=de5" alt="heroImg" className="heroImg" />
            <div className="heroTitle">
                <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABc4MOtQa52lcyRrGJ_qZSmTv9_P-Ybu96c6P3HHIPg8wm8e2FI-dmaJ4cQ1tL92EQlNEbZN0QrYiJ5pdJHmGcc2nuw3I63ej3GOG9PovudOjGkhSMB73ZLkf7E_0-3Znfo9gmhqx05xesi7NEEaD7JuA1dDbM3ryriXecVv0qWAuWvuVaM338g.webp?r=c3b" alt="heroTitle" className="titleImg" />
                <p>Woo Do-hwan ("Bloodhounds") plays a drifter who goes with the flow — until startling news sparks a quest to find his biological father.</p>
                <div className="button">
                    <div className="heroBtn">
                        <button className="btn">
                            <img src={playIcon} alt="playIcon" />
                            <span>Play</span>
                        </button>
                        <button className="btn infoBtn">
                            <img src={infoIcon} alt="infoIcon" />
                            <span>More Info</span>
                        </button>
                    </div>
                    <div className="replayAge">
                        <img src={replayIcon} alt="replayIcon" />
                        <span>16 +</span>
                    </div>
                </div>
                <Cards/>
            </div>
        </div>
        <div className="categoryCards">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
        </>
    )
}

export default Hero