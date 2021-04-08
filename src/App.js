import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <Header />
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
