import React from 'react'
import './Footer.css'
import logo from '../../assets/logoBig.png'
import emailIcon from '../../assets/emailIcon.png'
import pnumIcon from '../../assets/pnumIcon.png'
import calenderIcon from '../../assets/calenderIcon.png'
import clockIcon from '../../assets/clockIcon.png'
import mapIcon from '../../assets/mapIcon.png'

const Footer = () => {
  return (
    <>
    <div className='prefooter'>
        <h1>Let's Get you Listed!!!</h1>
        <button type="button" className="btn btn-primary">GET STARTED!</button>
    </div>
    <div className="footer">
        <div className="flogo">
            <img src={logo} alt="Logo" />
            <h1>MOQAH.PK</h1>
        </div>
        <div className="flinks">
            <h2><a href="#">Home</a></h2>
            <h2><a href="#">About Us</a></h2>
            <h2><a href="#">Blog</a></h2>
            <h2><a href="#">Trending Events</a></h2>
            <h2><a href="#">Categories</a></h2>
        </div>
        <div className="contactC">
            <div className="fcontact">
                <div className="email">
                    <img src={emailIcon} alt="email" />
                    <h3>Email</h3>
                </div>
                <div className="pnum">
                    <img src={pnumIcon} alt="phonenum" />
                    <h3>Phone Number</h3>
                </div>
                <div className="workdays">
                    <img src={calenderIcon} alt="work days" />
                    <h3>Working Days</h3>
                </div>
                <div className="workhours">
                    <img src={clockIcon} alt="work hours" />
                    <h3>Working Hours</h3>
                </div>
                <div className="location">
                    <img src={mapIcon} alt="location" />
                    <h3>Address</h3>
                </div>
            </div>
            <div className="fcontactdetails">
                <h3><a href="#">sparessupport@moqah.pk</a></h3>
                <h3><a href="#">8884518856</a></h3>
                <h3>Monday - Sunday</h3>
                <h3>8:00AM - 8:00PM (IST)</h3>
                <h3>1717 Harrison St, San Francisco</h3>
            </div>
        </div>

        <div className="contactCsmall">
            <div className="email">
                <div className="emailtexticon">
                    <img src={emailIcon} alt="email" />
                    <h3>Email</h3>
                </div>
                <h3><a href="#">sparessupport@moqah.pk</a></h3>
            </div>
            
            <div className="pnum">
                <div className="pnumtexticon">
                    <img src={pnumIcon} alt="phonenum" />
                    <h3>Phone Number</h3>
                </div>    
                <h3><a href="#">8884518856</a></h3>
            </div>
            
            <div className="workdays">
                <div className="workdaystexticon">
                    <img src={calenderIcon} alt="work days" />
                    <h3>Working Days</h3>
                </div>
                <h3>Monday - Sunday</h3>
            </div>
            
            <div className="workhours">
                <div className="workhourstexticon">
                    <img src={clockIcon} alt="work hours" />
                    <h3>Working Hours</h3>
                </div>
                <h3>8:00AM - 8:00PM (IST)</h3>
            </div>
            
            <div className="location">
                <div className="locationtexticon">
                    <img src={mapIcon} alt="location" />
                    <h3>Address</h3>
                </div>
                <h3>1717 Harrison St, San Francisco</h3>
            </div>
            
        </div>
        
    </div>
    <div className="end">
        <h3>© 2024 <span>MOQAH.Pk</span> Private Limited</h3>
    </div>
    </>
  )
}

export default Footer