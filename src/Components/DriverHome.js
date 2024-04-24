import React from 'react'
import DriverNav from './DriverNav'
import Corousel from './Corousel/Corousel'
import About from './About/About'
import Services from './Services/Services'

function DriverHome() {
  return (
    <div>
      <DriverNav/>
      <Corousel status='driver' />
      <About />
      <Services />
    </div>
  )
}

export default DriverHome
