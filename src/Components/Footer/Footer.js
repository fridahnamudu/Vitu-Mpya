import React from 'react'
import './Footer.css'
import footerlogo from '../Assests/footerlogo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerlogo} alt=''/>
            <p id='vitu'>VITU</p><br/> <br/><p id='mpya'>MPYA</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-socials-icon">
            <div className="footer-icons-container">
                <InstagramIcon />
                <PinterestIcon />
                <WhatsAppIcon />
                <FacebookIcon />
                <XIcon />


            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer