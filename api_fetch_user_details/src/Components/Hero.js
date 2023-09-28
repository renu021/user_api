import React from 'react'

import "./HeroStyle.css"
import HeroImg from "../Assests/hero.jpeg"

const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero-left">
            <h1 className="title">Training & Placement</h1>
            <p>Use a user-friendly and streamlined training and placement programme to efficiently arrange student placements, build a database of students, teach them in accordance with the needs of the modern industry, update the students' CVs, and allow the organization to hire viable candidates.</p>
        </div>

        <div className="hero-img">
          <img src={HeroImg} alt="h.img" className="hero-img" />
        </div>
        
    </div>
  )
}

export default Hero