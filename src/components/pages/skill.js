import '../style/skill.css'
import "aos/dist/aos.css"

import Aos from 'aos'
import React from 'react'
import bs from '../images/bootstrap-logo.png'
import css from '../images/css3-logo.svg'
import cv from '../images/EMMANUEL FRIDAY MKPURUNCHI-LATEST-CV.pdf'
import html from '../images/1200px-HTML5_logo.png'
import js from '../images/JavaScript-Logo.png'
import react from '../images/react-js-logo.png'
import tailwindcss from '../images/tailwindcss.png'
import { useEffect } from 'react'

//import { Link } from 'react-router-dom'

const Skill = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh({duration:4000});
  }, [])
  return (
      <>
        <section className="skill" id="skill" data-aos="flip-left">
            <h1>My Skills</h1>
            <section className="skill-wrapper">
                <div>
                  <img src={ bs } alt="bootstrap5-logo" />
                </div>
                <div>
                  <img src={ css } alt="css3-logo" />
                </div>
                <div>
                  <img src={ tailwindcss } alt="tailwind-css-logo" />
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
                <div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQib0qEXu0xxBZlWTF8LUhZZkLOtIYvdm8GUg&usqp=CAU" alt="wordpress-logo"/>
                </div>

            </section>
        <a href={cv} style={{ texetAlign:'center'}} download >View CV </a>
        </section>


    </>
  )
}

export default Skill
