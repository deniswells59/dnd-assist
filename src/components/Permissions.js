import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Permissions extends Component {
  componentWillReceiveProps(newProps) {
    
  }
  
  render() {
    let { permissions, dispatchPermission, dispatchSound } = this.props;
    
    return (
      <div className="permissions">
        {Object.keys(permissions).map(key => (
          <p
            key={key}>
            {key}: 
            {permissions[key] ?
              <img width='250px' height='auto' src='/map.png' alt=""/> :
                `${permissions[key]}`
              }
              
            </p>
          ))}
          <button
          onClick={() => {
            dispatchPermission('map');
          }}
          >Show Map</button>
          <audio
            ref={(ref) => {
              this.player = ref
            }}
            src="/videoplayback.mp4"></audio>
          <button
            onClick={() => {
              dispatchSound() 
            }}
            >Twinkle</button>
        </div>
    )
  }
}

Permissions.propTypes = {
  permissions: PropTypes.shape({
    map: PropTypes.bool.isRequired,
  }),
};

export default Permissions;
