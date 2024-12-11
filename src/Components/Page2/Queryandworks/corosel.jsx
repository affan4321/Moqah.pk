import './corosel.css';
import CoroselItem from './coroselItem';
import React from 'react';

const Corosel = ({ imgData, direction }) => {
  return (
    <>
      {[0, 1, 2].map((rowIndex) => (
        <div 
          key={rowIndex}
          className={`row${rowIndex + 1} scroll-${direction[rowIndex]}`}
        >
          <div className="scroll-content">
            {[...imgData[rowIndex], ...imgData[rowIndex]].map((pic, i) => (
              <CoroselItem myPic={pic} key={i} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Corosel;
