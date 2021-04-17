import React, { Component } from 'react';

import MovieCard from './MovieCard';

export default class ContentBox extends Component {
  render() {
    const array = [
      {id: 1, movieName:'movie1', movieYear:2008, movieGanre:'Fun, horror'},
      {id: 2, movieName:'movie2', movieYear:2011, movieGanre:'Romance'},
      {id: 3, movieName:'movie3', movieYear:2015, movieGanre:'Cartoon'}
    ];
    return (
      <div className="contentBox">
        {array.map(el => 
          <MovieCard key={el.id} movieName={el.movieName} movieYear={el.movieYear} movieGanre={el.movieGanre}/>
        )}
      </div>
    );
  }
}