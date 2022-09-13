import "./footer.css"

import React from 'react'

const Footer = (props) => {
  return (
    <footer className="footer">
      <span>{props.text}  </span>
      <span>{props.year }</span>
          
    </footer>
      
  )
    
}

export default Footer
