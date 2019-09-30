import React, { Component } from 'react';
import './Navbar.css';


export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-light bg-primary">
          <h1 className="navbar-brand">
            <i className="fas fa-globe d-inline-block align-top"></i>
          </h1>
          COUNTRIES APP
        </nav>
      </div>
    );
  }
}
