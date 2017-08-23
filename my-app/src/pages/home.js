import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import '../App.css';
import newLogo from '../nav-logo.png';
import nissanLogo from '../Nissan-logo.png';
import zukiLogo from '../suzuki-logo.gif';
import yotaLogo from '../Toyota-logo.png';
import NavBar from '../layout/Nav.js';
import Banner from '../layout/Banner.js';
import Suzuki from './suzuki.js';
import Toyota from './toyota.js';

class Home extends Component {
  render() {
    return (
        <div>HomePage</div>
    );
  }
}



export default Home;