import React from 'react'
import './Hero.css'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import hero_image from '../Assests/image1.png'

function Hero() {
  return (
    <div className='hero'> 
    <div className="hero-left">
        <h2> NEW ARRIVALS ONLY</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                < WavingHandIcon />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <ArrowCircleUpIcon />

        </div>
    </div>
    <div className="hero-right"></div>
    <img src= {hero_image} alt=''/>

    </div>

  )
}

export default Hero