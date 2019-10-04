import React, { Component } from 'react';
import './Navbar.css';


export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand">
            <i className="fas fa-globe d-inline-block align-top"></i>
          </h1>
          <h1>WORLD INFO APP</h1>
        </nav>
      </div>
    );
  }
}
