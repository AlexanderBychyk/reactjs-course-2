import React, { Component } from 'react';

const addMovieButton = '+ ADD MOVIE'; 

export default class AddMovie extends Component {
  render () {
    return (
      <div>
        <button className="addMovieButton">{addMovieButton}</button>
      </div>
    );
  }
}