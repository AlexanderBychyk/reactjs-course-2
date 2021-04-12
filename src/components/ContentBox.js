import React, { Component } from 'react';

import MovieCard from './MovieCard';

export default class ContentBox extends Component {
  render() {
    return (
      <div className="contentBox">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    );
  }
}