import React, { Component } from 'react';
import Overlay from './Overlay';

const withMenu = (WrappedComponent) => {
  return class extends Component {
    state = {
      overlayOpen: false,
    }

    openOverlay = () => {
      this.setState({
        overlayOpen: true,
      });
    }

    closeOverlay = () => {
      this.setState({
        overlayOpen: false,
      });
    }

    render() {
      const { overlayOpen } = this.state;
      return (
        <div>
          <WrappedComponent
            openOverlay={this.openOverlay}
            closeOverlay={this.closeOverlay}
            overlayOpen={overlayOpen}
            {...this.props}
          />

          {overlayOpen && (
            <Overlay
              closeOverlay={this.closeOverlay}
            />
          )}

        </div>
      )
    }
  }
}

export default withMenu;
