import React, { Component } from 'react';

class PictureBook extends Component {
  state = {
    page: 0,
    pages: [
      {
        word: 'OROL',
        color: 'rgb(23, 170, 233)',
        image: '../assets/sea.svg'
      },
      {
        word: 'FELO',
        color: 'rgb(224, 72, 72)',
        image: '../assets/fire.svg'
      },
      {
        word: 'FEZH',
        color: 'rgb(36, 196, 62)',
        image: '../assets/fish.svg'
      },
      {
        word: 'AVOF',
        color: 'rgb(23, 170, 233)',
        image: '../assets/open-door-with-border.svg'
      },
      {
        word: 'SSAZO',
        color: 'rgb(224, 72, 72)',
        image: '../assets/closed-door-with-border-silhouette.svg'
      },
      {
        word: 'FLIER',
        color: 'rgb(36, 196, 62)',
        image: '../assets/pear.svg'
      },
      {
        word: 'FLEOFB',
        color: 'rgb(23, 170, 233)',
        image: '../assets/men-shaking-hands.svg'
      },
    ]
  }

  nextPage = () => {
    const { page, pages } = this.state;
    const potentialPage = page + 1;
    const nextPage = pages[potentialPage] ? potentialPage : page;

    this.setState({
      page: nextPage,
    });
  }

  prevPage = () => {
    const { page, pages } = this.state;
    const potentialPage = page - 1;
    const prevPage = pages[potentialPage] ? potentialPage : page;

    this.setState({
      page: prevPage,
    });
  }

  render() {
    const { page, pages } = this.state;
    const currentPage = pages[page];

    const prevPage = pages[page - 1] !== undefined;
    const nextPage = pages[page + 1] !== undefined;

    return (
      <div
        className="pictureBook"
        style={{ background: currentPage.color }}
      >
        <div className="pictureBook-page">
          <img src={currentPage.image} alt="page" />
          <h2>{currentPage.word}</h2>
        </div>

        <div className="pictureBook-controls">
          <button
            disabled={!prevPage}
            onClick={this.prevPage}
          >{'<'}</button>
          <button
            disabled={!nextPage}
            onClick={this.nextPage}
          >{'>'}</button>
        </div>
      </div>
    );
  }
};

export default PictureBook;
