import React, { Component } from 'react';

import SortBar from './SortBar';
import MovieCount from './MovieCount';
import ContentBox from './ContentBox';

export default class Content extends Component {
  render() {
    return (
      <div className="contentCanvas">
        <SortBar />
        <MovieCount />
        <ContentBox />
      </div>
    );
  }
}