import React from "react"
import './Footer.css'
import facebookIcon from '../../assets/facebookIcon.png'
import instagramIcon from '../../assets/instagramIcon.png'
import twitterIcon from '../../assets/twitterIcon.png'
import youtubeIcon from '../../assets/youtubeIcon.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerIcon">
                <img src={facebookIcon} alt=""/>
                <img src={instagramIcon} alt=""/>
                <img src={twitterIcon} alt=""/>
                <img src={youtubeIcon} alt=""/>
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <div className="buttonFooter">
                <button>Service Code</button>
            </div>
            <span className="copyright">
                © 1997-2024 Netflix, Inc.
            </span>
        </div>
    )
}

export default Footer