import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    return (
      <div className="cardBox">
        <div className="cardPicture"></div>
        <div className="container">
          <h1>name</h1>
          <h1>year</h1>
        </div>
        <h1>ganre</h1>
      </div>
    );
  }
}