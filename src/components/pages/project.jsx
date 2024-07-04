import '../../assets/style/project.css'
import "aos/dist/aos.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaGithubSquare, FaLink } from 'react-icons/fa'

import Aos from 'aos'
import { Img } from '../img';
import React from 'react'
import Slider from "react-slick";
import {projects} from "../data"
import { useEffect } from 'react'

//import { Carousel } from 'react-responsive-carousel';



const Project = () => {

  useEffect(() => {
    Aos.init({duration:3000,once:false});
  }, [])

  /*const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);

  const SeeMore = () => setToggle(!toggle);
  const Close = () =>setClick(!click)*/

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };


  return (
    <section className='project' id='project'>
      <h1>
        My Projects <span>.</span>
      </h1>
      <div className='slider-wrapper'>
        <Slider {...settings}>

          {
            projects.map(({name, imgurl, link, github, text, id}) => (
              <div key={id} className='slider-cont'>
                <Img src={imgurl} alt={name} className="project-images" />
                <div>
                  <p>{text}</p>
                  <div className="links-cont">
                    <a href={link} target='_blank' rel="noreferrer">
                      {<FaLink className='icon' />}
                    </a> |
                    <a href={github} target='_blank' rel="noreferrer">
                      {<FaGithubSquare className='icon' />}
                    </a>
                  </div>
                </div>
              </div>
            ))

          }

        </Slider>
      </div>

    </section>
  )


}

export default Project





