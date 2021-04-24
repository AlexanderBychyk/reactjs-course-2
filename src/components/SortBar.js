import React, { Component } from 'react';

const sortLabel = 'SORT BY:';

const buttonArray = [
  {id: 1, className:'sortButton selectedButton', buttonName:'ALL'},
  {id: 2, className:'sortButton', buttonName:'DOCUMENTARY'},
  {id: 3, className:'sortButton', buttonName:'COMEDY'},
  {id: 4, className:'sortButton', buttonName:'HORROR'},
  {id: 5, className:'sortButton', buttonName:'CRIME'}
];
const optionArray = [
  {id: 1, optionName: 'RELEASE DATE'},
  {id: 2, optionName: 'ALPHABET UP'},
  {id: 3, optionName: 'ALPHABET DOWN'},
];

export default class SortBar extends Component {
  render(){
    return (
      <div className="sortBox">
        <div>
          {buttonArray.map(({ id, className, buttonName }) =>
            <button key={id} className={className}>
              {buttonName}
            </button>
          )}
        </div>
        <form className="filterBox">
          <label>{sortLabel}</label>
          <select>
            {optionArray.map(({ id, optionName }) =>
              <option key={id} value={id}>
                {optionName}
              </option>
            )}
          </select>
        </form>
      </div>
    );
  }
}