import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return (
    <header className="Nav">
      <nav>
        <div className="Nav-left">
          <span style={{marginRight: '1rem', color: "#fff", fontSize: "2.8rem"}}><i className={`${icon}`}></i></span>
          <span style={{color: "#fff"}}>{title}</span>
        </div>
        <div className="Nav-right">
          <span><Link className="link" to="/">Home</Link></span>
          <span><Link className="link" to="/about">About</Link></span>
          <span><a className="link" target="_blank" rel="noopener noreferrer" href={'https://github.com/adewale2018'}>Contact</a></span>
        </div>
      </nav>
    </header>
  );
}
Navbar.defaultProps = {
  title: 'COUNTRIES INFORMANT',
  icon: 'fas fa-globe'
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;
