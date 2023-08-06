import React from 'react'
import './header.css'
import CTA from './CTA'
import {HiOutlineArrowSmDown} from 'react-icons/hi'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">

        <h5>Hello I'm</h5>
        <h1>Gabriel Luna</h1>
        <h5 className="text-light">Back-end Developer</h5>
        <HeaderSocials/>
        <CTA/>
      </div>
    </header>
  )
}

export default Header