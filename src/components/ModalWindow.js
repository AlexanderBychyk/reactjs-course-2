import React, { Component } from 'react';

import Modal from 'react-modal';

export default class ModalWindow extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Modal
        isOpen={this.props.showAddMovieModal}
        onRequestClose={this.props.handleCloseModal}
        contentLabel="Add Movie"
        className="addMovieBackground"
        overlayClassName="addMovieOverlay"
        ariaHideApp={false}
      >
        <div className="addMovieModalBox">
      <button className="closeAddMovieModalButton" onClick={this.props.handleCloseModal}>
        <div className="closeButtonLine closeButtonLine--first" />
        <div className="closeButtonLine closeButtonLine--second" />
      </button>
      {this.props.jsx}
        </div>
      </Modal>
    );
  }
}