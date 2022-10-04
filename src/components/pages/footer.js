import "./footer.css"

import { FaArrowCircleUp } from "react-icons/fa"
import React from 'react'

const Footer = (props) => {

  return (
    <footer className="footer">
      <address>
        <div className="scroll-top page-scroll visible-xs visible-sm visible-m visible-lg">
          <a href=""  className="scroll">
            <FaArrowCircleUp />
          </a>
        </div>
      </address>
      <span>{props.text}  </span>
      <span>{props.year }</span>

    </footer>

  )

}

export default Footer
