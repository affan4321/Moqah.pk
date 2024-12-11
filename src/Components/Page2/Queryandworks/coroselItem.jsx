import React from 'react'
import './coroselItem.css'


const CoroselItem = ({myPic}) => {
  return (
    <div className='frame'>
        <div className="pic">
            <img src={myPic} alt='imgEmpty'/>
        </div>
    </div>
  )
}

export default CoroselItem