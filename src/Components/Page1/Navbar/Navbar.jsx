import React from 'react'
import { useState, useRef, useEffect } from 'react'
import "../Navbar/Navbar.css"
import Logo from "../../../assets/full logo.png"
import menu from "../../../assets/menu.png"
import close from "../../../assets/close.png"

const Navbar = ({plansPricingRef}) => {

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.getElementById('overlay').style.display = 'none';
  },[]);

  const handleToggleMenu = () => {
    showMenu ? (
      document.getElementById('overlay').style.display = 'none' ) : (
      document.getElementById('overlay').style.display = 'block'
      )
    setShowMenu((prev) => !prev);
  }

  const handleDateTimeButton = () => {
    setShowDatePicker((prev) => !prev);
  };

  const handlePlansPricingClick = () => {
    console.log('Plans & Pricing Clicked');
    plansPricingRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  return (
    <>
    <div className="navContainer">

      <div className="container-fluid logo">
        <img src={Logo} alt="Logo" />
        <h1 class="LogoText">MOQAH.PK</h1>
      </div>

      <div className="container-fluid linksButton">
        <ul>
          <li><a href='#'>Trending</a></li>
          <li><a href='#'>Categories</a></li>
          <li><a href='#'>Cities</a></li>
          <li><a href='#' ref={plansPricingRef} onClick={handlePlansPricingClick}>Plans & Pricing</a></li>
        </ul>
        <div className="btns">
          <button type="button" className='signupBtn'>Sign Up</button>
          <button type='button' className='loginBtn'>Login</button>
        </div>
      </div>
      <div className="overlay" id='overlay'>
        <img className="exit" src={close} alt="exit" onClick={handleToggleMenu}/>
        <ul>
          <li><a href='#'>Trending</a></li>
          <li><a href='#'>Categories</a></li>
          <li><a href='#'>Cities</a></li>
          <li><a href='#' ref={plansPricingRef} onClick={handlePlansPricingClick}>Plans & Pricing</a></li>
        </ul>
        <div className="btns">
          <button type="button" className='signupBtn'>Sign Up</button>
          <button type='button' className='loginBtn'>Login</button>
        </div>
      </div>
      <div className="menuIcon" onClick={handleToggleMenu}>
        <img src={menu} alt="menu" />
      </div>
    </div>

    <div className="container-fluid two">
      <div className="container searchBar">
        <div className="inputSearch">
          <input type="text" className="eventSearch" placeholder="Search for Event, Artist, Venue.." />
          <input type="text" className="citySearch" placeholder="Search by City" />
        </div>
        <div className="datesearchBtn">
          <div className="dateNavbar" >
            {
              !showDatePicker ? (
                <button type="button" className="dateTimeBtn" onClick={handleDateTimeButton}>
                  <span>Date</span>
                </button>
              ) : (
                <>
                <button type="button" className="dateTimeBtn" onClick={handleDateTimeButton}>
                  <span>Date</span>
                </button>
                <input type="date" id="datetime-picker" class="hidden-datetime" />
                </>
              )
            }
          </div>
          <button type="button" className='searchBtn'>Search</button>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Navbar
