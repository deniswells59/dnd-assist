import { connect } from 'react-redux'
import PermissionsComponent from '../components/Permissions'
import { unlockPermission } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (permission) => {
    dispatch(unlockPermission(permission))
  }
});

export const Permissions = connect(state => ({
  permissions: state.permissions
}), mapDispatchToProps)(PermissionsComponent);
