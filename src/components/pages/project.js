import '../style/project.css'
import "aos/dist/aos.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { FaGithubSquare, FaLink } from 'react-icons/fa'
import { useEffect, useState } from 'react'

import Aos from 'aos'
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import e_store from '../images/e-store.png'
import github from '../images/github-logo.jpg'
import link from '../images/linkicon.png'
import login from '../images/court1.png'
import st_anthony from '../images/stanthony.png'
import tcc from '../images/tcc1.png'
import zuri from '../images/zuri1.png'

const Project = () => {

  useEffect(() => {
    Aos.init({duration:3000,once:false});
  }, [])

  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);

  const SeeMore = () => setToggle(!toggle);
  const Close = () =>setClick(!click)


  return (
      <section className='project' id='project'>
        <h1>
          My Projects <span>.</span>
        </h1>
        {/*<section className="project-odd" id="odd" data-aos="">
          <div className="card" id='odd-img-card'>
            <img src={e_store} alt="e-store" />
          </div>
          <div className="card" id='odd-description' data-aos="flip-left">
            <h2>01</h2>
            <h3>e-store</h3>
            <p>
              An e-commerce website, built with React JS and CSS.
            </p>
            <a href="https://e-store-blush.vercel.app/" target="_blank" rel="noreferrer">view site &#8663;</a>
          </div>
        </section>

        <section className="project-even" id="even" data-aos="flip-right">
          <div className="card" id='even-img-card'>
          <img src={cta} alt="cta-website-img" />
          </div>
          <div className="card" id='even-description' data-aos="flip-left">
            <h2>02</h2>
            <h3>CTA website</h3>
            <p>
              I cloned the CWW TECH AFRICA (CTA) website using React JS
              and SASS. View the site via the hosted link below.
            </p>
            <a href="https://cta-site.vercel.app/" target="_blank" rel="noreferrer">view site &#8663;</a>

          </div>
        </section>

        {/*<section className="project-odd" id="tcc" data-aos="flip-left">
          <div className="card" id='odd-img-card'>
            <img src={st_anthony} alt="st-Anthony-website-img." />
          </div>
          <div className="card" id='odd-description' data-aos="flip-left">
            <h2>03</h2>
            <h3>St. Anthony Parish</h3>
            <p>
              A church website developed for St. Anthony catholic church, AIT road
              Alagbado Lagos state. Need more info about St. Anthony Alagbado, visit
              their website.
            </p>
            <a href="https://emmadegreat.github.io/st-anthony-site/" target={'_blank'} rel="noreferrer">view site &#8663;</a>
          </div>
        </section>*/}
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
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704380769/mdis_jbrm7n.png" alt="wordpress-logo" style={{height:"350px"}}/>
                <div>
                <p style={{ color: "#fff", paddingTop: "1.3rem" }}>
                  A school website developed for Mabel Divine International Schools.
                </p>
                <div style={{display:"flex",justifyContent:"center",paddingTop:"0.5rem"}}>
                  <a href="https://mabeldivineinternationalschools.com.ng/">
                    {<FaLink size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />}
                  </a> |
                  <a href="https://github.com/Emmadegreat/mabel-divine-international-school" target='_blank'>
                    {<FaGithubSquare size={20} style={{ color: "#fff", marginLeft: "0.5rem" }} />}
                  </a>
                </div>
                </div>
              </div>

              <div>
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704381634/e-store1_lobgqy.png" alt="wordpress-logo" style={{height:"350px"}}/>
                <div>
                  <p style={{color:"#fff",paddingTop:"1.3rem"}}>An e-commerce website, built with React JS and CSS..</p>
                  <a href="https://e-store-blush.vercel.app/">View</a>
                </div>
              </div>

              <div>
                <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704381719/cta1_lkmctx.png" alt="wordpress-logo"/>
                <div>
                  <p style={{color:"#fff",paddingTop:"1.3rem"}}>I cloned the CWW TECH AFRICA (CTA) website using React JS and SASS.</p>
                  <a href="https://cta-site.vercel.app/">View</a>
                </div>
            </div>

            <div>
              <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704381953/tcc1_bbmvvg.png" alt="wordpress-logo"/>
              <div>
              <p style={{ color: "#fff", paddingTop: "1.3rem" }}>
                TCC is a civil engineering construction company. This site enables the company to showcase
                their competency and easily connect with clients.
              </p>
                <a href="https://tcc-peach.vercel.app/">View</a>
              </div>
            </div>

            <div>
              <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1704382141/st-anthony1_p6envw.png" alt="wordpress-logo"/>
              <div>
              <p style={{ color: "#fff", paddingTop: "1.3rem" }}>
                A church website developed for St. Anthony catholic church,
                AIT road Alagbado Lagos state. Need more info about St. Anthony Alagbado, visit their website.
              </p>
                <a href="https://emmadegreat.github.io/st-anthony-site/">View</a>
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
          <section className="project-odd" id="tcc" data-aos="flip-left">
            <div className="card" id='odd-img-card'>
              <img src={tcc} alt="network-admin-img" />
            </div>
            <div className="card" id='odd-description' data-aos="flip-left">
              <h2>05</h2>
              <h3>TCC website</h3>
              <p>
                TCC is a civil engineering construction company. This site enables
                the company to showcase their competency and easily connect with
                clients.
              </p>
              <a href="https://tcc-peach.vercel.app/" target={'_blank'} rel="noreferrer">view site &#8663;</a>
            </div>
          </section>
          <section className="project-even" id="eesa" data-aos="flip-right">
            <div className="card" id='even-img-card' data-aos="flip-right">
              <img src={ zuri } alt="Zuri-website-img." />
            </div>
            <div className="card" id='even-description' data-aos="flip-left">
              <h2>06</h2>
              <h3>Zuri website</h3>
              <p>
                Final project/task done at I4GxZuri 2022 training,
                for frentend developers.
              </p>
              <a href="https://emmadegreat.github.io/zuri-website-task/" target={'_blank'} rel="noreferrer">view site &#8663;</a>
            </div>
          </section>
          <section className="project-odd" id="tcc" data-aos="flip-left">
            <div className="card" id='odd-img-card'>
              <img src={login} alt="network-admin-img" />
            </div>
            <div className="card" id='odd-description' data-aos="flip-left">
              <h2>07</h2>
              <h3>Network admin page</h3>
              <p>
                Network admin login/log out pages that enables the
                admin to have access to the backend.
              </p>
              <a href="https://emmadegreat.github.io/network-admin-login-page/" target={'_blank'} rel="noreferrer">view site &#8663;</a>
            </div>
          </section>

        </div>

    */}
    </section>
  )
}

export default Project


