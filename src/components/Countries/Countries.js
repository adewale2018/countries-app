import React from 'react';
import Country from './Country';
import PropTypes from 'prop-types';
import Spinner from './../Spinner/Spinner';
import './Countries.css';


const Countries = ({ datas, loading }) => {
  if(loading) {
    return <Spinner />
  }
  return (
    <div className="Countries row">
      {datas.map(data => (
        <Country data={data} key={data.name}/>
      ))}
    </div>
  );
}
Countries.propType = {
  datas: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Countries;
