import '../style/project.css'
import "aos/dist/aos.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {projects} from "../data"
import { FaGithubSquare, FaLink } from 'react-icons/fa'
import { useEffect, useState } from 'react'

import Aos from 'aos'
import { Carousel } from 'react-responsive-carousel';
import React from 'react'


const Project = () => {

  useEffect(() => {
    Aos.init({duration:3000,once:false});
  }, [])

  /*const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);

  const SeeMore = () => setToggle(!toggle);
  const Close = () =>setClick(!click)*/


  return (
      <section className='project' id='project'>
        <h1>
          My Projects <span>.</span>
        </h1>

          <div className="carousel-cont">
            <Carousel
              autoPlay
              infiniteLoop
              interval={4000}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              dynamicHeight={false}
            >


            {
              projects.map(({name, imgurl, link, github, text, id}) => (
                <div key={id}>
                  <img src={imgurl} alt={name} style={{ height: "350px", width:"100%" }} />
                  <div>
                    <p style={{ color: "#fff", paddingTop: "1rem", textAlign:"start" }}>
                      {text}
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.5rem" }}>
                      <a href={link} target='_blank' rel="noreferrer">
                        {<FaLink size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />}
                      </a> |
                      <a href={github} target='_blank' rel="noreferrer">
                        {<FaGithubSquare size={20} style={{ color: "#fff", marginLeft: "0.5rem" }} />}
                      </a>
                    </div>
                  </div>
                </div>
              ))


            }

            </Carousel>
          </div>

    </section>
  )
}

export default Project


