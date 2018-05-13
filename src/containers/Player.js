import { connect } from 'react-redux';
import PlayerComponent from '../components/Player';
import { updateUserAttempt } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatchUpdateUser: (user) => {
    dispatch(updateUserAttempt(user))
  },
});

export const Player = connect(state => ({
  user: state.user
}), mapDispatchToProps)(PlayerComponent);
