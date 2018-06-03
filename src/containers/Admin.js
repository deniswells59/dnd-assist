import { connect } from 'react-redux';
import AdminComponent from '../components/Admin';

import { playSound } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatchSound: (sound, playerId) => {
    dispatch(playSound(sound, playerId));
  },
});

export const Admin = connect(state => ({
  user: state.user,
  admin: state.admin,
}), mapDispatchToProps)(AdminComponent)
