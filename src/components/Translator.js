import React, { Component } from 'react';
import Dropdown from './Dropdown';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const glitterian = ['O','L','S','B','O','F','N','H','E','','Z','S','M','F','A','V','','L','Z','R','I','W','','I','N',''];

class Translator extends Component {
  state = {
    input: '',
    translatedInput: '',
  }

  translatePassage = passage => (
    passage.split(' ').map(this.translate).join(' ')
  )

  translate = word => {
    const arr = word.split('');

    const translation = arr.map(letter => {
      const index = alphabet.indexOf(letter.toLowerCase());
      return index > -1 ? glitterian[index] : letter;
    });

    return translation.join('');
  }

  changeInput = e => {
    const input = e.target.value;

    this.setState({
      input,
      translatedInput: this.translatePassage(input),
    })
  }

  render() {
    const { input, translatedInput } = this.state;

    return(
      <div className="translator">

        <div className="letter-lineup">
          <div>{alphabet}</div>
          <div>{glitterian.map(l => l ? l.toLowerCase() : ' ')}</div>
        </div>

        <br/>

        <span>
          <p>COMMON:</p>
          <br />
          <textarea id="" cols="30" rows="5" onChange={this.changeInput} value={input}></textarea>

          <br />
          <br />

          <p>TRANSLATION:</p>
          <br />
          <div className="translation" dangerouslySetInnerHTML={{__html: translatedInput}}></div>
        </span>
      </div>
    )
  }
}

export default Dropdown(Translator);
