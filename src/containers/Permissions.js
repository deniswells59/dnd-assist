import { connect } from 'react-redux'
import PermissionsComponent from '../components/Permissions'
import { unlockPermission, playSound } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatchPermission: (permission) => {
    dispatch(unlockPermission(permission))
  },
  dispatchSound: (permission) => {
    dispatch(playSound())
  }
});

export const Permissions = connect(state => ({
  permissions: state.permissions
}), mapDispatchToProps)(PermissionsComponent);
