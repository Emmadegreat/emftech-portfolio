import './about.css'

import React from 'react'
import emf from '../images/my-profile-pix.jpg'

const About = () => {
  
  return (
    <>
      <section className="about" id='about'>
        <div className="about-container">
          <div className="about-box" id='name'>
            <h1>Emmanuel Mkpurunchi</h1>
            <p>
              I am a freelancer frontend web developer, with expertise in developing designs
              into fully functionl websites. I have three years working experience in frontend
              web developemt with the latest web technologies. Bring your ideas and work, my team
              and I will bring it to life.
            </p>
            <button className='hire-button' id='hire-button'>Hire me &#8663;</button>
          </div>
          <div className="about-box" id='pix-box'>
            <img src={emf} alt="profile-pix" className='profile-pix' />
          </div>
        </div>
      </section>
      
    </>
  )
}

export default About
