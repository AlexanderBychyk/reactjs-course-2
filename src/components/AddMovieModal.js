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
      <div>
        <h1>Add Movie</h1>
        <button onClick={props.handleCloseModal}>X</button>
      </div>
      <p>Moive name</p>
      <input />
      <p>Moive year</p>
      <input />
      <p>Moive ganre</p>
      <input />
      <button>Submit</button>
    </div>
  </Modal>
);

export default AddMovieModal;