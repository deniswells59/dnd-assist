import React from 'react';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const Overlay = ({ dispatchEdittingStatus, isEditting }) => (
  <div
    className="overlay"
    onClick={() => dispatchEdittingStatus(false, [])}
    style={{
      backgroundColor: isEditting ? '#fff' : 'transparent',
      width: windowWidth,
      height: windowHeight,
    }}
  >
    <div
      className="-overlay"
      onClick={() => dispatchEdittingStatus(false, [])}
    />
  </div>
);

export default Overlay;
