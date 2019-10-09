import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Countries from './components/Countries/Countries';
import SearchForm from './components/SearchForm/SearchForm';
import Alert from './components/Alert/Alert';
import About from './components/Pages/About';
import SingleCountry from './components/Countries/SingleCountry';
// import Footer from './components/Footer/Footer';
import './App.css';


const App = () =>  {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [singleLoading, setSingleLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      setDatas(response.data);
      setLoading(false);
    };
    fetchDatas();
  }, []);
  
  // Search for country
  const searchUsers = async state => {
    setLoading(true);
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${state}`)
    setDatas(response.data);
    setLoading(false);
  };

  // Get a single country

  const getCountry =  async name => {
    setSingleLoading(true);
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
    setCountry(response.data[0]);
    setSingleLoading(false);
  }

  // Alert if search field is empty.
  const fireAlert = (msg, type) => {
    setAlert({msg, type});

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <div className="App container-fluid text-center">
      <Navbar />
      <Alert alert={alert}/>
      <Switch>
      <Route 
        exact 
        path="/" 
        render={props => (
          <Fragment>
            <SearchForm 
            searchUsers={searchUsers}
            fireAlert={fireAlert}
          />
          <div className="App-minor">
            <Countries 
              datas={datas}
              loading={loading}
            />
          </div>
          </Fragment>
        )} 
      />
      <Route 
        exact 
        path="/about" 
        component={About} 
      />
      <Route 
        exact 
        path="/:name" 
        render={ props => (
        <SingleCountry 
          {...props } 
          getCountry={getCountry} 
          country={country} 
          initialRender={true}
          singleLoading={singleLoading}
        />
        )} 
      />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
