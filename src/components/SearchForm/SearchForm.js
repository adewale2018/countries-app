import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ searchUsers, fireAlert }) => {
  const [state, setState] = useState('');

  const handleChange = e => {
    setState(e.target.value);
  }
  const onSubmit = e => {
    e.preventDefault();
    if(state === "") {
      fireAlert('Search field should not be emptied!');
    } else {
      searchUsers(state);
      setState("");
    }
  }
  return (
    <div className="SearchForm">
      <form onSubmit={onSubmit}>
          <div className="type-text">
            <input 
              type="text" 
              name="country" 
              placeholder="Search for a country"
              value={state}
              onChange={handleChange}
            />
            <i className="fas fa-search"></i>
          </div>
          <div>
            <input 
              type="submit" 
              value="Search" 
            />
          </div>
      </form>
    </div>
  );
}
SearchForm.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  fireAlert: PropTypes.func.isRequired
}

export default SearchForm;
