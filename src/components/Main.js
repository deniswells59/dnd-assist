import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';


import LoginForm from './LoginForm';
import Start from './Start';

const Main = ({ user, dispatch, checkUser }) => (
  <div>
    { user && user.id && user.tutorialComplete && <Start /> }
    { user && user.id && !user.tutorialComplete && <Redirect to='/player' /> }
    { (!user || !user.id) &&
        <LoginForm checkUser={checkUser} dispatch={dispatch} /> }
  </div>
);

Main.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    tutorialComplete: PropTypes.bool.isRequired,
  })
};

export default Main;
