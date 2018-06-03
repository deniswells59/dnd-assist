import { connect } from 'react-redux'
import SoundBoardComponent from '../components/SoundBoard'
import { playSound, resetSound } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatchSound: (sound) => {
    dispatch(playSound(sound));
  },
  dispatchSoundReset: () => {
    dispatch(resetSound());
  }
});

export const SoundBoard = connect(state => ({
  sounds: state.sounds,
  user: state.user,
}), mapDispatchToProps)(SoundBoardComponent);
