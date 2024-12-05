import React from "react"
// import './Navbar.css'
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
        // <div className="navbar w-full py-5 px-[5%] flex justify-between fixed text-xl text-white z-[1] ">
        //     <div className="flex items-center gap-12">
        //         <img className="w-[90px]" src="" alt=""/>
        //     </div>
        //     <div className="flex items-center">
        //         <ul className="flex list-none gap-5">
        //             <li className="cursor-pointer"><Link to="/" className="no-underline text-white hover:text-[#e5e5e599]">Home</Link></li>
        //             <li className="cursor-pointer"><Link to="/series" className="no-underline text-white hover:text-[#e5e5e599]">Series</Link></li>
        //             <li className="cursor-pointer"><Link to="/movie" className="no-underline text-white hover:text-[#e5e5e599]">Movie</Link></li>
        //             <li className="cursor-pointer"><Link to="/newandpopular" className="no-underline text-white hover:text-[#e5e5e599]">New & Popular</Link></li>
        //         </ul>
        //     </div>
        //     <div className="flex items-center gap-5">
        //         <img src={searchIcon} alt="SearchIcon" className="w-5 cursor-pointer" onClick={() => goToSeacrh()}/>
        //         <div className="navNotif flex items-center relative">
        //             <img src={notifIcon} alt="notifIcon" className="w-5 cursor-pointer" />
        //             <div className="dropdownNotif absolute top-full right-0 w-[400px] h-[100px] bg-[#191919e0] mt-6 py-[18px] px-[22px] rounded-sm z-[1] hidden text-center border-t-4 border-white hover:block">
        //                 <p className="text-2xl">No recent notification</p>
        //             </div>
        //         </div>
        //         <div className="navProfile flex items-center gap-[10px] cursor-pointer relative">
        //             <img src={profile} alt="profileIcon" className="rounded-[4px] w-9" />
        //             <img src={dropdown} alt="dropdown" className="arrow transition-transform duration-500"/>
        //             <div className="dropdown absolute top-full right-0 w-max bg-[#191919e0] py-[18px] px-[22px] rounded-sm z-[1] hidden hov">
        //                 <p className="text-2xl cursor-pointer">Edit Profiles</p><br />
        //                 <p className="text-2xl cursor-pointer">Settings</p><br />
        //                 <p className="text-2xl cursor-pointer">Account</p><br />
        //                 <p className="text-2xl cursor-pointer">Subscription</p><br />
        //                 <p className="text-2xl cursor-pointer">Privacy & Legal</p><br />
        //                 <p className="text-2xl cursor-pointer">Help</p><br /><hr />
        //                 <br />
        //                 <p className="text-2xl cursor-pointer">Sign Out</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <nav className="px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded bg-transparent">
            <div className="mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center cursor-pointer">
                    <img className="mr-3 h-6 sm:h-9" src="" alt="" />
                    <span className="self-center text-xl font-semibold">Movie.com</span>
                </div>
                <div className="flex md:order-2 gap-4">
                    <img src="/src/assets/searchIcon.svg" alt="SearchIcon" className="w-5 cursor-pointer" onClick={() => goToSeacrh()}/>
                    <div className="flex items-center justify-center space-x-4 rounded cursor-pointer" data-testid="flowbite-avatar">
                        <div className="relative">
                            <img alt="User settings" src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABV7Sri1-D7qEbxbugWRmCLNbtHHf8ZnmqzUv-mNSrHyzV8wW79qYqLFYhCXARsp6d87_p46hVjDnj1qCMpmsaugwMo9nLr8.png?r=ddf" className="rounded-full h-10 w-10" data-testid="flowbite-avatar-img" />
                        </div>
                    </div>
                    <button data-testid="flowbite-navbar-toggle" className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden">
                        <span className="sr-only">Open main menu</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" className="h-6 w-6 shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div data-testid="flowbite-navbar-collapse" className="w-full md:block md:w-auto hidden">
                    <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                        <li><Link to="/" className="no-underline hover:text-[#e5e5e599]">Home</Link></li>
                        <li><Link to="/series" className="no-underline hover:text-[#e5e5e599]">Series</Link></li>
                        <li><Link to="/movie" className="no-underline hover:text-[#e5e5e599]">Movie</Link></li>
                        <li><Link to="/newandpopular" className="no-underline hover:text-[#e5e5e599]">New &amp; Popular</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar