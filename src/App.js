import React, { Component } from "react"
import { BrowserRouter, Route,  } from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import "./App.css"

import { Admin } from "./containers/Admin";
import { Main } from "./containers/Main";
import { Player } from "./containers/Player";
import { MessagesList } from "./containers/MessagesList";
import { SoundBoard } from "./containers/SoundBoard";
import { ToolList } from "./containers/ToolList";

import Map from "./components/Map";
import Translator from "./components/Translator";
import PictureBook from "./components/PictureBook";

class AppComponent extends Component {

  renderUser = () => {
    const { user } = this.props;

    return (
      <div className="main">
        <SoundBoard customStyle={{ display: 'none' }} hideDropdown />
        <Route exact path='/' render={() => <Main user={user} />} />
        <Route exact path='/chat' render={() => <MessagesList />} />
        <Route exact path='/tools' render={() => <ToolList />} />
        <Route exact path='/map' render={() => <Map />} />
        <Route exact path='/translator' render={() => <Translator hideDropdown />} />
        <Route exact path='/pictureBook' render={() => <PictureBook />} />
        <Route path='/player' render={() => (
          user && user._id ? (
            <Player withMenu />
          ) : (
            <Redirect to='/' />
          )
        )} />
      </div>
    )
  }

  renderAdmin = () => (
    <div className="main">
      <Route exact path='/' render={() => <Admin />} />
    </div>
  )

  render() {
    const { user } = this.props;

    return (
      <BrowserRouter>
        {user && user.role === 'admin' ? this.renderAdmin() : this.renderUser()}
      </BrowserRouter>
    )
  }
};

const App = connect(state => ({
  user: state.user
}), {})(AppComponent);

export default App;
