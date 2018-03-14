import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';

const Main = ({ user, dispatch }) => (
  <div>
    { user && user.id ? <h1>Player Page</h1> :
      <LoginForm dispatch={dispatch} />
    }
  </div>
);

Main.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    tutorialComplete: PropTypes.bool.isRequired,
  })
};

export default Main;
