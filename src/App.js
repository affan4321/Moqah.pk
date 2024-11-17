import React from 'react';
import { useEffect, useRef } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Footer from "./Components/Footer/Footer";


function App() {
  const plansPricingRef = useRef(null);
  return (
    <>
    <Page1 plansPricingRef={plansPricingRef}/>
    <Page2 />
    <Page3 plansPricingRef={plansPricingRef}/>
    <Footer />
    </>
  );
}

export default App;
