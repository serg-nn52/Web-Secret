import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './style.module.scss';

const PageWrapper: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Outlet />
    </div>
  );
};

export default PageWrapper;
