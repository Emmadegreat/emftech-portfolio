import '../../assets/style/skills.css'
import "aos/dist/aos.css"

import React, {useEffect} from 'react'

import Aos from 'aos'
import { data } from '../data'

const Skills = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh({duration:3000});
  }, [])
  return (
      <>
        <section className="skill" data-aos="zoom-out">{/*=zoom-out=*/}
          <div className='skill-header'>
            <h2>My Skills </h2>
            <img src="https://res.cloudinary.com/dbnxbly1r/image/upload/v1719525381/general/dot-removebg-preview_wo9xco.png" alt="" />
          </div>
          <div className="skill-wrapper">

            {data.map(({name, url, id}) => (
              <div key={id}>
                <img src={ url } alt={name} />
              </div>
            ))}

          </div>
        </section>


    </>
  )
}

export default Skills
