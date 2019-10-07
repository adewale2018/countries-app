import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div class="alert" style={{fontSize: '2rem', letterSpacing: ".1rem", backgroundColor: "orangered", textAlign: "center", color: '#fff', width: "60%", margin: ".8rem auto"}}>
        <i className='fas fa-info-circle' style={{marginRight: ".5rem"}}></i>{alert.msg}
      </div>
    )
  );
}

export default Alert;
