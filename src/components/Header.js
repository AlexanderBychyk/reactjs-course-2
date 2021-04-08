import React, { Component } from 'react';

import SiteLogo from './SiteLogo';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar'

export default class Header extends Component {
  render() {
    return (
      <div className="headerBlock">
        <div className="container">
          <SiteLogo />
          <AddMovie />
        </div>
        <p className="headerLabel">FIND YOUR MOVIE</p>
        <SearchBar />
      </div>
    );
  }
};
