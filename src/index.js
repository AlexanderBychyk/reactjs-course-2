import React from 'react';
import ReactDOM from 'react-dom';

class WebPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
};

ReactDOM.render(<WebPage />, document.getElementById('root'));
