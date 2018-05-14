import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerInfo from './PlayerInfo';
import Editor from './Editor';
import Overlay from './Overlay';

class Player extends Component {
  state = {
    editorOpen: false,
    overlayOpen: false,
  }

  openEditor = (items) => {
    if(this.state.editorOpen) return;

    this.setState({
      editorOpen: true,
      overlayOpen: true,
      editorItems: items,
    })
  }

  closeEditor = () => {
    this.setState({
      editorOpen: false,
      overlayOpen: false,
    })
  }

  closeEverything = () => {
    this.setState({
      overlayOpen: false,
      editorOpen: false,
    })
  }

  render() {
    const { user } = this.props;
    const { editorOpen, editorItems, overlayOpen } = this.state;

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

        {editorOpen && (
          <Editor
            {...this.props}
            closeEditor={this.closeEditor}
            items={editorItems}
          />
        )}

        {overlayOpen && (
          <Overlay
            closeEverything={this.closeEverything}
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
