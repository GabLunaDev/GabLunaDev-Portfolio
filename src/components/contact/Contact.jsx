import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; 


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_icdhgpz', 'template_r21e6mh', form.current, '5CVa5GXomKYn1JGLS')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail style={{fontSize: 30, marginBottom: 0.5 }}/>
            <h4>Email</h4>
            <h5>gabriellunacv@gmail.com</h5>
            <a href="mailto:gabriellunacv@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp style={{fontSize: 30, marginBottom: 0.5 }}/>
            <h4>Whatsapp</h4>
            <h5>+5581988617940</h5>
            <a href="https://api.whatsapp.com/send?phone=5581988617940" target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit'  className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact