import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withMenu from './withMenu';
import PlayerInfo from './PlayerInfo';
import Editor from './Editor';

class Player extends Component {

  componentWillReceiveProps(newProps) {
    const { dispatchEdittingStatus, isEditting } = this.props;

    if(newProps.overlayOpen === false && isEditting) {
      dispatchEdittingStatus(false, []);
    }
  }

  openEditor = (items) => {
    const { dispatchEdittingStatus, openOverlay } = this.props;

    dispatchEdittingStatus(true, items);
    openOverlay();
  }

  closeEditor = () => {
    const { dispatchEdittingStatus, closeOverlay } = this.props;

    dispatchEdittingStatus(false, []);
    closeOverlay();
  }

  render() {
    const {
      user,
      isEditting,
      items,
      dispatchEdittingStatus,
    } = this.props;

    return(
      <div
        className="player"
      >
        <PlayerInfo
          openEditor={this.openEditor}
          title={user.name}
          listItems={user.traits}
        />
        <PlayerInfo
          openEditor={this.openEditor}
          title="Hit Points"
          listItems={user.hitPoints}
        />
        <PlayerInfo
          openEditor={this.openEditor}
          title="Exp Points"
          listItems={user.expPoints}
        />

        {isEditting && (
          <Editor
            closeEditor={this.closeEditor}
            closeOverlay={this.props.closeOverlay}
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

export default withMenu(Player);
