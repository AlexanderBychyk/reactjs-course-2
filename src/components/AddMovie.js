import React, { Component } from 'react';

import AddMovieModal from './AddMovieModal';

const addMovieButton = '+ ADD MOVIE'; 

export default class AddMovie extends Component {
  render () {
    return (
      <div>
        <button className="addMovieButton">{addMovieButton}</button>
        <AddMovieModal />
      </div>
    );
  }
}