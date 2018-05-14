import { connect } from 'react-redux';
import PlayerComponent from '../components/Player';
import { updateUserAttempt, changeEditingStatus } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatchUpdateUser: (user) => {
    dispatch(updateUserAttempt(user));
  },
  dispatchEdittingStatus: (status, items) => {
    dispatch(changeEditingStatus(status, items));
  }
});

export const Player = connect(state => {
  return {
    user: state.user,
    ...state.player,
  }
}, mapDispatchToProps)(PlayerComponent);
