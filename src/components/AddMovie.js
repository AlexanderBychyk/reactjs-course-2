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
           defaultValue=""    
    />
    <h2 className="addMovieModalLabel">RELEASE DATE</h2>
    <input className="addMovieModalInput addMovieModalInput-date" 
           type="date"
           placeholder="Select Date"
           defaultValue=""    
        
    />
    <h2 className="addMovieModalLabel">MOVIE URL</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Movie URL here"   
           defaultValue=""    
    />
    <h2 className="addMovieModalLabel">GANRE</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Type ganre"    
           defaultValue=""    
    />
    <h2 className="addMovieModalLabel">OVERVIEW</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Overview here"
           defaultValue=""    
    />
    <h2 className="addMovieModalLabel">RUNTIME</h2>
    <input className="addMovieModalInput" 
           type="input"
           placeholder="Runtime here"   
           defaultValue=""    
    />
    <div className="AddMovieModalButtonBox">  
      <button className="resetAddMovieModalButton">RESET</button>
      <button className="buttonTypeOne submitAddMovieModalButton">SUBMIT</button>
    </div>
  </div>
);

export default class AddMovie extends Component {
  constructor(props){
    super(props)
    this.state = {
      showAddMovieModal: true, //after debug turn into false!!!
    };
    this.handleModal = this.handleModal.bind(this)
  }

  handleModal = () => this.setState((prevState) => ({showAddMovieModal: !prevState.showAddMovieModal}));

  render () {
    return (
      <div>
        <button className="addMovieButton" onClick={this.handleModal}>{addMovieButton}</button>
        <ModalWindow jsx={AddMovieJSX} handleModal={this.handleModal} showAddMovieModal={this.state.showAddMovieModal} />
      </div>
    );
  }
}