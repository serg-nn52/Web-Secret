import React from 'react';
import loader from '../../assets/icons/loader.gif';
import style from './style.module.scss';

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Preloader;
