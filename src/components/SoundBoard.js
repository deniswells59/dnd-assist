import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SoundBoard extends Component {
  componentWillReceiveProps(newProps) {
    const { sounds } =  newProps;
    Object.keys(sounds).forEach(key => {
      if(sounds[key].playing) this.player.play();
    });
  }

  render() {
    let { dispatchSound, dispatchSoundReset } = this.props;

    return (
      <div id="soundboard">
        <audio
          onEnded={dispatchSoundReset()}
          ref={(ref) => {
            this.player = ref
          }}
          src="/videoplayback.mp4"></audio>
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

export default SoundBoard;
