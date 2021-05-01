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
    <div className="AddMovieModalBox">
      {/* <button className="closeAddMovieModalButton" onClick={props.handleCloseModal}>X</button>
      <h1>ADD MOVIE</h1> */}
      <h2 className="AddMovieModalLabel">TITLE</h2>
      <input className="AddMovieModalInput" 
             type="input"
             placeholder="Title here"
      
      />
      <h2 className="AddMovieModalLabel">RELEASE DATE</h2>
      <input className="AddMovieModalInput" 
             type="input"
             placeholder="Title here"
      
      />
      <h2 className="AddMovieModalLabel">MOVIE URL</h2>
      <input className="AddMovieModalInput" 
             type="input"
             placeholder="Title here"
      
      />
      <h2 className="AddMovieModalLabel">GANRE</h2>
      <input className="AddMovieModalInput" 
             type="input"
             placeholder="Title here"
      
      />
      <h2 className="AddMovieModalLabel">OVERVIEW</h2>
      <input className="AddMovieModalInput" 
             type="input"
             placeholder="Title here"
      
      />
      <h2 className="AddMovieModalLabel">RUNTIME</h2>
      <input className="AddMovieModalInput" 
             type="input"
             placeholder="Title here"
      
      />
      <div>  
        <button>Reset</button>
        <button>Submit</button>
      </div>
    </div>
  </Modal>
);

export default AddMovieModal;