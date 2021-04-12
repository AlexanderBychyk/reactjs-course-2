import React, { Component } from 'react';

import SiteLogo from './SiteLogo';

export default class Footer extends Component {
  render() {
    return (
      <div className="footerBlock">
        <SiteLogo />
      </div>
    );
  }
}