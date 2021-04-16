import React, { Component } from 'react';

import MovieCard from './MovieCard';

export default class ContentBox extends Component {
  render() {
    return (
      <div className="contentBox">
        <MovieCard movieName="movie1" movieYear="2008" movieGanre="Fun, horror"/>
        <MovieCard movieName="movie2" movieYear="2011" movieGanre="Romance"/>
        <MovieCard movieName="movie3" movieYear="2015" movieGanre="Cartoon"/>
        <MovieCard movieName="movie4" movieYear="2001" movieGanre="Action"/>
        <MovieCard movieName="movie5" movieYear="2018" movieGanre="Documentary"/>
        <MovieCard movieName="movie6" movieYear="1995" movieGanre="Fun, action"/>
        <MovieCard movieName="movie7" movieYear="2021" movieGanre="Anime"/>
        <MovieCard movieName="movie8" movieYear="1985" movieGanre="Detective"/>
        <MovieCard movieName="movie9" movieYear="2007" movieGanre="Cartoon"/>
        <MovieCard movieName="" movieYear="" movieGanre="" />
      </div>
    );
  }
}