import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const Overlay = ({ closeOverlay }) => (
  <div
    className="overlay"
    onClick={closeOverlay}
    style={{
      width: windowWidth,
      height: windowHeight,
    }}
  >
    <div
      className="-overlay"
      onClick={closeOverlay}
    />
  </div>
);

export default Overlay;
