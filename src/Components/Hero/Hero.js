import React from 'react'
import './Hero.css'
import waving_hand from '../Assests/wavinghang.png'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import hero_image from '../Assests/rightside3.png'

function Hero() {
  return (
    <div className='hero'> 
      <div className="hero-left">
          <h2> NEW ARRIVALS ONLY</h2>
          <div>
              <div className='hero-hand-icon'>
                  <p>new</p>
                  <img src={waving_hand} />
              </div>
              <p>Collections</p>
              <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
              <div>Latest Collection</div>
              <TrendingFlatIcon />

          </div>
      </div>
    <div className="hero-right">
      <img src= {hero_image} alt=''/>
    </div>

    </div>

  )
}

export default Hero