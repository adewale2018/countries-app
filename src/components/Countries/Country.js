import React from 'react';
import PropTypes from 'prop-types';
import './Country.css';


const Country = ({ data: { name, flag, capital, callingCodes, population } }) => {
  return (
    <div className="Country">
      <div id="card" className="card">
        <div className="card-header">
          <h3>{name}</h3>
        </div>
        <img src={flag} alt={`${name} flag` }/>
        <div className="c-body">
          <p><strong>Capital</strong>: {capital}</p>
          <p><strong>Calling Code</strong>: {callingCodes}</p>
          <p className="last"><strong>Population</strong>: {population}</p>
        </div>
        <a href="">Learn More</a>
      </div>
    </div>
  );
}
Country.propType = {
  data: PropTypes.object.isRequired
}

export default Country;
