import './project.css'

import { FaArrowDown } from 'react-icons/fa'
import React from 'react'
import calc from '../images/calculator-app.PNG'
import { click } from '@testing-library/user-event/dist/click'
import eesa from '../images/eesa.PNG'
import login from '../images/network-admin-login.PNG'
import st_anthony from '../images/st-anthony.PNG'
import tcc from '../images/tcc.PNG'
import { useState } from 'react'
import zuri from '../images/zuri-final-project-task.PNG'

const Project = () => {

  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);
    
  const SeeMore = () => setToggle(!toggle);
  const Close =()=>setClick(!click)


  return (
      <section className='project' id='project'>
          <h1>
              My Projects <span>.</span>
          </h1>
        <section className="project-1" id="tcc">
          <div className="card" id='tcc-img-card'>
          <img src={tcc} alt="tcc-website" />
          </div>
          <div className="card" id='tcc-description'>
            <h2>01</h2>
            <h3>TCC website</h3>
            <p>
              TCC is a civil engineering construction company. This site enables
              the company to showcase their competency and easily connect with
              clients.
            </p>
            <a href="https://tcc-work.herokuapp.com/index.html" target={'_blank'}>view site &#8663;</a>
          </div>
        </section>
      
        <section className="project-2" id="eesa">
          <div className="card" id='eesa-img-card'>
            <img src={ eesa } alt="eesa-website" />
          </div>
          <div className="card" id='eesa-description'>
            <h2>02</h2>
            <h3>EESA</h3>
            <p>
              Web application developed for final year students of Electrical
              Engineering Unizik, Awka. The web application helps the students
              to submit their project to their supervisors online.
            </p>
            <a href="https://www.eesa5nalists.com.ng/" target={'_blank'}>view site &#8663;</a>
          </div>
        </section>

        <section className="project-1" id="tcc">
          <div className="card" id='tcc-img-card'>
            <img src={st_anthony} alt="tcc-website" />
          </div>
          <div className="card" id='tcc-description'>
            <h2>03</h2>
            <h3>St. Anthony Parish</h3>
            <p>
              A church website developed for St. Anthony catholic church, AIT road
              Alagbado Lagos state. Need more info about St. Anthony Alagbado, visit 
              their website.
            </p>
            <a href="https://emmadegreat.github.io/st-anthony-site/" target={'_blank'}>view site &#8663;</a>
          </div>
        </section>
        <div className='see-more' onClick={Close}>{/*========= toggle button=========*/}
          <button className='toggle-button' onClick={SeeMore}>{click? "see less":"see more" }</button>
        </div>
      {toggle &&
        
        <div className='toggle'>
          <section className="project-2" id="eesa">
            <div className="card" id='eesa-img-card'>
              <img src={ zuri } alt="eesa-website" />
            </div>
            <div className="card" id='eesa-description'>
              <h2>04</h2>
              <h3>Zuri website</h3>
              <p>
                Final project/task done at I4GxZuri 2022 training,
                for frentend developers.  
              </p>
              <a href="https://emmadegreat.github.io/zuri-website-task/" target={'_blank'}>view site &#8663;</a>
            </div>
          </section>
          <section className="project-1" id="tcc">
            <div className="card" id='tcc-img-card'>
              <img src={login} alt="tcc-website" />
            </div>
            <div className="card" id='tcc-description'>
              <h2>05</h2>
              <h3>Network admin page</h3>
              <p>
                Network admin login/log out pages that enables the
                admin to have access to the backend.
              </p>
              <a href="https://emmadegreat.github.io/network-admin-login-page/" target={'_blank'}>view site &#8663;</a>
            </div>
          </section>
          <section className="project-2" id="eesa">
            <div className="card" id='eesa-img-card'>
              <img src={ calc } alt="eesa-website" />
            </div>
            <div className="card" id='eesa-description'>
              <h2>06</h2>
              <h3>Simple calculator</h3>
              <p>
                A simple JS calculator application that performs basic arithmetic operations. 
              </p>
              <a href="https://emmadegreat.github.io/Js__cal__app/" target={'_blank'}>view site &#8663;</a>
            </div>
          </section>
        </div>
        
      }
    </section>
  )
}

export default Project
