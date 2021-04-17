import React, { Component } from 'react';

export default class SortBar extends Component {
  render(){
    const bArray = [
      {id: 1, className:'sortButton selectedButton', buttonName:'ALL'},
      {id: 2, className:'sortButton', buttonName:'DOCUMENTARY'},
      {id: 3, className:'sortButton', buttonName:'COMEDY'},
      {id: 4, className:'sortButton', buttonName:'HORROR'},
      {id: 5, className:'sortButton', buttonName:'CRIME'}
    ];
    const oArray = [
      {id: 1, optionName: 'RELEASE DATE'},
      {id: 2, optionName: 'ALPHABET UP'},
      {id: 3, optionName: 'ALPHABET DOWN'},
    ];
    return (
      <div className="sortBox">
        <div>
          {bArray.map(el =>
            <button key={el.id} className={el.className}>{el.buttonName}</button>
          )}
        </div>
        <form className="filterBox">
          <label>SORT BY: </label>
          <select>
            {oArray.map(el =>
              <option key={el.id} value={el.id}>{el.optionName}</option>
            )}
          </select>
        </form>
      </div>
    );
  }
}