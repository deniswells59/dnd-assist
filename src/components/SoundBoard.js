import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SoundBoard extends Component {
  componentWillReceiveProps(newProps) {
    const { sounds } =  newProps;
    const { role, _id } = newProps;

    if (role === 'admin') return;
    Object.keys(sounds).forEach(key => {
      const sound = sounds[key];
      if(sound.playing) {
        if (sound.playerId && _id !== sound.playerId) return;
        this.player.src = sound.src;
        this.player.play()
          .catch(e => console.log(e));
      }
    });
  }

  render() {
    const { dispatchSound, dispatchSoundReset } = this.props;

    return (
      <div id="soundboard">
        <audio
          onEnded={() => dispatchSoundReset()}
          ref={(ref) => {
            this.player = ref
          }}></audio>
        <button
          onClick={() => {
            dispatchSound('twinkle')
          }}
          >Twinkle
        </button>
        <button
          onClick={() => {
            dispatchSound('secret')
          }}
          >Secret
        </button>
      </div>
    )
  }
}

SoundBoard.propTypes = {
  sounds: PropTypes.shape({
    twinkle: PropTypes.shape({
      playing: PropTypes.bool.isRequired,
    })
  }),
};

export default SoundBoard;
