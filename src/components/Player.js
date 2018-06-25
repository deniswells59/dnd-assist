import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import PlayerInfo from './PlayerInfo';
import Editor from './Editor';

class Player extends Component {

  componentWillReceiveProps(newProps) {
    this.attemptToConnect(newProps);

    const { history } = this.props;

    const oldTutorialComplete = this.props.user.tutorialComplete;
    const newTutorialComplete = newProps.user.tutorialComplete;

    if(!oldTutorialComplete && newTutorialComplete) {
      history.push('/');
    }
  }

  componentDidMount() {
    this.attemptToConnect(this.props);
  }

  attemptToConnect = (props) => {
    const { user, socket, dispatchConnectToSocket } = props;

    if(socket && socket.open && !socket.connected) {
      console.log('Connect!')
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

export default withRouter(Player);
