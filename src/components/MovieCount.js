import React, { Component } from 'react';

let movieCountLabel = 'movies found';

export default class MovieCount extends Component {
  render() {
    return (
      <div>
        <h1 className="movieCount">{movieCountLabel}</h1>
      </div>
    );
  }
}