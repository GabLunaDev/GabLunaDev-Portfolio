import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

import ME from '../../assets/me.jpg'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about__me-up">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
      </div>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ Brazil</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>1+ Years Working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aliquid qui facere similique minima repudiandae nisi praesentium laborum pariatur architecto quae libero iste magnam sint vitae temporibus, quod ea? Natus.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About