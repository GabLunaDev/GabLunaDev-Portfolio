import React from 'react'
import {FaUniversity} from 'react-icons/fa'
import './academic.css'

const Academic = () => {
  return (
    <section id='academic'>
        <h5>My Academic Background</h5>
        <h2>Academic</h2>

        <div className="container academic__container">
            <div className="academic__content">
                <h2>Computer Science Student</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aliquid qui facere similique minima repudiandae nisi praesentium laborum pariatur architecto quae libero iste magnam sint vitae temporibus, quod ea? Natus.
                </p>
            </div>

            <div className="academic__cards">
                <article className="academic__card">
                    <FaUniversity style={{fontSize: 35, color: "#E0AAFF"}}/>
                    <h3>Bachelor of Computer Science</h3>
                    <h5>Universidade Católica de Pernambuco</h5>
                    <small>2022-Present</small>
                </article>
            </div>
        </div>
        
    </section>
  )
}

export default Academic