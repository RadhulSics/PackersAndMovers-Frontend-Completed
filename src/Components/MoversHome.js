import React from 'react'
import MoversNav from './MoversNav'
import Corousel from './Corousel/Corousel'
import About from './About/About'
import Services from './Services/Services'

function MoversHome() {
  return (
    <div>
      <MoversNav/>
      <Corousel status='mover' />
      <About />
      <Services />
    </div>
  )
}

export default MoversHome
