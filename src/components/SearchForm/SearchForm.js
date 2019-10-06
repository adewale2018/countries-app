import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = () => {
  const [state, setState] = useState('');
  const handleChange = e => {
    setState(e.target.value);
  }
  return (
    <div className="SearchForm">
      <form>
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
          <i class="fas fa-search"></i>
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

export default SearchForm;
