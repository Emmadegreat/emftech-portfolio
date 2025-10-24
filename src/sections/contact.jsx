import '../assets/style/contact.css'
import 'aos/dist/aos.css'

import React, { useEffect, useState } from 'react'

import Aos from 'aos'
import ContactForm from '../components/form'

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
        <div className="contact-card" id="contact-card">
          <p>Have a project you want </p>
          <p>me to bring to live?</p>
          <button className='contact-button bg-white text-[#000]' onClick={Toggle}>send me a mail &#8663;</button>
        </div>

        {toggleForm &&
          <div className='email-modal max-h-[400px]' id='email-modal'>
            <div className="email-content" id='email-content'>
              <div className='flex justify-end'>
                <button onClick={Toggle} className='px-2 py-[0.5px] mb-2 outline-ring rounded-md border-[1px] border-blue-500 text-red-600 text-[24px] font-semibold text-end'>X</button>
              </div>

            <ContactForm />
            {/* <form action="https://formsubmit.co/125b9c4918a98903f77d15d4dc08b02f" method='post'>
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

            </form> */}
          </div>
        </div>
        }
      </section>



    </>
  )
}

export default Contact
