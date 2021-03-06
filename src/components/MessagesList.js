import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import withMenu from "./withMenu";

import { AddMessage } from "../containers/AddMessage";

const MessagesList = ({ messages }) => {
  return (
    <div>
      <section id="messages-list">
        <ul>
          {messages.map(message => (
            <Message
              key={Date.now()}
              {...message}
            />
          ))}
        </ul>
      </section>
      <AddMessage />
    </div>
  );
}


MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default withMenu(MessagesList);
