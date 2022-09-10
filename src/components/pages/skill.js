import './skill.css'

import React from 'react'
import bs from '../images/bootstrap-logo.png'
import css from '../images/css3-logo.svg'
import html from '../images/1200px-HTML5_logo.png'
import js from '../images/JavaScript-Logo.png'
import react from '../images/react-js-logo.png'

const Skill = () => {
  return (
      <>
        <section className="skill" id="skill">
            <h1>My Skills</h1>
            <section className="skill-wrapper">
                <div>
              <img src={ bs } alt="bootstrap5-logo" />
                </div>
                <div>
              <img src={ css } alt="css3-logo" />
                </div>
                <div>
              <img src={ html } alt="html5-logo" />
                </div>
                <div>
              <img src={ js } alt="js-logo" />
                </div>
                <div>
              <img src={ react } alt="react-logo" />
                </div>
            </section>
        </section>
        
      
    </>
  )
}

export default Skill
