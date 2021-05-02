import React, { Component } from 'react';

const searchLabel = 'FIND YOUR MOVIE';
const searchButton = 'SEARCH';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchBox vertical">
        <p className="searchLabel">{searchLabel}</p>
        <form className="searchBox horizontal">
          <input className="searchInput" type="search" placeholder="What do you want to watch?"></input>
          <button className="buttonTypeOne searchButton">{searchButton}</button>
        </form>
      </div>
    );
  }
}