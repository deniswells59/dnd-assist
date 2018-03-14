import React, { Component } from "react"
import { BrowserRouter, Route,  } from "react-router-dom";

import "./App.css"

import { Main } from "./containers/Main"
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"
import { Permissions } from "./containers/Permissions"
import { SoundBoard } from "./containers/SoundBoard"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Main} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

/* <div id="container">
  <Sidebar />
  <Permissions />
  <SoundBoard />
  <section id="main">
    <MessagesList />
    <AddMessage />
  </section>
</div> */
