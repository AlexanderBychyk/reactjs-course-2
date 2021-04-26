import React, { Component } from 'react';

import AddMovieModal from './AddMovieModal';

const addMovieButton = '+ ADD MOVIE'; 

export default class AddMovie extends Component {
  state = {
    showAddMovieModal: false,
  };

  handleOpenModal = () => {
    this.setState(() => ({showAddMovieModal: true}));
  }
  handleCloseModal = () => {
    this.setState(() => ({showAddMovieModal: false}));
  }
  render () {
    return (
      <div>
        <button className="addMovieButton" onClick={this.handleOpenModal}>{addMovieButton}</button>
        <AddMovieModal showAddMovieModal={this.state.showAddMovieModal} handleCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}