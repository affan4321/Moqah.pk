import React from 'react'
import Navbar from "./Navbar/Navbar"
import HeroSection from "./Hero/HeroSection"
import "./Page1.css"

const Page1 = ({plansPricingRef}) => {
  return (
    <div className="bgPg1">
      <div className="container my-4 pg1">
        <Navbar plansPricingRef={plansPricingRef}/>
        <HeroSection />
      </div>
    </div>
  )
}

export default Page1