import { connect } from 'react-redux'
import PermissionsComponent from '../components/Permissions'
import { socketActions } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (permission, isAvailable) => {
    dispatch(socketActions.outgoing.unlockPermission(permission, isAvailable))
  },
  tutorialComplete: () => {
    dispatch(socketActions.outgoing.unlockTutorial())
  },
});

export const Permissions = connect(state => ({
  permissions: state.permissions
}), mapDispatchToProps)(PermissionsComponent);
