import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div class="alert alert-warning" role="alert" style={{fontSize: '2rem', letterSpacing: ".2rem", color: "orangered"}}>
        <i className='fas fa-info-circle'></i>{alert.msg}
      </div>
    )
  );
}

export default Alert;
