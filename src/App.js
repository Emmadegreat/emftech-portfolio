import './assets/style/index.css'
import "aos/dist/aos.css"

import About from './components/pages/about'
import Aos from 'aos'
import Contact from './components/pages/contact'
import ContactLinks from './components/pages/contact-links'
import Footer from './components/pages/footer'
import Navigation from './components/pages/navigation'
import Project from './components/pages/project'
import React from 'react'
import Skills from './components/pages/skills'
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
