import './project.css'

import React from 'react'
import calc from '../images/calculator-app.PNG'
import eesa from '../images/eesa.PNG'
import login from '../images/network-admin-login.PNG'
import st_anthony from '../images/st-anthony.PNG'
import tcc from '../images/tcc.PNG'
import zuri from '../images/zuri-final-project-task.PNG'

const Project = () => {
  return (
      <section className='project' id='project'>
          <h1>
              My Projects <span>.</span>
          </h1>
        <section className="project-1" id="project-1">
          <div className="project-box">
            <img src={ tcc} alt="tcc-website" />
          </div>
        <div className="project-box" id='project-box2'>
          <h2>01</h2>
          <h3>TCC website</h3>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at quam, dignissimos incidunt omnis et recusandae vero consectetur consequuntur cumque sint eum quaerat soluta ad dolore ea molestiae veniam. A!
          </p>
          <a href="https://tcc-work.herokuapp.com/index.html" target={'_blank'}>view site &#8663;</a>
        </div>
      </section>
      
      </section>
  )
}

export default Project
