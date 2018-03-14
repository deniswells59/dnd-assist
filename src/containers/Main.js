import { connect } from 'react-redux';
import MainComponent from '../components/Main';
import { userLoginAttempt } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (credentials) => {
    dispatch(userLoginAttempt(credentials))
  }
})

export const Main = connect(state => ({
  user: state.user
}), mapDispatchToProps)(MainComponent)
