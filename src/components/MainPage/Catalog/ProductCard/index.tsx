import React from 'react';
import heart from 'assets/icons/heart.svg';
import { TProductType } from 'store/products/type';
import style from './style.module.scss';

const ProductCard: React.FC<TProductType> = ({
  img,
  inStock,
  isNew,
  isSecondHand,
  price,
  title,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.img}>
        <img
          src={img}
          alt="our product"
          onError={(e: any) => {
            e.target.style.display = 'none';
          }}
        />

        {isNew && <div className={style.new}>Новинка</div>}
      </div>
      <div className={style.description}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.character}>
          <p className={style.price}>{price.toLocaleString()} ₽</p>
          {!isSecondHand && <p className={style.isnew}>Новое</p>}
        </div>
        <div className={style.bottom}>
          <button type="button">В корзину</button>
          {inStock && <img src={heart} alt="heart" />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
