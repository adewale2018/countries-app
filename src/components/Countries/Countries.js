import React from 'react';
import './Countries.css';

const Countries = ({ datas, loading }) => {
  if(loading) {
    return <h1 className="text-center text-danger">LOADING DATAS...</h1>
  }
  return (
    <div className="Countries">
      <div className="row">
        {datas.map(data => (
          <div className="col-md" key={data.name}>
            <div id="card" className="card text-center text-dark border-info" style={    {width: '25rem', height: "45rem"}}>
              <div className="card-header bg-transparent">
                <h3>{data.name}</h3>
              </div>
              <img src={data.flag} className="card-img-top" alt={`${data.name} flag` } height={100}/>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Capital: {data.capital}</li>
                <li className="list-group-item">Calling Code: {data.callingCodes}</li>
                <li className="list-group-item">Population: {data.population}</li>
              </ul>
              <div className="card-body">
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;
