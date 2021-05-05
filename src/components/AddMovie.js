import React, { Component } from 'react';

import ModalWindow from './ModalWindow';

const addMovieButton = '+ ADD MOVIE'; 

const AddMovieJSX = (
  <div className="addMovieModalBox">
    <h1 className="addMovieModalTitle">ADD MOVIE</h1> 
    <h2 className="addMovieModalLabel">TITLE</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Title here"     
    />
    <h2 className="addMovieModalLabel">RELEASE DATE</h2>
    <input className="addMovieModalInput addMovieModalInput-date" 
           type="date"
           value="Select Date"
           placeholder="Select Date"
        
    />
    <h2 className="addMovieModalLabel">MOVIE URL</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Movie URL here"   
    />
    <h2 className="addMovieModalLabel">GANRE</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Type ganre"    
    />
    <h2 className="addMovieModalLabel">OVERVIEW</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Overview here"
    />
    <h2 className="addMovieModalLabel">RUNTIME</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Runtime here"   
    />
    <div className="AddMovieModalButtonBox">  
      <button className="resetAddMovieModalButton">RESET</button>
      <button className="buttonTypeOne submitAddMovieModalButton">SUBMIT</button>
    </div>
  </div>
);

export default class AddMovie extends Component {
  state = {
    showAddMovieModal: true, //after debug turn into false!!!
  };

  handleOpenModal = () => {
    this.setState(() => ({showAddMovieModal: true}));
  }
  handleCloseModal = () => {
    this.setState(() => ({showAddMovieModal: false}));
  }
  render () {
    return (
      <div>
        <button className="addMovieButton" onClick={this.handleOpenModal}>{addMovieButton}</button>
        <ModalWindow jsx={AddMovieJSX} showAddMovieModal={this.state.showAddMovieModal} handleCloseModal={this.handleCloseModal} />
      </div>
    );
  }
}