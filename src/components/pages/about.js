import './about.css'
import "aos/dist/aos.css"

import React, {useState} from 'react'

import Aos from 'aos'
import emf from '../images/my-profile-pix.jpg'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh({duration:3000,once:false});
  }, [])

  const [click, setClick] = useState(false);
  const Toggle = () => setClick(!click);

  /*1 GOVERNOR. 8 SENATORS. 34 HOUSE OF REPS. 68 STATE OF ASSEMBLY MEMBERS. */


  return (
    <>
      <section className="about" id='about'>
        <h1>Emmanuel Mkpurunchi</h1>
        <div className="about-container">
          <div className="about-box" id='name' data-aos="flip-right">

            <p>
              I am a self motivated web developer and tech enthusiast, with expertise in
              developing designs into fully functionl websites. <br />
              My stack covers HTML5, CSS3, JavaScript, SAAS, React JS, Bootstrap, and WordPress.
              I also build your website and web application to mobile responsive. <br /> I am a team
              player and like collaborating with a team of like mind. I enjoy learning new skills
              and self development in order to attain execellence. Delivering quality service and
              client's satisfaction is my utmost concern.<br />
              I have also received numerous hands-on training as regarding web development
              and software engineering in general, which includes but not limited to: Ingressive4Good X
              Zuri training 2022 (frontend/Node Js), CWW Tech Africa cohort 2022 (frontend). <br />
              With my experience in web development, I have been able to carry out the following projects
              which can be seen in the project section of this site.
            </p>
            <button className='hire-button' id='hire-button' onClick={Toggle}><a href="https://wa.me/23407034534697" target="_blank" rel="noreferrer">Hire me &#8663;</a> </button>
          </div>
          <div className="about-box" id='pix-box' data-aos="flip-left">
            <img src={emf} alt="profile-pix" className='profile-pix' />
          </div>

          {/*click &&
            <div className='hire-me-modal' id='hire-me-modal'>
              <div className="modal-content" id='modal-content'>
                <p><b>Phone Number:</b> 07034534697</p>
                <p> <b>Email: </b> emf0046@gmail.com</p>
              </div>
          </div>
          */}
        </div>
      </section>

    </>
  )
}

export default About
