import React from 'react';
import PropTypes from 'prop-types';
import './Country.css';


const Country = ({ data: { name, flag, capital, callingCodes, population } }) => {
  return (
    <div className="Country col-sm">
      <div id="card" className="card text-center text-dark border-info" style={    {width: '25rem', height: "45rem"}}>
        <div className="card-header">
          <h3>{name}</h3>
        </div>
        <img src={flag} className="card-img-top" alt={`${name} flag` } height={100}/>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capital: {capital}</li>
          <li className="list-group-item">Calling Code: {callingCodes}</li>
          <li className="list-group-item">Population: {population}</li>
        </ul>
        <div className="card-body">
          <a href="" className="btn">Learn More</a>
        </div>
      </div>
    </div>
  );
}
Country.propType = {
  data: PropTypes.object.isRequired
}

export default Country;
