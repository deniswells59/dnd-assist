import { connect } from 'react-redux';
import PlayerComponent from '../components/Player';

export const Player = connect(state => ({
  user: state.user
}), {})(PlayerComponent);
