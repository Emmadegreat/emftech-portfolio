import '../assets/style/contack-links.css'

import { FaFacebookSquare, FaGithubSquare, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa'

import {BrowserRouter} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import React from 'react'
import logo from '../assets/images/mylogo (1).png'

const ContactLinks = () => {
    return(
        <>
            <section className='contact-links' id='contact-links'>
                <div className="logo-1">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer-links">
                    <ul className='social-links'>
                        <li><a href="https://www.facebook.com/emmanuelf.mkpurunchi" target="_blank" rel="noreferrer">{ <FaFacebookSquare/> }</a></li>
                        <li><a href="https://twitter.com/Emmadegreat_" target="_blank" rel="noreferrer">{ <FaTwitterSquare/> }</a></li>
                        <li><a href="https://www.linkedin.com/in/emmanuelmkpurunchi/" target="_blank" rel="noreferrer">{ <FaLinkedinIn/> }</a></li>
                        <li><a href="https://github.com/Emmadegreat/" target="_blank" rel="noreferrer">{ <FaGithubSquare/> }</a></li>
                    </ul>

                   <BrowserRouter>
                        <div className='footer-menu'>
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

                <hr />
            </section>

        </>
    )
}

export default ContactLinks
