import React, { useState, useEffect } from 'react';
import Countries from './../Countries/Countries';
import Pagination from './../Pagination/Pagination';
import axios from 'axios';
import './Home.css';



const Home = () => {
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
    <div className="Home">
      <div className="container-fluid">
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

export default Home;
