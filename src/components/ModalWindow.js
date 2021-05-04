import React, { Component } from 'react';

import Modal from 'react-modal';
// const ModalWindow = (props) => (
//   this.props.addMovieJSX
// );

// export default ModalWindow;

export default class ModalWindow extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      console.log(this.props),
      <Modal
        isOpen={this.props.showAddMovieModal}
        onRequestClose={this.props.handleCloseModal}
        contentLabel="Add Movie"
        className="addMovieBackground"
        overlayClassName="addMovieOverlay"
        ariaHideApp={false}
      >
      {this.props.addMovieJSX}
      </Modal>
    );
  }
}