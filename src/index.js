// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());

import React from 'react';
import ReactDOM from 'react-dom';

const temp = <h1>Hello there!</h1>; // variant to check babel
// const temp = React.createElement('h1', {className: 'title'}, 'Hello there!'); //right variant
ReactDOM.render(temp, document.getElementById('root'));
