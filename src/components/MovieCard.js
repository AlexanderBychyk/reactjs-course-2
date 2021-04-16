import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cardBox">
        <div className="cardPicture"></div>
        <div className="container">
          <h1 className="cardName">{this.props.movieName ? this.props.movieName : 'name'}</h1>
          <h1 className="cardYear">{this.props.movieYear ? this.props.movieYear : 'year'}</h1>
        </div>
        <h1 className="cardGanre">{this.props.movieGanre ? this.props.movieGanre : 'ganre'}</h1>
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
  movieYear: '2000',
  movieGanre: 'ganre'
}