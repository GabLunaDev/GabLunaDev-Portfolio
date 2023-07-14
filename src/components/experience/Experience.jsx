import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Where I Have Worked</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <article className="experience">
                <div className="experience__head">
                    <h3>Tascom Tecnologia</h3>
                    <small>Back-end Developer - Freelancer</small>
                </div>

                <div className='experience__content'>
                    <p>
                        I work as a back-end developer in web development projects as a service provider for Tascom. My main focus is on providing new functionalities, bug fixes, and ongoing maintenance for their primary application, T+Saúde. Additionally, I also work on implementing features in other applications and microservices within the company.
                    </p>
                    <h5>2022-Present</h5>
                </div>
            </article>
        </div>
        
    </section>
  )
}

export default Experience