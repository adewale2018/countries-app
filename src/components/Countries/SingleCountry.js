import React, { useEffect, Fragment } from 'react';
import Spinner from './../Spinner/Spinner';
import './SingleCountry.css';
import PropTypes from 'prop-types';


const SingleCountry = props => {
  const { singleLoading, initialRender } = props;
  useEffect(() => {
    props.getCountry(props.match.params.name);
  }, []);
  const { 
    name, 
    population, 
    flag, 
    nativeName, 
    timezones, 
    callingCodes, 
    currencies, 
    capital, 
    area, 
    numericCode, 
    region, 
    subregion, 
    demonym,
    languages,
    borders 
  } = props.country;

  if(initialRender && singleLoading){
    return <Spinner />
  } 
  return (
    <div className="main-container">
      <h1>welcome to the beautiful country of {name}</h1>
      <p>Below are the quick and vital information about {name}.</p>
      <div className="top-container">
        <div className="top-left">
          <h2><i className="fas fa-flag"/> {name}'s flag </h2>
          <img src={flag} alt={`${name}'s flag`}/>
        </div>
        <div className="top-right">
          <h2>About {name}</h2>
          <ul>
            <li>
              <h3><i className="fas fa-arrow-alt-circle-right"/> Native Name: {nativeName}</h3>
            </li>
            <li>
              <h3><i className="fas fa-arrow-alt-circle-right"/> Capital: {capital}</h3>
            </li>
            <li>
              <h3><i className="fas fa-arrow-alt-circle-right"/> Numeric Code: {numericCode}</h3>
            </li>
            <li>
              <h3><i className="fas fa-arrow-alt-circle-right"/> Population: {population}</h3>
            </li>
            <li>
              <h3><i className="fas fa-arrow-alt-circle-right"/> Calling Code: {callingCodes}</h3>
            </li>
            <li>
              <h3><i className="fas fa-arrow-alt-circle-right"/> Area: {area}</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-container">
        <h2>Others vital information to know about {name}</h2>
        <h3 className="timezone">Timezone(s): {timezones}</h3>
        <div className="bt-main">
          <div className="comon">
            <h3>Region</h3>
              <p>{region}</p>
          </div>
          <div className="comon">
            <h3>sub-region</h3>
              <p>{subregion}</p>
          </div>
          <div className="comon">
            <h3>demonym</h3>
              <p>{demonym}</p>
          </div>
        </div>
        <div id="bt-submain">
          <div className="list-class">
            <h3>Languages</h3>
              {languages.map(lang => (
                <Fragment key={lang.name}>
                <p>Name: {lang.name}</p>
                <p>Native Name: {lang.nativeName}</p>
                </Fragment>
              ))}
          </div>
          <div className="list-class">
            <h3>Borders</h3>
              {borders.map(border => (
                <Fragment key={border}>
                  <p>{border}</p>
                </Fragment>
              ))}
          </div>
          <div className="list-class">
            <h3>Currency</h3>
              {currencies.map(curr => (
                <Fragment key={curr.code}>
                  <p>Code: {curr.code}</p>
                  <p>Name: {curr.name}</p>
                  <p>Symbol: {curr.symbol}</p>
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
SingleCountry.propTypes = {
  singleLoading: PropTypes.bool.isRequired,
  initialRender: PropTypes.bool.isRequired,
  country: PropTypes.object.isRequired,
  getCountry: PropTypes.func.isRequired
}

export default SingleCountry;
