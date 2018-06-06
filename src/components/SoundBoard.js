import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

class SoundBoard extends Component {
  componentWillReceiveProps(newProps) {
    if(!this.props.user) return;

    const { sounds } =  newProps;
    const { role, _id } = this.props.user;

    if (role === 'admin') return;
    Object.keys(sounds).forEach(key => {
      const sound = sounds[key];
      if(sound.playing) {
        if (sound.playerId && _id !== sound.playerId) return;
        this.player.src = sound.src;
        this.player.play()
          .catch(e => console.log('error playing:', e));
      }
    });
  }

  render() {
    const { dispatchSound, dispatchSoundReset } = this.props;

    return (
      <div>
        <audio
          onEnded={() => dispatchSoundReset()}
          ref={(ref) => {
            this.player = ref
          }}></audio>
        <button
          onClick={() => {
            dispatchSound('secret')
          }}
          >Secret
        </button>
        <button
          onClick={() => {
            dispatchSound('twinkle')
          }}
          >Twinkle
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

export default Dropdown(SoundBoard);
