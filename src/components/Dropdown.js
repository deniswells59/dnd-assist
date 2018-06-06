import React, { Component } from 'react';

const Dropdown = (WrappedComponent) => {
  return class extends Component {
    state = {
      open: false,
    }

    openDropdown = () => {
      this.setState({ open: true });
    }

    closeDropdown = () => {
      this.setState({ open: false });
    }

    render() {
      const { cssId, name, hideDropdown } = this.props;
      const { open } = this.state;

      return (
        <div id={cssId || 'dropdown'}>
          {open || hideDropdown ? (
            <div className="relative">
              <WrappedComponent
                {...this.props}
              />
              <button
                onClick={this.closeDropdown}
                className="dropdown-close"
              >X</button>
            </div>
          ) : (
            <div
              className="dropdown-open"
              onClick={this.openDropdown}>{name}</div>
          )}
        </div>
      )
    }
  }
}

export default Dropdown;
