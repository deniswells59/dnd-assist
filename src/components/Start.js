import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Start extends Component {
  state = {
    animateButtonClass: '',
  }

  componentDidMount() {
    setTimeout(this.showButton, 3000);
  }

  showButton = () => {
    this.setState({
      animateButtonClass: 'animateButton'
    });
  }

  render() {
    console.log(this.state);
    return(
      <div className="start">
        <div className="start-controls">
          <h1 className="animateTitle">The Resurrection on<br/>Sho'Lah Island</h1>

          <Link to="/player">
            <button className={`start-button ${this.state.animateButtonClass}`}>
              START
            </button>
          </Link>
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
