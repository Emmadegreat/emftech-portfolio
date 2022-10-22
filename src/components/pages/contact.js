import './contact.css'
import 'aos/dist/aos.css'

import React, { useEffect, useState } from 'react'

import Aos from 'aos'

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 3000, once: false });
    Aos.refresh();

  }, [])

  const [toggleForm, setToggleForm] = useState(false);
  const Toggle = () => setToggleForm(!toggleForm);

  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-card" id="contact-card" data-aos={ 'flip-down'} >
          <p>Have a project you want </p>
          <p>me to bring to live?</p>
          <button className='contact-button' onClick={Toggle}>send me a mail &#8663;</button>
        </div>

        {toggleForm &&
          <div className='email-modal' id='email-modal'>
          <div className="email-content" id='email-content'>
            <form action="https://formsubmit.co/emf0046@gmail.com" method='post'>
              <table>
                <tr>
                  <td><label htmlFor="name">Name</label></td>
                  <td><input type="text" name='name' required/></td>
                </tr>
                <tr>
                  <td><label htmlFor="email">Email</label></td>
                  <td><input type="email" name='email' required /></td>
                  <td><input type="hidden" name="_next" value="https://my-app-ruby-theta.vercel.app/" /></td>
                  <td><input type="hidden" name="_template" value="table" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="phone-number">Phone Number</label></td>
                  <td><input type="number" name='phone-number' required /></td>
                  <td><input type="hidden" name="_autoresponse"value={'Thank you for contacting us, we will get back to you as soon as possible.'} /></td>
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
