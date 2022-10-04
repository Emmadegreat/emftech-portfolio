import './skill.css'
import "aos/dist/aos.css"

import Aos from 'aos'
import React from 'react'
import bs from '../images/bootstrap-logo.png'
import css from '../images/css3-logo.svg'
import cv from '../images/Emmanuel-updated-cv-latest.pdf'
import html from '../images/1200px-HTML5_logo.png'
import js from '../images/JavaScript-Logo.png'
import react from '../images/react-js-logo.png'
import { useEffect } from 'react'

const Skill = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh({duration:2500});
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
                  <img src={ html } alt="html5-logo" />
                </div>
                <div>
                  <img src={ js } alt="js-logo" />
                </div>
                <div>
                  <img src={ react } alt="react-logo" />
              </div>

            </section>
        <a href={cv} style={{ texetAlign:'center'}} download >View CV </a>
        </section>


    </>
  )
}

export default Skill
