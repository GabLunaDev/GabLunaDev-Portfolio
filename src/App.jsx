import React from 'react'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Tecnology from './components/tecnology/Tecnology'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Tecnology/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App