import { connect } from 'react-redux'
import SoundBoardComponent from '../components/SoundBoard'
import { playSound, resetSound } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatchSound: (sound) => {
    dispatch(playSound(sound))
  },
  dispatchSoundReset: (sound) => {
    dispatch(resetSound(sound))
  }
});

export const SoundBoard = connect(state => ({
  sounds: state.sounds
}), mapDispatchToProps)(SoundBoardComponent);
