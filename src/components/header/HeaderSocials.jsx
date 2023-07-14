import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/gabluna/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/GabLunaDev" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/gablunac/" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials