import { useAppSelector } from 'hooks/useAppSelector';
import React from 'react';
import { getQuantityProducts } from 'store/products/selectors';
import Checkbox from './Checkbox';
import Input from './Input';
import style from './style.module.scss';

const Filter: React.FC = () => {
  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern: RegExp = /^[0-9\s]+$/;
    if (pattern.test(e.target.value)) {
      e.target.value = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      console.log(e.target.name, e.target.value);
    } else {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  const isChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.checked);
  };

  const quantityProdacts = useAppSelector(getQuantityProducts);

  return (
    <div className={style.filter}>
      <p className={style.quont}>Товаров {quantityProdacts}</p>
      <h1>Камеры</h1>
      <form>
        <p className={style.price}>Цена, ₽</p>
        <div className={style.inputs}>
          <Input name="minprice" defaultValue="0" changeFilter={changeFilter} />
          <Input
            defaultValue="499 000"
            name="maxprice"
            changeFilter={changeFilter}
          />
        </div>
        <p className={style.price}>Бренд</p>
        <Checkbox name="canon" title="Canon" isChecked={isChecked} />
        <Checkbox name="nikon" title="Nikon" isChecked={isChecked} />
      </form>
    </div>
  );
};

export default Filter;
