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
