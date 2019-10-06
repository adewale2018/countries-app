import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Countries from './components/Countries/Countries';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';


const App = () =>  {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      setDatas(response.data);
      setLoading(false);
    };
    fetchDatas();
  }, []);
  
  const searchUsers = async state => {
    setLoading(true);
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${state}`)
    setDatas(response.data);
    setLoading(false);
  };

  return (
    <div className="App container-fluid text-center">
      <Navbar />
      <SearchForm 
        searchUsers={searchUsers}
      />
      <div className="App-minor">
        <Countries 
          datas={datas}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
