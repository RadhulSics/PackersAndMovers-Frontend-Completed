import React from 'react'
import Companies from '../Companies/Companies';
import PackersNav from '../PackersNav/PackersNav'

function PackersHome() {
  const token = localStorage.getItem("token");
    console.log(token);
  return (
    <div>
      <PackersNav/>
      <Companies/>
    </div>
  )
}

export default PackersHome
