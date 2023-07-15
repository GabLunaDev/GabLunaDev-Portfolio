import React from 'react'
import {AiOutlineHome, AiOutlineCode} from 'react-icons/ai'
import {BsPersonCircle, BsBook, BsChatDots} from 'react-icons/bs'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import {TbWorldCode} from 'react-icons/tb'
import './nav.css'

import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={''}><BsPersonCircle/></a>
      <a href="#technology" onClick={() => setActiveNav('#tecnology')} className={''}><AiOutlineCode/></a>
      <a href="#academic" onClick={() => setActiveNav('#academic')} className={''}><HiOutlineAcademicCap/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={''}><BsBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={''}><TbWorldCode/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={''}><BsChatDots/></a>
    </nav>
  )
}

export default Nav