import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Countries from './components/Countries/Countries';
import Pagination from './components/Pagination/Pagination';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';


const App = () =>  {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(16);

  useEffect(() => {
    const fetchDatas = async () => {
      setLoading(true);
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      setDatas(response.data);
      setLoading(false);
    };
    fetchDatas();
  }, []);

  // Change Page 
  const paginate = pageNumbers => setCurrentPage(pageNumbers);

  // Get current datas;
  const indexOfLastData = currentPage * countryPerPage;
  const indexOfFirstData = indexOfLastData - countryPerPage;
  const currentDatas = datas.slice(indexOfFirstData, indexOfLastData);

  return (
    <div className="App container-fluid text-center">
      <Navbar />
      <SearchForm />
      <div className="App-minor">
        <Countries 
          datas={currentDatas} 
          loading={loading}
        />
        <Pagination 
          countryPerPage={countryPerPage} 
          datas={datas.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default App;
