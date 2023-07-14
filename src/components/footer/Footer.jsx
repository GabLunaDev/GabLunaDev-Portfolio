import React from 'react'
import './footer.css'
import {AiOutlineInstagram, AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'


function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>GabLunaDev</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#technology">Tecnologies</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/GabLunaDev" target='_blank'><AiFillGithub style={{color: 'white'}}/></a>
        <a href="https://twitter.com/gabfromthemoon" target='_blank'><AiFillTwitterCircle style={{color: 'white'}}/></a>
        <a href="https://www.instagram.com/gablunac/" target='_blank'><AiOutlineInstagram style={{color: 'white'}}/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; GabLunaDev. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer