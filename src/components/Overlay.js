import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const Overlay = ({ closeEverything, isEditting }) => (
  <div
    className="overlay"
    onClick={closeEverything}
    style={{
      backgroundColor: isEditting ? '#fff' : 'transparent',
      width: windowWidth,
      height: windowHeight,
    }}
  >
    <div className="-overlay" />
  </div>
);

export default Overlay;
