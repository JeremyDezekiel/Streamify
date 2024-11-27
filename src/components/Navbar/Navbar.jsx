import React from "react";
import './Navbar.css'
import searchIcon from '../../assets/searchIcon.svg'
import notifIcon from '../../assets/notifIcon.svg'
import profile from '../../assets/profile.png'
import dropdown from '../../assets/dropdown.svg'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarLeft">
                <img src="" alt=""/>
            </div>
            <div className="navbarMiddle">
                <ul>
                    <li>Home</li>
                    <li>Series</li>
                    <li>Movie</li>
                    <li>New & Popular</li>
                </ul>
            </div>
            <div className="navbarRight">
                <img src={searchIcon} alt="SearchIcon" className="icon" />
                <div className="navNotif">
                    <img src={notifIcon} alt="notifIcon" className="icon" />
                    <div className="dropdownNotif">
                        <p>No recent notification</p>
                    </div>
                </div>
                <div className="navProfile">
                    <img src={profile} alt="profileIcon" className="profileIcon" />
                    <img src={dropdown} alt="dropdown" />
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