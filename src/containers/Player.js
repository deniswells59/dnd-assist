import { connect } from 'react-redux';
import PlayerComponent from '../components/Player';
import withMenu from '../components/withMenu';
import { updateUserAttempt, changeEditingStatus, socketActions } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatchUpdateUser: (user) => {
    dispatch(updateUserAttempt(user));
  },
  dispatchEdittingStatus: (status, items) => {
    dispatch(changeEditingStatus(status, items));
  },
  dispatchConnectToSocket: (user) => {
    dispatch(socketActions.outgoing.connectToSocket(user));
  }
});

export const Player = connect(state => {
  return {
    user: state.user,
    ...state.player,
    socket: state.socket,
  }
}, mapDispatchToProps)(withMenu(PlayerComponent));
