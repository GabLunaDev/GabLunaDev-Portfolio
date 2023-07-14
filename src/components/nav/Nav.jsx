import React from 'react'
import {AiOutlineHome, AiOutlineCode} from 'react-icons/ai'
import {BsPersonCircle, BsBook, BsChatDots} from 'react-icons/bs'
import {TbWorldCode} from 'react-icons/tb'
import './nav.css'

import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active': ''}><BsPersonCircle/></a>
      <a href="#tecnology" onClick={() => setActiveNav('#tecnology')} className={activeNav === '#tecnology'? 'active': ''}><AiOutlineCode/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#expirience'? 'active': ''}><BsBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active': ''}><TbWorldCode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}><BsChatDots/></a>
    </nav>
  )
}

export default Nav