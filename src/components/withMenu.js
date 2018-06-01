import React, { Component } from 'react';
import Overlay from './Overlay';
import Menu from './Menu';

const withMenu = (WrappedComponent) => {
  return class extends Component {
    state = {
      overlayOpen: false,
      menuOpen: false,
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

    openMenu = () => {
      this.setState({
        menuOpen: true,
        overlayOpen: true,
      });
    }

    closeMenu = () => {
      this.setState({
        menuOpen: false,
        overlayOpen: false,
      });
    }

    closeEverything = () => {
      this.closeMenu();
      this.props.dispatchEdittingStatus(false, []);
    }

    render() {
      const { overlayOpen, menuOpen } = this.state;
      const { isEditting, dispatchEdittingStatus } = this.props;

      return (
        <div>
          <WrappedComponent
            overlayOpen={overlayOpen}
            {...this.props}
          />

          {(isEditting || menuOpen) && (
            <Overlay
              blocked={this.isEditting}
              closeEverything={this.closeEverything}
            />
          )}

          <Menu
            menuOpen={menuOpen}
            openMenu={this.openMenu}
            closeMenu={this.closeMenu}
          />

        </div>
      )
    }
  }
}

export default withMenu;
