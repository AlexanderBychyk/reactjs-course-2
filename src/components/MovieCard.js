import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const movieName = this.props.movieName ?? 'name';
    const movieYear = this.props.movieYear ?? 'year';
    const movieGanre = this.props.movieGanre ?? 'ganre';
    return (
      <div className="cardBox">
        <div className="cardPicture"></div>
        <div className="container">
          <h1 className="cardName">{movieName}</h1>
          <h1 className="cardYear">{movieYear}</h1>
        </div>
        <h1 className="cardGanre">{movieGanre}</h1>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieName: PropTypes.string,
  movieYear: PropTypes.number,
  movieGanre: PropTypes.string
}

MovieCard.defaultProps = {
  movieName: 'name',
  movieYear: 2000,
  movieGanre: 'ganre'
}