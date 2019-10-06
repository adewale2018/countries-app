import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ searchUsers }) => {
  const [state, setState] = useState('');

  const handleChange = e => {
    setState(e.target.value);
  }
  const onSubmit = e => {
    e.preventDefault();
    searchUsers(state);
    setState("");
  }
  return (
    <div className="SearchForm">
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input 
              type="text" 
              name="country" 
              placeholder="Search for Country"
              value={state}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-2">
            <input 
              type="submit" 
              value="Search"
              className="form-control btn btn-outline-dark btn-lg" 
            />
          </div>
        </div>
      </form>
    </div>
  );
}
SearchForm.propTypes = {
  searchUsers: PropTypes.func.isRequired
}

export default SearchForm;
