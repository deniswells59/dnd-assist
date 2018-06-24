import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerInfo from './PlayerInfo';
import Editor from './Editor';

class Player extends Component {

  componentWillReceiveProps(newProps) {
    const { user, dispatchConnectToSocket } = newProps;
    const { socket } = newProps;

    if(socket && socket.open && !socket.connected) {
      dispatchConnectToSocket(user);
    }
  }

  openEditor = (items) => {
    const { dispatchEdittingStatus } = this.props;

    dispatchEdittingStatus(true, items);
  }

  closeEditor = () => {
    const { dispatchEdittingStatus } = this.props;

    dispatchEdittingStatus(false, []);
  }

  healthRender = () => {
    const { user } = this.props;
    const { hitPoints } = user;

    const numbers = hitPoints[0].split('/');
    const current = numbers[0];
    const total = numbers[1];

    const lowHealth = current < total * 0.75;

    return (
      <li
        className='player-info-single'
      >
        <span className={lowHealth ? 'red' : 'black'}>{current}</span>
        <span>/</span>
        <span>{total}</span>
      </li>
    );
  }

  render() {
    const {
      user,
      isEditting,
      items,
      cannotEdit,
    } = this.props;

    return(
      <div
        className="player"
      >
        <PlayerInfo
          cannotEdit={cannotEdit}
          openEditor={this.openEditor}
          title={user.name}
          listItems={user.traits}
        />
        <PlayerInfo
          cannotEdit={cannotEdit}
          openEditor={this.openEditor}
          title="Hit Points"
          listItems={user.hitPoints}
          customRender={this.healthRender}
        />
        <PlayerInfo
          cannotEdit={cannotEdit}
          openEditor={this.openEditor}
          title="Exp Points"
          listItems={user.expPoints}
        />

        {isEditting && (
          <Editor
            closeEditor={this.closeEditor}
            items={items}
            {...this.props}
          />
        )}

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
