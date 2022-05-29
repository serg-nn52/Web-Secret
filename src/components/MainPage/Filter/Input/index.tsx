import React from 'react';
import style from './style.module.scss';

interface IInputProps {
  name: string;
  defaultValue?: string;
  // eslint-disable-next-line no-unused-vars
  changeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({ changeFilter, defaultValue, name }) => {
  return (
    <input
      className={style.input}
      type="text"
      name={name}
      defaultValue={defaultValue}
      onChange={changeFilter}
    />
  );
};

export default Input;
