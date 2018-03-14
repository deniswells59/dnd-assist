import React, { Component } from 'react';

class LoginForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    e.preventDefault();
    console.log('e', this.props.dispatch);

    this.props.dispatch({
      user: this.user.value,
      pass: this.pass.value,
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}>
        <input ref={ref => this.user = ref} type="text" placeholder="User"/>
        <input ref={ref => this.pass = ref} type="password" placeholder="Pass"/>
        <input type="submit" value="SUBMIT"/>
      </form>
    )
  }
}

export default LoginForm;
