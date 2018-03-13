
import React, { Component } from "react"
import "./App.css"
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"
import { Permissions } from "./containers/Permissions"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <Permissions />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default App