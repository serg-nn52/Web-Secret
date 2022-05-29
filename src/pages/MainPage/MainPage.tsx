import React from 'react';
import Catalog from '../../components/MainPage/Catalog';
import Filter from '../../components/MainPage/Filter';
import style from './style.module.scss';

const MainPage = () => {
  return (
    <div className={style.main}>
      <Filter />
      <Catalog />
    </div>
  );
};

export default MainPage;
