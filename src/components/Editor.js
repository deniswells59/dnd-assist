import React, { Component } from 'react';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

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

  renderInput = (attrs) => (
    <input
      type="text"
      maxLength="50"
      onChange={this.handleInputChange}
      {...attrs}
    />
  )

  renderTraitsInput = (item, i) => (
    this.renderInput({
      key: i,
      value: item,
      'data-index': i,
      'data-type': 'trait',
    })
  )

  handleInputChange = (e) => {
    const el = e.target;
    const { value } = e.target;
    const { type } = el.dataset;
    const newState = {...this.state};

    switch(type) {
      case 'trait':
        const { index } = el.dataset;
        let newTraits = [...this.state.traits];

        newTraits[index] = value;
        newState.traits = newTraits;
        break;
      case 'hp-current':
        let newHpCurrent = this.state.hitPoints[0].split('/');
        newHpCurrent[0] = value;

        newState.hitPoints = [newHpCurrent.join('/')];
        break;
      case 'hp-total':
        let newHpTotal = this.state.hitPoints[0].split('/');
        newHpTotal[1] = value;

        newState.hitPoints = [newHpTotal.join('/')];
        break;
      case 'exp':
        let newExp = this.state.expPoints[0].split('/');
        newExp[0] = value;

        newState.expPoints = [newExp.join('/')];
        break;
      default:
        newState[type] = value;
    }

    this.setState(newState);
  }

  submitUser = (e) => {
    e.preventDefault();
    this.props.dispatchUpdateUser(this.state);
    setTimeout(this.props.closeEditor, 600);
  }

  render() {
    const { items } = this.props;
    const isTraits = items && items.length > 1;
    const isHitPoints = items[0].split('/').length > 1;
    const isExp = !isTraits && !isHitPoints;

    const { name, traits, hitPoints, expPoints } = this.state;
    const hpItemsCurrent = hitPoints[0].split('/')[0];
    const hpItemsTotal = hitPoints[0].split('/')[1];

    return (
      <div
        className="info-editor-wrapper"
        style={{
          height: `${windowHeight}px`,
          width: `${windowWidth}px`,
        }}
      >
        <div className="info-editor">
          <form onSubmit={this.submitUser}>
            {isTraits && (
              <span>
                <label htmlFor="name">NAME</label>
                {this.renderInput({
                  value: name,
                  'data-type': 'name',
                })}

                <label htmlFor="name">TRAITS</label>
                {traits.map(this.renderTraitsInput)}
              </span>
            )}

            {isHitPoints && (
              <span>
                <label htmlFor="current-hp">Current</label>
                {this.renderInput({
                  value: hpItemsCurrent,
                  'data-type': 'hp-current',
                })}
                <label htmlFor="total-hp">Total</label>
                {this.renderInput({
                  value: hpItemsTotal,
                  'data-type': 'hp-total',
                })}
              </span>
            )}

            {isExp && (
              <span>
                <label htmlFor="exp">Exp</label>
                {this.renderInput({
                  value: expPoints[0],
                  'data-type': 'exp',
                })}
              </span>
            )}

            <input type="submit" value="SAVE" />
          </form>
        </div>
      </div>
    )
  }
}

export default Editor;
