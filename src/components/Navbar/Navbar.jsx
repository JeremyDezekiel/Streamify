import React from "react"
import './Navbar.css'
import searchIcon from '../../assets/searchIcon.svg'
import notifIcon from '../../assets/notifIcon.svg'
import profile from '../../assets/profile.png'
import dropdown from '../../assets/dropdown.svg'
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
    const goToSeacrh = () => {
        navigate(`/search`)
    }

    return (
        <div className="navbar">
            <div className="navbarLeft">
                <img src="" alt=""/>
            </div>
            <div className="navbarMiddle">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/series">Series</Link></li>
                    <li><Link to="/movie">Movie</Link></li>
                    <li><Link to="/newandpopular">New & Popular</Link></li>
                </ul>
            </div>
            <div className="navbarRight">
                <img src={searchIcon} alt="SearchIcon" className="icon" onClick={() => goToSeacrh()}/>
                <div className="navNotif">
                    <img src={notifIcon} alt="notifIcon" className="icon" />
                    <div className="dropdownNotif">
                        <p>No recent notification</p>
                    </div>
                </div>
                <div className="navProfile">
                    <img src={profile} alt="profileIcon" className="profileIcon" />
                    <img src={dropdown} alt="dropdown" className="test"/>
                    <div className="dropdown">
                        <p>Edit Profiles</p><br />
                        <p>Settings</p><br />
                        <p>Account</p><br />
                        <p>Subscription</p><br />
                        <p>Privacy & Legal</p><br />
                        <p>Help</p><br /><hr />
                        <br />
                        <p>Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar