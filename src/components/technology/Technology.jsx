import React from 'react'
import './technology.css'
import {SiNestjs} from 'react-icons/si'
import {DiLinux} from 'react-icons/di'
import {FaRust} from 'react-icons/fa'
import {BiLogoNodejs, BiLogoTypescript, BiLogoMongodb,BiLogoPostgresql, BiLogoJava, BiLogoJavascript} from 'react-icons/bi'


function Tecnology() {
  return (
    <section id='technology'>
      <h5>Which Technologies and Tools I Work With</h5>
      <h2>Technologies</h2>

      <div className="container technology__container">
          <div className="technology__content">
            <div className="technology__cards">
            <article className='technology__card'>
              <BiLogoTypescript style={{ fontSize: '70px', color: '#1976D2' }} className='technology__icon'/>
              <h5>TypeScript</h5>
            </article>
            <article className='technology__card'>
              <BiLogoNodejs style={{ fontSize: '70px', color: '#6cc24a'}} className='technology__icon'/>
              <h5>Node.js</h5>
            </article>
            <article className='technology__card'>
             <DiLinux style={{ fontSize: '70px', color: '#FFBF00' }} className='technology__icon'/>
              <h5>Linux</h5>
            </article>
            <article className='technology__card'>
             <SiNestjs style={{ fontSize: '70px', color: '#DE3163' }} className='technology__icon'/>
              <h5>Nest.js</h5>
            </article>
            <article className='technology__card'>
             <BiLogoPostgresql style={{ fontSize: '70px', color: '#0070BB' }} className='technology__icon'/>
              <h5>PostgreSql</h5>
            </article>
            <article className='technology__card'>
             <BiLogoMongodb style={{ fontSize: '70px', color: '#0BDA51' }} className='technology__icon'/>
              <h5>MongoDB</h5>
            </article>
            <article className='technology__card'>
             <BiLogoJava style={{ fontSize: '70px', color: '#960018' }} className='technology__icon'/>
              <h5>Java</h5>
            </article>
            <article className='technology__card'>
             <FaRust style={{ fontSize: '70px', color: 'white' }} className='technology__icon'/>
              <h5>Rust</h5>
            </article>
            </div>
          </div>
      </div>

    </section>
  )
}

export default Tecnology