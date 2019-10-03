import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { datas: ""}
  }
  async componentDidMount() {
    const resp = await axios.get('https://restcountries.eu/rest/v2/all');
    const { data } = resp;
    this.setState({ datas: data});
    console.log('STATE', this.state.datas);
  }
  render() {
    const { datas } = this.state;
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
          { datas && datas.map(data => (
            <div className="col-md" key={data.name}>
              <div id="card" className="card text-center text-dark border-info" style={{width: '25rem', height: "40rem"}}>
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
      </div>
    );
  }
}
