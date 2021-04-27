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
      <button className="closeAddMovieModalButton" onClick={props.handleCloseModal}>X</button>
      <h1>ADD MOVIE</h1>
      <p>TITLE</p>
      <input />
      <p>RELEASE DATE</p>
      <input />
      <p>MOVIE URL</p>
      <input />
      <p>GANRE</p>
      <input />
      <p>OVERVIEW</p>
      <input />
      <p>RUNTIME</p>
      <input />
      <div>  
        <button>Reset</button>
        <button>Submit</button>
      </div>
    </div>
  </Modal>
);

export default AddMovieModal;