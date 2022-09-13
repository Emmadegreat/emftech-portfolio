import './contack-links.css'

import { FaFacebookSquare, FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'

import {BrowserRouter} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import React from 'react'
import logo from '../images/mylogo (1).png'

const ContactLinks = () => {
    return(
        <>
            <section className='contact-links' id='contact-links'>
                <div className="logo-1">
                    <img src={logo} alt="logo" />
                    <span>iCode</span>
                </div>
                <div className="links">
                    <ul className='social-links'>
                        <li><a href="https://www.facebook.com/emmanuelf.mkpurunchi" target="_blank">{ <FaFacebookSquare/> }</a></li>
                        <li><a href="https://twitter.com/Emmadegreat_" target="_blank">{ <FaTwitterSquare/> }</a></li>
                        <li><a href="https://www.linkedin.com/in/emmanuel-f-mkpurunchi-2409aa112/" target="_blank">{ <FaLinkedinIn/> }</a></li>
                        <li><a href="https://github.com/Emmadegreat/" target="_blank">{ <FaGithubSquare/> }</a></li>
                    </ul>

                    <BrowserRouter >
                        <div className="bottom-menu">
                            <ul>
                                <li>
                                    <HashLink
                                        to="#about"
                                        spy="true"
                                        smooth={true}
                                        activeClass="active"
                                        offset={-80}
                                        duration={500}
                                    >
                                        about
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                        to="#skill"
                                        spy="true"
                                        smooth={true}
                                        activeClass="active"
                                        offset={-80}
                                        duration={500}
                                    >
                                        skill
                                    </HashLink>
                                </li>

                                <li>
                                    <HashLink
                                    to="#project"
                                        spy="true"
                                        smooth={true}
                                        activeClass="active"
                                        offset={-80}
                                        duration={500}
                                    >
                                        project
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink
                                    to="#contact"
                                        spy="true"
                                        smooth={true}
                                        activeClass="active"
                                        offset={-80}
                                        duration={500}
                                    >
                                        contact
                                    </HashLink>
                            </li>
                        </ul>
                    </div>
                    </BrowserRouter>
                </div>    

            </section>
      
        </>
    )
}

export default ContactLinks
