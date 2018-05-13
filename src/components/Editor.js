import React, { Component } from 'react';

class Editor extends Component {
  state = {
    name: '',
    traits: ['', '', ''],
    hitPoints: [''],
    expPoints: [''],
  }

  componentDidMount() {
    const { user } = this.props;

    this.setState({
      ...user,
    });
  }

  renderTraitsInput = (item, i) => (
    <input
      key={i}
      data-index={i}
      data-type="trait"
      maxLength="50"
      type="text"
      value={item}
      onChange={this.handleInputChange}
    />
  )

  handleInputChange = (e) => {
    const el = e.target;
    const { value } = e.target;
    const { type } = el.dataset;
    const newState = {...this.state};

    if(type === 'trait') {
      const { index } = el.dataset;
      let newTraits = [...this.state.traits];

      newTraits[index] = value;
      newState.traits = newTraits;
    } else {
      newState[type] = value;
    }

    this.setState(newState);
  }

  render() {
    const { items } = this.props;
    const isTraits = items && items.length > 1;

    const { name, traits } = this.state;

    return (
      <div className="info-editor-wrapper">
        <div className="info-editor">
          <form action="">
            {isTraits && (
              <span>
                <label htmlFor="name">NAME</label>
                <input
                  maxLength="50"
                  type="text"
                  data-type="name"
                  value={name}
                  onChange={this.handleInputChange}
                />

                <label htmlFor="name">TRAITS</label>
                {traits.map(this.renderTraitsInput)}
              </span>
            )}

          </form>
        </div>
      </div>
    )
  }
}

export default Editor;
