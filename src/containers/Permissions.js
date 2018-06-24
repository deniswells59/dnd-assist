import { connect } from 'react-redux'
import PermissionsComponent from '../components/Permissions'
import { unlockPermission, unlockTutorial } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (permission, isAvailable) => {
    dispatch(unlockPermission(permission, isAvailable))
  },
  tutorialComplete: () => {
    dispatch(unlockTutorial())
  },
});

export const Permissions = connect(state => ({
  permissions: state.permissions
}), mapDispatchToProps)(PermissionsComponent);
