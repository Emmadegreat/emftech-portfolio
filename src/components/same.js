import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import React from 'react'
import emf from "./images/emf.jpg"

const same = (props) => {
    let style = () => {
        return {
            color:"navy"
        }
    }
  return (
    <>
          <section className='home'>
              <strong>{ props.strong}</strong>
              <p>{props.text}</p><br />


            <div className="profile">
                <img src={props.emf} alt="emf-pix" width={200} height={200} border-radius={50} />
                <h2 style={style()}> { props.heading}</h2>
                <h4>{props.h4}</h4>

                <NavLink to="/about" className="readmore">about</NavLink>

            </div>

        </section>

    </>
  )
}

export default same