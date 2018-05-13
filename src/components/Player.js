import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerInfo from './PlayerInfo';
import Editor from './Editor';

class Player extends Component {
  state = {
    editorOpen: false,
  }

  openEditor = (items) => {
    if(this.state.editorOpen) return;

    this.setState({
      editorOpen: true,
      editorItems: items,
    })
  }

  closeEditor = () => {
    this.setState({
      editorOpen: false,
    })
  }

  render() {
    const { user } = this.props;
    const { editorOpen, editorItems } = this.state;

    return(
      <div className="player">
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
