import React from 'react';
import './Alert.css';


const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div id="alert">
        <i className='fas fa-info-circle' style={{marginRight: ".5rem"}}/>
        {alert.msg}
      </div>
    )
  );
}

export default Alert;
