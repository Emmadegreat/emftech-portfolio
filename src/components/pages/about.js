import './about.css'

import React, {useState} from 'react'

import emf from '../images/my-profile-pix.jpg'

const About = () => {

  const [click, setClick] = useState(false);
  const Toggle = () => setClick(!click);

  
  return (
    <>
      <section className="about" id='about'>
        <div className="about-container">
          <div className="about-box" id='name'>
            <h1>Emmanuel Mkpurunchi</h1>
            <p>
              I am a freelancer frontend web developer, with expertise in developing designs
              into fully functionl websites. I have one and half a year working experience in frontend
              web developemt with the latest web technologies, like React Js, Bootstrap5 and so on.
              I also build your web application to mobile responsive.
            </p>
            <button className='hire-button' id='hire-button' onClick={Toggle}><a href="http://" target="_blank" rel="noopener noreferrer"></a> Hire me &#8663;</button>
          </div>
          <div className="about-box" id='pix-box'>
            <img src={emf} alt="profile-pix" className='profile-pix' />
          </div>
          
          {click &&
            <div className='hire-me-modal' id='hire-me-modal'>
              <div className="modal-content" id='modal-content'>
                <p><b>Phone Number:</b> 07034534697</p>
                <p> <b>Email: </b> emf0046@gmail.com</p>
              </div>
          </div>

          }
        </div>
      </section>
      
    </>
  )
}

export default About
