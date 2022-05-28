import React from 'react';
import style from './style.module.scss';

const Error404 = () => {
  return (
    <div className={style.page}>
      <h2>Указанная страница не существует!</h2>
    </div>
  );
};

export default Error404;
