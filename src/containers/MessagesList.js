import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList';
import { changeEditingStatus } from '../actions';

const mapDispatchToProps = dispatch => ({
  dispatchEdittingStatus: (status, items) => {
    dispatch(changeEditingStatus(status, items));
  },
});

export const MessagesList = connect(state => ({
  messages: state.messages
}), mapDispatchToProps)(MessagesListComponent)
