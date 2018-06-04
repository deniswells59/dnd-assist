import { connect } from 'react-redux'
import ToolListComponent from '../components/ToolList'

const mapDispatchToProps = dispatch => ({});

export const ToolList = connect(state => ({
  permissions: state.permissions,
}), mapDispatchToProps)(ToolListComponent);
