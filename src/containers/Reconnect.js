import { connect } from 'react-redux';
import ReconnectComponent from '../components/Reconnect';
import { socketActions } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatchReconnect: () => {
    dispatch(socketActions.outgoing.reconnectToPlayers());
  },
});

export const Reconnect = connect(() => ({}), mapDispatchToProps)(ReconnectComponent);
