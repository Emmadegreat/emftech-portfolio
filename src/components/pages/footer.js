import '../../assets/style/footer.css'

import React from 'react'
import ScrollToTop from 'react-scroll-to-top'

const Footer = (props) => {

  return (
    <footer className="footer">

      <address>
        <div className="scroll_to_top">
          <ScrollToTop
            smooth top={20}
            height="28" width="28"
            color='#fff;'
            style={{ background: "rgb(119, 178, 220)", right:'20px', bottom:'20px' }}
          />
        </div>
      </address>
      <span>{props.text}  </span>
      <span>{props.year }</span>

    </footer>

  )

}

export default Footer
