import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerInfo from './PlayerInfo';

class Player extends Component {
  render() {
    const { user } = this.props;

    return(
      <div className="player">
        <PlayerInfo
          title={user.name}
          listItems={user.traits}
        />
        <PlayerInfo
          title="Hit Points"
          listItems={user.hitPoints}
        />
        <PlayerInfo
          title="Exp Points"
          listItems={user.expPoints}
        />
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
