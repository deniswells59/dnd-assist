import React, { Component } from 'react';

class LoginForm extends Component {
  componentDidMount() {
    this.props.checkUser();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.dispatch({
      username: this.user.value,
      password: this.pass.value,
    });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}>
        <label>Login</label>
        <input ref={ref => this.user = ref} type="text" placeholder="User"/>
        <input ref={ref => this.pass = ref} type="password" placeholder="Pass"/>
        <input type="submit" value="Enter"/>
      </form>
    )
  }
}

export default LoginForm;
