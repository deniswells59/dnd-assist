import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { socketActions } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(socketActions.outgoing.addMessage(message, author))
  }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)
