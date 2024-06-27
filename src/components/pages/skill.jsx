import '../style/skill.css'
import "aos/dist/aos.css"

import Aos from 'aos'
import React from 'react'
import bs from '../images/bootstrap.png'
import css from '../images/css.png'
import html from '../images/html (1).png'
import js from '../images/js.png'
import react from '../images/react.png'
import tailwindcss from '../images/tailwind.png'
import { useEffect } from 'react'
import wordpress from '../images/wordpress1.png'

//import { Link } from 'react-router-dom'

const Skill = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh({duration:3000});
  }, [])
  return (
      <>
        <section className="skill">{/*=zoom-out=*/}
          <div className='skill-header'>
            <h2>My Skills </h2>
            <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1719525381/general/dot-removebg-preview_wo9xco.png" alt="" />
          </div>
          <div className="skill-wrapper">
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
              <img src={wordpress} alt="wordpress-logo"/>
            </div>

          </div>
        </section>


    </>
  )
}

export default Skill
