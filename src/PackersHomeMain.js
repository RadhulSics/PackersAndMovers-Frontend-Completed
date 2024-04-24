import React from 'react'
import PackersNav from './Components/PackersNav/PackersNav'
import Corousel from './Components/Corousel/Corousel'
import About from './Components/About/About'
import Services from './Components/Services/Services'

function PackersHomeMain() {
  return (
    <div> 
      <PackersNav/>
      <Corousel status='user' />
      <About />
      <Services />
    </div>
  )
}

export default PackersHomeMain
