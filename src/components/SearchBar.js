import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchBox vertical">
        <p className="searchLabel">FIND YOUR MOVIE</p>
        <form className="searchBox horizontal">
          <input className="searchInput" type="search" placeholder="What do you want to watch?"></input>
          <button className="searchButton">SEARCH</button>
        </form>
      </div>
    );
  }
}