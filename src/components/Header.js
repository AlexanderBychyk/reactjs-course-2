import React, { Component } from 'react';

import SiteLogo from './SiteLogo';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar'

export default class Header extends Component {
  render() {
    return (
      <div className="headerBlock">
        <div className="container horizontal">
          <SiteLogo />
          <AddMovie />
        </div>
        <SearchBar />
      </div>
    );
  }
};
