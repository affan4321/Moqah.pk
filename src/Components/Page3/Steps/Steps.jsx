import React from 'react'
import "./Steps.css"

const Steps = ({step, index}) => {
  return (
    <div className="step" key={index}>
        <div className="numbers" >{index+1}</div>
        <h2>{step.heading}</h2>
        <p>{step.description}</p>
    </div>
  )
}

export default Steps