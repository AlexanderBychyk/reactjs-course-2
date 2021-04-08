import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input className="searchInput" type="search" placeholder="What do you want to watch?"></input>
          <button className="searchButton">SEARCH</button>
        </form>
      </div>
    );
  }
}