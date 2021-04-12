import React, { Component } from 'react';

export default class SortBar extends Component {
  render(){
    return (
      <div className="sortBox">
        <div>
          <button className="sortButton selectedButton">ALL</button>
          <button className="sortButton">DOCUMENTARY</button>
          <button className="sortButton">COMEDY</button>
          <button className="sortButton">HORROR</button>
          <button className="sortButton">CRIME</button>
        </div>
        <form className="filterBox">
          <label for="cars">SORT BY: </label>
          <select>
            <option value="1">RELEASE DATE</option>
            <option value="2">ALPHABET UP</option>
            <option value="3">ALPHABET DOWN</option>
          </select>
        </form>
      </div>
    );
  }
}