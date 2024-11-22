import React from 'react';
import { useEffect, useRef } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Footer from "./Components/Footer/Footer";


function App() {
  const plansPricingRef = useRef(null);

  useEffect(() => {
    const modal = document.getElementById('mymodal');
    modal.style.display = 'block';
    modal.classList.add('fade-in');

    const agreeButton = document.querySelector('.agree');
    const disagreeButton = document.querySelector('.disagree');

    agreeButton.addEventListener('click', () => {
      modal.classList.remove('fade-in');
      modal.classList.add('fade-out');
      setTimeout(() => {
        modal.style.display = 'none';
        // CALL THE API FOR ACCEPTING TERMS AND CONDITIONS




      }, 500);
    });

    disagreeButton.addEventListener('click', () => {
      modal.classList.remove('fade-in');
      modal.classList.add('fade-out');
      setTimeout(() => {
        modal.style.display = 'none';
        // CALL THE API FOR DECLINING TERMS AND CONDITIONS


        

      }, 500);
    });
  },[]);

  return (
    <>
    <div className="mymodal" id='mymodal'>
      <div className="modal-contents">
        <h1>Terms & Conditions</h1>
        <p>By clicking "Agree" you accept our terms and conditions</p>
      </div>
      <div className="modalBtns">
        <button type="button" className='agree btn btn-primary'>Agree</button>
        <button type='button' className='disagree btn btn-danger'>Disagree</button>
      </div>
    </div>

    <Page1 plansPricingRef={plansPricingRef}/>
    <Page2 />
    <Page3 plansPricingRef={plansPricingRef}/>
    <Footer />
    </>
  );
}

export default App;
