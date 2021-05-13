import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptionsKebab: false,
      showOptions: false
    }
    this.handleMouseHoverCard = this.handleMouseHoverCard.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  handleMouseHoverCard() {
    this.setState((prevState) => ({showOptionsKebab: !prevState.showOptionsKebab}));
  };

  handleOptions() {
    this.setState((prevState) => ({showOptions: !prevState.showOptions}))
  };
  cardOptionsJSX = () => (
    <div className="cardOptions">
      <button className="cardOptionButton cardOptionClose" onClick={this.handleOptions} >x</button>
      <button className="cardOptionButton" >Edit</button>
      <button className="cardOptionButton" >Delete</button>
    </div>
  );

  cardButtonJSX = () => (
    <button className="cardButton" onClick={this.handleOptions}></button>
  );

  render() {
    const movieName = this.props.movieName ?? 'name';
    const movieYear = this.props.movieYear ?? 'year';
    const movieGanre = this.props.movieGanre ?? 'ganre';
    return (
      <div className="cardBox"
           onMouseEnter={this.handleMouseHoverCard}
           onMouseLeave={this.handleMouseHoverCard}
      >
        {this.state.showOptionsKebab && this.cardButtonJSX(this)}
        
        {this.state.showOptions && this.cardOptionsJSX(this)}

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