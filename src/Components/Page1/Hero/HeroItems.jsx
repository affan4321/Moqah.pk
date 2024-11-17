import React from 'react'
import "./HeroItems.css"


const HeroItems = ({city, src, desc}) => { 
  return (
    <div className="heroItems">
        <div className="image">
            <img src={src} alt={city}/>
        </div>
        <div className="data">
            <h3>{city}</h3>
            <div className="secondaryData">
              <p>{desc}</p>
              <button type="button"></button>
            </div>
            
        </div>
    </div>
  )
}

export default HeroItems