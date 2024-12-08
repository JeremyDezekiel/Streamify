import React from "react"
import facebookIcon from '../../assets/facebookIcon.png'
import instagramIcon from '../../assets/instagramIcon.png'
import twitterIcon from '../../assets/twitterIcon.png'
import youtubeIcon from '../../assets/youtubeIcon.png'

const Footer = () => {
    return (
        <div className="py-[30px] px-[6%] max-w-[1000px] my-0 mx-auto">
            <div className="flex my-10 mx-0 gap-5 lg:gap-5">
                <img className="w-[30px] cursor-pointer" src={facebookIcon} alt="facebookIcon"/>
                <img className="w-[30px] cursor-pointer" src={instagramIcon} alt="instagramIcon"/>
                <img className="w-[30px] cursor-pointer" src={twitterIcon} alt="twitterIcon"/>
                <img className="w-[30px] cursor-pointer" src={youtubeIcon} alt="youtubeIcon"/>
            </div>
            <ul className="grid mb-[30px] list-none text-[#808080] grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 ">
                <li className="hover:cursor-pointer hover:underline">Audio Description</li>
                <li className="hover:cursor-pointer hover:underline">Help Center</li>
                <li className="hover:cursor-pointer hover:underline">Gift Cards</li>
                <li className="hover:cursor-pointer hover:underline">Media Center</li>
                <li className="hover:cursor-pointer hover:underline">Investor Relations</li>
                <li className="hover:cursor-pointer hover:underline">Jobs</li>
                <li className="hover:cursor-pointer hover:underline">Terms of Use</li>
                <li className="hover:cursor-pointer hover:underline">Privacy</li>
                <li className="hover:cursor-pointer hover:underline">Legal Notices</li>
                <li className="hover:cursor-pointer hover:underline">Cookie Preferences</li>
                <li className="hover:cursor-pointer hover:underline">Corporate Information</li>
                <li className="hover:cursor-pointer hover:underline">Contact Us</li>
            </ul>
            <div className="mb-6">
                <button className="w-32 h-10 text-[#808080] border border-[#808080] bg-transparent cursor-pointer hover:text-white hover:bg-[#808080]">Service Code</button>
            </div>
            <span className="text-[#808080] text-sm">
                © 1997-2024 Streamify, Inc.
            </span>
        </div>
    )
}

export default Footer