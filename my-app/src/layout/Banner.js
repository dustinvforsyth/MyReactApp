import React, { Component } from 'react';
import '../App.css';
import nissanLogo from '../Nissan-logo.png';
import zukiLogo from '../suzuki-logo.gif';
import yotaLogo from '../Toyota-logo.png';

export default class Banner extends Component {
  render() {
    return (
      <div>
        <img src={zukiLogo} role="presentation" className="banner-image" />
        <img src={yotaLogo} role="presentation" className="banner-image" />
        <img src={nissanLogo} role="presentation" className="banner-image" />
      </div>
    );
  }
}