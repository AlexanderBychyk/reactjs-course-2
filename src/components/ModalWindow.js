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
        onRequestClose={this.props.handleModal}
        contentLabel="Add Movie"
        className="addMovieBackground"
        overlayClassName="addMovieOverlay"
        ariaHideApp={false}
      >
        <div className="addMovieModalBox">
      <button className="closeAddMovieModalButton" onClick={this.props.handleModal}>
        <div className="closeButtonLine closeButtonLine--first" />
        <div className="closeButtonLine closeButtonLine--second" />
      </button>
      {this.props.jsx}
        </div>
      </Modal>
    );
  }
}