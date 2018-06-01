import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';


import LoginForm from './LoginForm';
// import Start from './Start';

const Main = ({ user, dispatch, checkUser }) => (
  <div>
    {/* Changes this top route to <Start /> soon! */}
    { user && user._id && user.tutorialComplete && <Redirect to='/player' /> }
    { user && user._id && !user.tutorialComplete && <Redirect to='/player' /> }
    { (!user || !user._id) &&
        <LoginForm checkUser={checkUser} dispatch={dispatch} /> }
  </div>
);

Main.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
    tutorialComplete: PropTypes.bool.isRequired,
  })
};

Main.defaultProps = {
  tutorialComplete: false,
};

export default Main;
