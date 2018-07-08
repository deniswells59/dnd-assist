import { connect } from 'react-redux'
import TimerComponent from '../components/Timer'
import { updateTimer } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  updateTimer: timer => {
    dispatch(updateTimer(timer));
  },
});

export const Timer = connect(state => ({
  timer: state.timer,
}), mapDispatchToProps)(TimerComponent);
