import '../style/project.css'
import "aos/dist/aos.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { FaGithubSquare, FaLink } from 'react-icons/fa'
import { useEffect, useState } from 'react'

import Aos from 'aos'
import { Carousel } from 'react-responsive-carousel';
import React from 'react'

/*import e_store from '../images/e-store.png'
import github from '../images/github-logo.jpg'
import link from '../images/linkicon.png'
import login from '../images/court1.png'
import st_anthony from '../images/stanthony.png'
import tcc from '../images/tcc1.png'
import zuri from '../images/zuri1.png'*/

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

              <div>
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1713261221/logo_pfhdce.png" alt="SwiftMart" style={{height:"350px"}}/>
                <div>
                  <p style={{ color: "#fff", paddingTop: "1.3rem" }}>
                    A food items bulk purchase website for Swifttalk Limited to help streamline the
                    process and remove the hassels involved in the manual process.
                  </p>
                  <div style={{display:"flex",justifyContent:"center",paddingTop:"0.5rem"}}>
                    <a href="https://swiftmart.up.railway.app/" target='_blank' rel="noreferrer">
                      {<FaLink size={20} style={{ color: "#fff", marginRight: "0.5rem"}} />}
                    </a> |
                    <a href="https://github.com/Emmadegreat/swift/" target='_blank' rel="noreferrer">
                      {<FaGithubSquare size={20} style={{ color: "#fff", marginLeft: "0.5rem"}} />}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704380769/mdis_jbrm7n.png" alt="MDI School" style={{height:"350px"}}/>
                <div>
                  <p style={{ color: "#fff", paddingTop: "1.3rem" }}>
                    A school website developed for Mabel Divine International Schools.
                  </p>
                  <div style={{display:"flex",justifyContent:"center",paddingTop:"0.5rem"}}>
                    <a href="https://mabeldivineinternationalschools.com.ng/" target='_blank' rel="noreferrer">
                      {<FaLink size={20} style={{ color: "#fff", marginRight: "0.5rem"}} />}
                    </a> |
                    <a href="https://github.com/Emmadegreat/mabel-divine-international-school" target='_blank' rel="noreferrer">
                      {<FaGithubSquare size={20} style={{ color: "#fff", marginLeft: "0.5rem"}} />}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704381634/e-store1_lobgqy.png" alt="e-store website" style={{height:"350px"}}/>
                <div>
                  <p style={{color:"#fff",paddingTop:"1.3rem"}}>An e-commerce website, built with React JS and CSS..</p>

                  <div style={{display:"flex",justifyContent:"center",paddingTop:"0.5rem"}}>
                    <a href="https://e-store-blush.vercel.app/" target='_blank' rel="noreferrer">
                      {<FaLink size={20} style={{ color: "#fff", marginRight: "0.5rem"}} />}
                    </a> |
                    <a href="https://github.com/Emmadegreat/mystore" target='_blank' rel="noreferrer">
                      {<FaGithubSquare size={20} style={{ color: "#fff", marginLeft: "0.5rem"}} />}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704381719/cta1_lkmctx.png" alt="CTA website"/>
                <div>
                  <p style={{color:"#fff",paddingTop:"1.3rem"}}>I cloned the CWW TECH AFRICA (CTA) website using React JS and SASS.</p>

                  <div style={{display:"flex",justifyContent:"center",paddingTop:"0.5rem"}}>
                    <a href="https://cta-site.vercel.app/">
                      {<FaLink size={20} style={{ color: "#fff", marginRight: "0.5rem"}} />}
                    </a> |
                    <a href="https://github.com/Emmadegreat/CTA-site" target='_blank' rel="noreferrer">
                      {<FaGithubSquare size={20} style={{ color: "#fff", marginLeft: "0.5rem"}} />}
                    </a>
                  </div>
                </div>
              </div>

              {/*<div>
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704381953/tcc1_bbmvvg.png" alt="TCC website"/>
                <div>
                  <p style={{ color: "#fff", paddingTop: "1.3rem" }}>
                    TCC is a civil engineering construction company. This site enables the company to showcase
                    their competency and easily connect with clients.
                  </p>

                  <div style={{display:"flex",justifyContent:"center",paddingTop:"0.5rem"}}>
                    <a href="https://tcc-peach.vercel.app/">
                      {<FaLink size={20} style={{ color: "#fff", marginRight: "0.5rem"}} />}
                    </a> |
                    <a href="https://github.com/Emmadegreat/TCC" target='_blank'>
                      {<FaGithubSquare size={20} style={{ color: "#fff", marginLeft: "0.5rem"}} />}
                    </a>
                  </div>
                </div>
              </div>*/}

              <div>
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704382141/st-anthony1_p6envw.png" alt="St. Anthony website"/>
                <div>
                  <p style={{ color: "#fff", paddingTop: "1.3rem" }}>
                    A church website developed for St. Anthony catholic church,
                    AIT road Alagbado Lagos state. Need more info about St. Anthony Alagbado, visit their website.
                  </p>

                  <div style={{display:"flex",justifyContent:"center",paddingTop:"0.5rem"}}>
                    <a href="https://emmadegreat.github.io/st-anthony-site/">
                      {<FaLink size={20} style={{ color: "#fff", marginRight: "0.5rem"}} />}
                    </a> |
                    <a href="https://github.com/Emmadegreat/st-anthony-site" target='_blank' rel="noreferrer">
                      {<FaGithubSquare size={20} style={{ color: "#fff", marginLeft: "0.5rem"}} />}
                    </a>
                  </div>
                  </div>
              </div>

            </Carousel>
          </div>

      {/*<div className='see-more' onClick={Close}>========= toggle button=========
          <button className='toggle-button' onClick={SeeMore}>{click? "see less":"see more" }</button>
      </div>*/}
      {/*toggle &&

        <div className='toggle'>
          <section className="project-even" id="eesa" data-aos="flip-right">
            <div className="card" id='even-img-card'>
              <img src={ calc } alt="calculator-app-img." />
            </div>
            <div className="card" id='even-description' data-aos="flip-right">
              <h2>04</h2>
              <h3>Simple calculator</h3>
              <p>
                A simple JS calculator application that performs basic arithmetic operations.
              </p>
              <a href="https://emmadegreat.github.io/Js__cal__app/" target={'_blank'} rel="noreferrer">view site &#8663;</a>
            </div>
          </section>


        </div>

    */}
    </section>
  )
}

export default Project


