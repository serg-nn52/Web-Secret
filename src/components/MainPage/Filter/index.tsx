import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react';
import { getFilterState, getQuantityProducts } from 'store/products/selectors';
import { setBrandFilter, setPriceFilter } from 'store/products/slice';
import { getProductsFiltred } from 'store/products/thunk';
import Checkbox from './Checkbox';
import Input from './Input';
import style from './style.module.scss';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const checkedInStore = useAppSelector(getFilterState);
  const quantityProdacts = useAppSelector(getQuantityProducts);
  const filterInStore = useAppSelector(getFilterState);

  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pattern: RegExp = /^[0-9\s]+$/;
    if (pattern.test(e.target.value)) {
      e.target.value = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    } else {
      e.target.value = e.target.value.slice(0, -1);
    }
    dispatch(
      setPriceFilter({
        name: e.target.name,
        value: e.target.value.split(' ').join(''),
      }),
    );
  };

  const isChecked = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    dispatch(
      setBrandFilter({
        name: e.target.name,
        value: e.target.checked,
      }),
    );
  };

  useEffect(() => {
    dispatch(getProductsFiltred(checkedInStore));
  }, [checkedInStore, dispatch]);

  return (
    <div className={style.filter}>
      <p className={style.quont}>Товаров {quantityProdacts}</p>
      <h1>Камеры</h1>
      <form>
        <p className={style.price}>Цена, ₽</p>
        <div className={style.inputs}>
          <Input
            name="minprice"
            defaultValue={filterInStore.minprice
              .replace(/[^0-9]/g, '')
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            placeholder="0"
            changeFilter={changeFilter}
          />
          <Input
            defaultValue={filterInStore.maxprice
              .replace(/[^0-9]/g, '')
              .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            placeholder="499 000"
            name="maxprice"
            changeFilter={changeFilter}
          />
        </div>
        <p className={style.price}>Бренд</p>
        <Checkbox
          name="canon"
          title="Canon"
          isChecked={isChecked}
          checkInPast={checkedInStore!.canon}
        />
        <Checkbox
          name="nikon"
          title="Nikon"
          isChecked={isChecked}
          checkInPast={checkedInStore!.nikon}
        />
      </form>
    </div>
  );
};

export default Filter;
