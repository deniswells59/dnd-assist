import React, { Component } from 'react';

class TimerBar extends Component {
  state = {
    time: 0,
  }

  render() {
    const {
      total,
      addSplit,
    } = this.props;

    return (
      <div className="timerBar-wrapper">
        <div>Total: {total} mins</div>
        <div
          onClick={addSplit}
          className="timerBar"
        >
          <div className="timeSpent"></div>
          <div className="totalTime"></div>
        </div>
      </div>
    );
  }
}

export default TimerBar;
