import React, { Component } from 'react';

const netflix = 'netflix';
const roulette = 'roulette';

export default class SiteLogo extends Component {
  render() {
    return (
      <div>
        <a className="logoTittle" href="/"><b>{netflix}</b>{roulette}</a>
      </div>
    );
  }
}