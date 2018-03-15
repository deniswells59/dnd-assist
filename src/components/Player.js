import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
  componentDidMount() {

  }

  render() {
    return(
      <div className="player">
        <h1>Player Stats</h1>
      </div>
    )
  }
}

Player.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    tutorialComplete: PropTypes.bool.isRequired,
  })
};

export default Player;
