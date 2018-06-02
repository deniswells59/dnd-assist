import { connect } from 'react-redux';
import AdminComponent from '../components/Admin';

const mapDispatchToProps = dispatch => ({});

export const Admin = connect(state => ({
  user: state.user
}), mapDispatchToProps)(AdminComponent)
