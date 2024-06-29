import '../../assets/style/about.css'
import "aos/dist/aos.css"

import React, {useState} from 'react'

import Aos from 'aos'
import { TypeAnimation } from 'react-type-animation'
import cv from '../../assets/images/EMMANUEL_MKPURUNCHI_RESUME.pdf'
import emf from '../../assets/images/my-profile-pix.jpg'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh({duration:3000,once:false});
  }, [])

  const [click, setClick] = useState(false);
  const Toggle = () => setClick(!click);


  return (
    <>
      <section className="about" id='about'>

        <div className='namedisplay'>
          <TypeAnimation
            sequence={['Hi,', 1000, 'I am', 1000, 'Emmanuel Mkpurunchi', 1000, 'Web Developer', 1000,]}

            style={{ lineHeight: "1.2", color:"#d4d8dd"}}
            repeat={Infinity}
            speed={20}
            wrapper='h1'
          />
        </div>

        {/*<TypeAnimation
          sequence={[
            <span style={{ color: 'red' }}>Hi I am,</span>,
            1000,

            <span style={{ color: 'green' }}>Emmanuel Mkpurunchi</span>,
            1000,
            <span style={{ color: 'orange' }}>Web Developer</span>,
            1000,
          ]}
          style={{ fontSize: '2.2rem', lineHeight: '1.2' }}
          repeat={Infinity}
          speed={20}
          wrapper='h1'
        />*/}


        <div className="about-container">
          <div className="about-box" id='name'>

            <p>
              I am a self motivated web developer and tech enthusiast, with expertise in
              developing designs into fully functionl websites.
              My stack covers HTML5, CSS3, Tailwind CSS, JavaScript, SaSS, React JS, Bootstrap, WordPress, and Django.
              I also build your website and web application to mobile responsive.  I am a team
              player and like collaborating with a team of like mind. I enjoy learning new skills
              and self development in order to attain execellence. Delivering quality service and
              client's satisfaction is my utmost concern.
              I have also received numerous hands-on training as regarding web development
              and software engineering in general, which includes but not limited to: Ingressive4Good X
              Zuri training 2022 (frontend/Node Js), CWW Tech Africa cohort 2022 (frontend).
              With my experience in web development, I have been able to carry out the following projects
              which can be seen in the project section of this site.
            </p>
            <button className='hire-button' id='hire-button'><a href={cv} target="_blank" rel="noreferrer">View CV &#8663;</a> </button>
            {/*<button className='hire-button' id='hire-button'><a href="https://wa.me/23407034534697" target="_blank" rel="noreferrer">Hire me &#8663;</a> </button>*/}
          </div>

          <div className="about-box" id='pix-box'>
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
