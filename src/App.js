import './index.css'

import About from './components/pages/about'
import Contact from './components/pages/contact'
import ContactLinks from './components/pages/contact-links'
import Footer from './components/pages/footer'
import Navigation from './components/pages/navigation'
import Project from './components/pages/project'
import React from 'react'
import Skill from './components/pages/skill'

const App = () => {
  return (
    <div className='app'>
      <Navigation />
      <div className='pages'>
        <About />
        <Skill />
        <Project/>
        <Contact />
        <ContactLinks />
      </div>
      <Footer
        text="&copy; All rights reserved  &nbsp; EMF  &nbsp;"
        year={ new Date().getFullYear()}
       
      />
          
      
    </div>
  )
}

export default App
