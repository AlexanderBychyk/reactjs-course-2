import React from 'react';
import Modal from 'react-modal';

const AddMovieModal = (props) => (
  <Modal
    isOpen={props.showAddMovieModal}
    onRequestClose={props.handleCloseModal}
    contentLabel="Add Movie"
    className="addMovieBackground"
    overlayClassName="addMovieOverlay"
    ariaHideApp={false}
  >
    <div className="addMovieModalBox">
      <button className="closeAddMovieModalButton" onClick={props.handleCloseModal}>
        <div className="closeButtonLine closeButtonLine--first" />
        <div className="closeButtonLine closeButtonLine--second" />
      </button> {/* ☒ */}
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
  </Modal>
);

export default AddMovieModal;