import React from 'react';
import './Works.css';
import Corosel from './corosel';
import myPic from '../../../assets/corosel/img.png';

// This will have all the pictures of the events
let allEventList = [
  // API to receive the images of the Events
];


const Works = () => {
  // Clear the allEventList before populating it
  allEventList = [];

  // For it to work, just using the same image for now
  for (let i = 0; i < 30; i++) {
    allEventList.push(myPic);
  }


  // These are rows data from CoroselItems
  let rowData = [[], [], []];

  allEventList.map((myPic, i) => {
    if (i <= 9) {
      rowData[0].push(myPic);
    } else if (i > 9 && i <= 19) {
      rowData[1].push(myPic);
    } else {
      rowData[2].push(myPic);
    }
  });

  // Set Row Direction as you wish
  let direction = ['left', 'right', 'left'];

  return (
    <>
      <div className="coroselContainer">
        <div className="mycorosel">
          <Corosel imgData={rowData} direction={direction} />
        </div>
      </div>
      <div className="coroselButton">
        <button type="button">
          View recent works
        </button>
      </div>
    </>
  );
};

export default Works;