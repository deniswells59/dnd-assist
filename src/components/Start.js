import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Start extends Component {
  componentDidMount() {

  }

  render() {
    return(
      <div className="start">
        <div className="start-controls">
          <h1 className="animateTitle">The Resurrection on<br/>Sho'Lah Island</h1>

        </div>
        <img id="start_gif" src="./Sho'Lah.gif" alt=""/>
      </div>
    )
  }
}

Start.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    tutorialComplete: PropTypes.bool.isRequired,
  })
};

export default Start;
