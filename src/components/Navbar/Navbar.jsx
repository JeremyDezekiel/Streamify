import React, { useState } from "react"
import searchIcon from '../../assets/searchIcon.svg'
import profile from '../../assets/profile.png'
import logo from '../../assets/Streamifiy.png'
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState)
    }    
    
    const goToSearch = () => {
        navigate(`/search`)
    }

    return (
        <nav className="px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded bg-transparent">
            <div className="mx-auto flex flex-wrap items-center justify-between">
                <div className="flex items-center cursor-pointer">
                    <Link to="/" className="no-underline hover:text-[#e5e5e599]">
                        <img className="mr-3 h-6 sm:h-9" src={logo} alt="Logo"/>
                    </Link>
                </div>
                <div className="flex md:order-2 gap-4">
                    <img src={searchIcon} alt="SearchIcon" className="w-5 cursor-pointer" onClick={goToSearch} />
                    <div className="flex items-center justify-center space-x-4 rounded cursor-pointer" data-testid="flowbite-avatar">
                        <div className="relative">
                            <img alt="User settings" src={profile} className="rounded-full h-10 w-10" />
                        </div>
                    </div>
                    <button 
                        data-testid="flowbite-navbar-toggle" className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" onClick={toggleMenu}>
                        <span className="sr-only">Open main menu</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" aria-hidden="true" className="h-6 w-6 shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                        </svg>
                    </button>
                </div>
                <div data-testid="flowbite-navbar-collapse" className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                        <li><Link to="/" className="no-underline hover:text-[#e5e5e599]">Home</Link></li>
                        <li><Link to="/tvshows" className="no-underline hover:text-[#e5e5e599]">TV Show</Link></li>
                        <li><Link to="/movie" className="no-underline hover:text-[#e5e5e599]">Movie</Link></li>
                        <li><Link to="/newandpopular" className="no-underline hover:text-[#e5e5e599]">New &amp; Popular</Link></li>
                        <li><Link to="/favorite" className="no-underline hover:text-[#e5e5e599]">Favorites</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
