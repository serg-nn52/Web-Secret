import Preloader from 'components/Preloader';
import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';
import {
  getAllProducts,
  getIsLoading,
  getQuantityProducts,
} from 'store/products/selectors';
import { TProductType } from 'store/products/type';
import ProductCard from './ProductCard';
import style from './style.module.scss';

const Catalog: React.FC = () => {
  const isLoading = useAppSelector(getIsLoading);
  const allProducts = useAppSelector(getAllProducts);
  const quantity = useAppSelector(getQuantityProducts);

  if (!quantity && !isLoading) {
    return <h2>Товаров по Вашим критериям не найдено</h2>;
  }
  return isLoading ? (
    <Preloader />
  ) : (
    <ul className={style.catalog}>
      {allProducts.map((el: TProductType) => (
        <li key={el.id}>
          <ProductCard
            id={el.id}
            img={el.img}
            inStock={el.inStock}
            isNew={el.isNew}
            isSecondHand={el.isSecondHand}
            price={el.price}
            title={el.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default Catalog;
