import './corosel.css';
import CoroselItem from './coroselItem';
import React, { useEffect, useRef } from 'react';

const Corosel = ({ imgData, direction }) => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const handleInfiniteScroll = (rowRef, direction) => {
      let scrollAmount = 0;
      const step = 1; // Speed of scrolling
      const interval = setInterval(() => {
        if (direction === 'left') {
          scrollAmount -= step;
          if (scrollAmount <= -rowRef.current.scrollWidth / 4.5) {
            rowRef.current.append(...Array.from(rowRef.current.children).slice(0, rowRef.current.children.length / 2));
            scrollAmount = 0;
          }
        } else {
          scrollAmount += step;
          if (scrollAmount >= rowRef.current.scrollWidth / 4.5) {
            rowRef.current.append(...Array.from(rowRef.current.children).slice(0, rowRef.current.children.length / 2));
            scrollAmount = 0;
          }
        }
        rowRef.current.style.transform = `translateX(${scrollAmount}px)`;
      }, 20); // Control speed here

      return () => clearInterval(interval); // Cleanup the interval
    };

    // Start scrolling for each row
    const cleanupRow1 = handleInfiniteScroll(row1Ref, direction[0]);
    const cleanupRow2 = handleInfiniteScroll(row2Ref, direction[1]);
    const cleanupRow3 = handleInfiniteScroll(row3Ref, direction[2]);

    return () => {
      cleanupRow1();
      cleanupRow2();
      cleanupRow3();
    };
  }, [direction]);

  return (
    <>
      <div className="row1" ref={row1Ref}>
        {imgData[0].map((pic, i) => (
          <CoroselItem myPic={pic} key={i} />
        ))}
      </div>
      <div className="row2" ref={row2Ref}>
        {imgData[1].map((pic, i) => (
          <CoroselItem myPic={pic} key={i} />
        ))}
      </div>
      <div className="row3" ref={row3Ref}>
        {imgData[2].map((pic, i) => (
          <CoroselItem myPic={pic} key={i} />
        ))}
      </div>
    </>
  );
};

export default Corosel;
