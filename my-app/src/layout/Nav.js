import React, { Component } from 'react';
import '../App.css';
import newLogo from '../nav-logo.png';
import { Link } from 'react-router';


export default class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const suzukiClass = location.pathname.match(/^\/suzuki/) ? "active" : "";
    const toyotaClass = location.pathname.match(/^\/toyota/) ? "active" : "";
    const nissanClass = location.pathname.match(/^\/nissan/) ? "active" : "";
    const builderPartsClass = location.pathname.match(/^\/builderParts/) ? "active" : "";
    const recoveryClass = location.pathname.match(/^\/recovery/) ? "active" : "";
    const accessoriesClass = location.pathname.match(/^\/accessories/) ? "active" : "";
    const apparelClass = location.pathname.match(/^\/apparel/) ? "active" : "";
    const instructionsClass = location.pathname.match(/^\/instructions/) ? "active" : "";
    const blogClass = location.pathname.match(/^\/blog/) ? "active" : "";

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src={newLogo} className="App-logo" alt="logo" /></a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li className={suzukiClass}><Link to="suzuki">Suzuki</Link></li>
              <li className={toyotaClass} ><Link to="toyota">Toyota</Link></li>
              <li className={nissanClass} ><Link to="nissan">Nissan</Link></li>
              <li className={builderPartsClass}><Link to="builderParts">Builder Parts</Link></li>
              <li className={recoveryClass}><Link to="recovery">Recovery</Link></li>
              <li className={accessoriesClass}><Link  to="accessories">Accessories</Link></li>
              <li className={apparelClass}><Link to="apparel">Apparel</Link></li>
              <li className={instructionsClass}><Link to="instructions">Instructions</Link></li>
              <li className={blogClass}><Link to="blog">Blog</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}