import React from 'react'
import './Query.css'
import Logo from "../../../assets/logoBig.png"
import loadingIcon from "../../../assets/loadingIcon.png"


const Query = () => {
  return (
    <>    
    <div className="container-fluid logobig">
        <img src={Logo} alt='logo' />
    </div>
    <div className="container-fluid calltoactionH">
        <h1>One fixed fee a month gets you unlimited attention and credibility .</h1>
    </div>
    <div className="container-fluid calltoactionp">
      <p>Feel free to ask for changes a bazillion times —we've got you covered!</p>
    </div>
    <div className="container-fluid calltoactionB">
      <button type="button">Send a query Now</button>
    </div>
    <div className="container-fluid loadingIcon">
      <img src={loadingIcon} alt="loading" />
    </div>
    </>
  )
}

export default Query