import React, { Component } from "react"
import { BrowserRouter, Route,  } from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import "./App.css"

import { Main } from "./containers/Main";
import { Player } from "./containers/Player";

class AppComponent extends Component {
  render() {
    const { user } = this.props;

    return (
      <BrowserRouter>
        <div className="main">
          <Route exact path='/' render={() => <Main user={user} />} />
          <Route path='/player' render={() => (
            user && user.id ? (
              <Player />
            ) : (
              <Redirect to='/' />
            )
          )} />
        </div>
      </BrowserRouter>
    )
  }
};

const App = connect(state => ({
  user: state.user
}), {})(AppComponent);

export default App;
