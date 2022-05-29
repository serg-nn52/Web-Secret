import Preloader from 'components/Preloader';
import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';
import { getIsLoading } from 'store/products/selectors';
import style from './style.module.scss';

const Catalog: React.FC = () => {
  const isLoading = useAppSelector(getIsLoading);
  return isLoading ? (
    <Preloader />
  ) : (
    <div className={style.catalog}>Каталог</div>
  );
};

export default Catalog;
