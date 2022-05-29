import React from 'react';
import bird from 'assets/icons/bird.png';
import style from './style.module.scss';

interface ICheckboxProps {
  name: string;
  title: string;
  // eslint-disable-next-line no-unused-vars
  isChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({ name, isChecked, title }) => {
  return (
    <div className={style.check}>
      <div className={style.container}>
        <input type="checkbox" name={name} onChange={isChecked} />
        <img src={bird} alt="checked" />
      </div>
      <p>{title}</p>
    </div>
  );
};
export default Checkbox;
