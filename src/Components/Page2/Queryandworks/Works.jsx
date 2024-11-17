import React from 'react'
import './Works.css'
import corosel from '../../../assets/temp.png'

const Works = () => {
  return (
    <>
    <div className="coroselContainer">
      <div className="corosel">
        <img src={corosel} alt="corosel" />
      </div>
    </div>
    <div className="coroselButton">
      <button type="button">
        View recent works
      </button>
    </div>
    </>
  )
}

export default Works