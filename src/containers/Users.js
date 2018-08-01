import { connect } from 'react-redux'
import UserSignUp from '../components/UserSignUp'
import { signUp } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (name) => {
    dispatch(signUp(name));
  },
});

export const Users = connect(() => ({}), mapDispatchToProps)(UserSignUp);
