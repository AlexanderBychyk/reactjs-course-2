import React, { Component } from 'react';

import MovieCard from './MovieCard';

const movieArray = [
  {id: 1, movieName:'movie1', movieYear:2008, movieGenre:'Fun, horror'},
  {id: 2, movieName:'movie2', movieYear:2011, movieGenre:'Romance'},
  {id: 3, movieName:'movie3', movieYear:2015, movieGenre:'Cartoon'},
];
window.$movieCount = movieArray.length;

export default class ContentBox extends Component {
  render() {
    return (
      <div className="contentBox">
        {movieArray.map(el => 
          <MovieCard 
            key={el.id} 
            movieName={el.movieName} 
            movieYear={el.movieYear} 
            movieGenre={el.movieGenre}
          />
        )
        }
      </div>
    );
  }
}