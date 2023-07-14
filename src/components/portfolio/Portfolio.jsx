import React from 'react'
import './portfolio.css'

import IMG_PORTFOLIO from '../../assets/bg-2.gif'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG_PORTFOLIO} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GabLunaDev" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/GabLunaDev" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio