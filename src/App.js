import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Countries from './components/Countries/Countries';
import SearchForm from './components/SearchForm/SearchForm';
import Alert from './components/Alert/Alert';
import About from './components/Pages/About';
import './App.css';


const App = () =>  {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

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
      <Route exact path="/" render={props => (
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
      )} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
