import React, { Component } from 'react';
import TimerBar from './TimerBar';
import Dropdown from './Dropdown';

class Timer extends Component {
  state = {
    total: 0,
    splits: [],
    addingSplit: false,
  }

  toggleSplitModal = () => {
    this.setState({ addingSplit: !this.state.addingSplit });
  }

  changeTotal = e => {
    const { value } = e.target;

    this.setState({
      total: value,
    });
  }

  updateTimer = e => {
    e.preventDefault();
    const { updateTimer } = this.props;

    updateTimer(this.state);
  }

  render() {
    const { timer } = this.props;
    const { addingSplit } = this.state;
    const timerSet = timer.total <= 0;

    return (
      <div>
        {timerSet ? (
          <form onSubmit={this.updateTimer}>
            <label htmlFor="total">Total in mins</label>
            <input
              type="text"
              value={this.state.total}
              onChange={this.changeTotal}
            />

            <input type="submit" value="SET" />
          </form>
        ) : (
          <TimerBar
            addSplit={this.toggleSplitModal}
            {...this.state}
          />
        )}

        {addingSplit && (
          <div className="modal">
            <div className="modalContent">
              <form>
                <label htmlFor="name">Name</label>
                <input type="text"/>
                <label htmlFor="name">Total</label>
                <input type="text"/>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown(Timer);
