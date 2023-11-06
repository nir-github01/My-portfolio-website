import React from 'react'
import Home from '../modules/Home'
import Experiences from '../modules/Experiences'
// import About from '../modules/About'
import Portfolio from '../modules/Portfolio'

const Routings = () => {
  return (
    <div>
      <Home /> 
       {/* <About /> */}
      <Portfolio />
      <Experiences />
    </div>
  )
}

export default Routings