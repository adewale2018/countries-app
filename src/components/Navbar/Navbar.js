import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <header className="Nav">
      <nav className="navbar bg-info">
        <h1 className="navbar-brand">
          <i className={`${icon} d-inline-block align-top`}></i>
        </h1>
        <h1>{title}</h1>
      </nav>
    </header>
  );
}
Navbar.defaultProps = {
  title: 'WORLD INFO APP',
  icon: 'fas fa-globe'
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;
