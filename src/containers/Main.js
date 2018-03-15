import { connect } from 'react-redux';
import MainComponent from '../components/Main';
import { userLoginAttempt, checkUser } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatch: (credentials) => {
    dispatch(userLoginAttempt(credentials))
  },
  checkUser: () => {
    dispatch(checkUser());
  }
})

export const Main = connect(state => ({
  user: state.user
}), mapDispatchToProps)(MainComponent)
