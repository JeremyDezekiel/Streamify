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
        <div className="navbar w-full py-5 px-[5%] flex justify-between fixed text-xl text-white z-[1] ">
            <div className="flex items-center gap-12">
                <img className="w-[90px]" src="" alt=""/>
            </div>
            <div className="flex items-center">
                <ul className="flex list-none gap-5">
                    <li className="cursor-pointer"><Link to="/" className="no-underline text-white hover:text-[#e5e5e599]">Home</Link></li>
                    <li className="cursor-pointer"><Link to="/series" className="no-underline text-white hover:text-[#e5e5e599]">Series</Link></li>
                    <li className="cursor-pointer"><Link to="/movie" className="no-underline text-white hover:text-[#e5e5e599]">Movie</Link></li>
                    <li className="cursor-pointer"><Link to="/newandpopular" className="no-underline text-white hover:text-[#e5e5e599]">New & Popular</Link></li>
                </ul>
            </div>
            <div className="flex items-center gap-5">
                <img src={searchIcon} alt="SearchIcon" className="w-5 cursor-pointer" onClick={() => goToSeacrh()}/>
                <div className="navNotif flex items-center relative">
                    <img src={notifIcon} alt="notifIcon" className="w-5 cursor-pointer" />
                    <div className="dropdownNotif absolute top-full right-0 w-[400px] h-[100px] bg-[#191919e0] mt-6 py-[18px] px-[22px] rounded-sm z-[1] hidden text-center border-t-4 border-white hover:block">
                        <p className="text-2xl">No recent notification</p>
                    </div>
                </div>
                <div className="navProfile flex items-center gap-[10px] cursor-pointer relative">
                    <img src={profile} alt="profileIcon" className="rounded-[4px] w-9" />
                    <img src={dropdown} alt="dropdown" className="arrow transition-transform duration-500"/>
                    <div className="dropdown absolute top-full right-0 w-max bg-[#191919e0] py-[18px] px-[22px] rounded-sm z-[1] hidden hov">
                        <p className="text-2xl cursor-pointer">Edit Profiles</p><br />
                        <p className="text-2xl cursor-pointer">Settings</p><br />
                        <p className="text-2xl cursor-pointer">Account</p><br />
                        <p className="text-2xl cursor-pointer">Subscription</p><br />
                        <p className="text-2xl cursor-pointer">Privacy & Legal</p><br />
                        <p className="text-2xl cursor-pointer">Help</p><br /><hr />
                        <br />
                        <p className="text-2xl cursor-pointer">Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar