import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ user, dispatch }) => (
  <div>
    { user && user.id ? <h1>Player Page</h1> :
      <form
        onSubmit={e => {
          e.preventDefault();

          dispatch({
            user: this.user.value,
            pass: this.pass.value,
          });
        }}>
        <input ref={ref => this.user = ref} type="text" placeholder="User"/>
        <input ref={ref => this.pass = ref} type="password" placeholder="Pass"/>
        <input type="submit" value="SUBMIT"/>
      </form>
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
