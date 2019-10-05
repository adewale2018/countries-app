import React from 'react';
import './Pagination.css';

const Pagination = ({ countryPerPage, datas, paginate }) => {
  const pageNumbers = [];
  for(let i = 1; i <= Math.ceil(datas/countryPerPage); i++ ) {
    pageNumbers.push(i);
  }
  return (
    <div className="container-fluid">
      <div className="jumbotron-fluid">
        <div className="Pagination"> 
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
            {pageNumbers.map(number => (
              <li key={number} className="page-item">
                <a 
                  className='page-link' 
                  href="javascript:void(0)"
                  onClick={() => paginate(number)}
                >{number}
                </a>
              </li>
            ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
