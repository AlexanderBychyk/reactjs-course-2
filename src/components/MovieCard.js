import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModalWindow from './ModalWindow';

const deleteOptionJSX = (
  <div className="addMovieModalBox">
    <h1 className="addMovieModalTitle">DELETE MOVIE</h1> 
    <h2 className="addMovieModalLabel">Are you sure you want to delete this movie?</h2>
    
    <div className="AddMovieModalButtonBox"> 
    <button className="buttonTypeOne submitAddMovieModalButton">CONFIRM</button>
    </div>
  </div>
);

const editOptionJSX = (
  <div className="addMovieModalBox">
    <h1 className="addMovieModalTitle">EDIT MOVIE</h1>
    <h2 className="addMovieModalLabel">MOVIE ID</h2>
    <p>id</p> 
    <h2 className="addMovieModalLabel">TITLE</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Title here" 
           defaultValue=""    
    />
    <h2 className="addMovieModalLabel">RELEASE DATE</h2>
    <input className="addMovieModalInput addMovieModalInput-date" 
           type="date"
           placeholder="Select Date"
           defaultValue=""    
        
    />
    <h2 className="addMovieModalLabel">MOVIE URL</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Movie URL here"   
           defaultValue=""    
    />
    <h2 className="addMovieModalLabel">GENRE</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Type genre"    
           defaultValue=""    
    />
    <h2 className="addMovieModalLabel">OVERVIEW</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Overview here"
           defaultValue=""    
    />
    <h2 className="addMovieModalLabel">RUNTIME</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Runtime here"   
           defaultValue=""    
    />
    <div className="AddMovieModalButtonBox">  
      <button className="resetAddMovieModalButton">RESET</button>
      <button className="buttonTypeOne submitAddMovieModalButton">SAVE</button>
    </div>
  </div>
);

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptionsKebab: false,
      showOptions: false,
      showEditModal: false,
      showDeleteModal: false
    }
    this.handleMouseHoverCard = this.handleMouseHoverCard.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.handleDeleteModal = this.handleDeleteModal.bind(this);
    this.handleEditModal = this.handleEditModal.bind(this);
  }

  handleMouseHoverCard() {
    this.setState((prevState) => ({showOptionsKebab: !prevState.showOptionsKebab}));
  };

  handleOptions() {
    this.setState((prevState) => ({showOptions: !prevState.showOptions}))
  };

  handleEditModal () {
   this.setState((prevState) => ({showEditModal: !prevState.showEditModal}));
   this.setState({showOptionsKebab: false})
  }
  handleDeleteModal () {
   this.setState((prevState) => ({showDeleteModal: !prevState.showDeleteModal}));
   this.setState({showOptionsKebab: false})
  }

  cardOptionsJSX = () => (
    <div className="cardOptions">
      <button className="cardOptionButton cardOptionClose" onClick={this.handleOptions} >x</button>
      <button className="cardOptionButton" onClick={this.handleEditModal} >Edit</button>
      <ModalWindow jsx={editOptionJSX} handleModal={this.handleEditModal} showAddMovieModal={this.state.showEditModal} />
      <button className="cardOptionButton" onClick={this.handleDeleteModal} >Delete</button>
      <ModalWindow jsx={deleteOptionJSX} handleModal={this.handleDeleteModal} showAddMovieModal={this.state.showDeleteModal} />
    </div>
  );

  cardButtonJSX = () => (
    <button className="cardButton" onClick={this.handleOptions}></button>
  );

  render() {
    const movieName = this.props.movieName ?? 'name';
    const movieYear = this.props.movieYear ?? 'year';
    const movieGenre = this.props.movieGenre ?? 'genre';
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
        <h1 className="cardGenre">{movieGenre}</h1>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieName: PropTypes.string,
  movieYear: PropTypes.number,
  movieGenre: PropTypes.string
}

MovieCard.defaultProps = {
  movieName: 'name',
  movieYear: 2000,
  movieGenre: 'genre'
}