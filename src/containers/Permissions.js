import { connect } from 'react-redux'
import PermissionsComponent from '../components/Permissions'
import { unlockPermission } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (permission, isAvailable) => {
    dispatch(unlockPermission(permission, isAvailable))
  }
});

export const Permissions = connect(state => ({
  permissions: state.permissions
}), mapDispatchToProps)(PermissionsComponent);
