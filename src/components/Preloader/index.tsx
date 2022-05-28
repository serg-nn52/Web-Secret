import React from 'react';
import loader from '../../assets/icons/loader.gif';

const Preloader = () => {
  return (
    <div>
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Preloader;
