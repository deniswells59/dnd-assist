import React from "react"

const Reconnect = ({ dispatchReconnect }) => (
  <button
    onClick={dispatchReconnect}
    className="reconnect">
    Reconnect
  </button>
);

export default Reconnect
