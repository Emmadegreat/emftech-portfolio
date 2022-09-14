import './contact.css'

import React, { useState } from 'react'

const Contact = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const Toggle = () => setToggleForm(!toggleForm);
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-card" id="contact-card">
          <p>Have a project you want </p>
          <p>me to bring to live?</p>
          <button className='contact-button' onClick={Toggle}>send me a mail &#8663;</button>
        </div>

        {toggleForm &&
          <div className='email-modal' id='email-modal'>
          <div className="email-content" id='email-content'>
            <form action="">
              <table>
                <tr>
                  <td><label htmlFor="name">Name</label></td>
                  <td><input type="text" name='name' required/></td>
                </tr>
                <tr>
                  <td><label htmlFor="email">Email</label></td>
                  <td><input type="email" name='email' required/></td>
                </tr>
                <tr>
                  <td><label htmlFor="phone-number">Phone Number</label></td>
                  <td><input type="number" name='phone-number' required/></td>
                </tr>
                <tr>
                  <td><label htmlFor="message">Messge</label></td>
                  <td><textarea name="message" id="mail"required></textarea></td>
                </tr>
                <tr>
                  <td></td>
                  <td><input type="submit" value="Submit" id='submit'/></td>
                </tr>
              </table>
              
            </form>
          </div>
        </div>
        }
      </section>
      
      
      
    </>
  )
}

export default Contact
