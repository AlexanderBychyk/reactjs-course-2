import React, { Component } from 'react';

const movieCountLabel = ' movies found';
const movieCountLabelOne = ' movie found';

export default class MovieCount extends Component {
  render() {
    return (
      <div>
        <h1 className="movieCount">
          {window.$movieCount == 1 ? window.$movieCount + movieCountLabelOne : window.$movieCount + movieCountLabel}
        </h1>
      </div>
    );
  }
}