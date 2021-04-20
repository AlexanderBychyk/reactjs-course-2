import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import ErrorBoundary from './components/ErrorBoundary';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div className="containerVertical">
        <ErrorBoundary>
          <Header />
          <Content />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
