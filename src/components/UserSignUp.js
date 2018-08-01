import React, { Component } from 'react';
import Dropdown from './Dropdown';

class UserSignUp extends Component {
  state = {
    name: ''
  }

  handleInput = (e) => {
    const name = e.target.value;
    this.setState({ name });
  }

  submit = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    dispatch(this.state.name);
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={this.handleInput}
          />
          <input type="submit" value="Create" />
        </form>
      </div>
    )
  }
}

export default Dropdown(UserSignUp);
