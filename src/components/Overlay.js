import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const Overlay = ({ closeEverything }) => (
  <div
    className="overlay"
    onClick={closeEverything}
    style={{
      width: windowWidth,
      height: windowHeight,
    }}
  >
    <div
      className="-overlay"
      onClick={closeEverything}
    />
  </div>
);

export default Overlay;
