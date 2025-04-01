import './assets/style/index.css'
import "aos/dist/aos.css"

import About from './components/sections/about'
import Aos from 'aos'
import Contact from './components/sections/contact'
import ContactLinks from './components/sections/contact-links'
import Footer from './components/footer'
import Navigation from './components/navigation'
import Project from './components/sections/project'
import React from 'react'
import Skills from './components/sections/skills'
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh({ duration: 3000,once:false});
  }, [])
  return (
    <div className='app'>
      <Navigation />
      <section className='hero-section'

      />

      <div className='pages'>

        <About />

        <Skills />
        <Project/>
        <Contact />
        <ContactLinks />

      </div>
      <Footer
        text="&copy; All Rights Reserved &nbsp;EMF &nbsp;"
        year={ new Date().getFullYear()}

      />


    </div>
  )
}

export default App
