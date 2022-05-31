import React from 'react';
import birdAlt from 'assets/icons/bird_alt.svg';
import style from './style.module.scss';

interface ICheckboxProps {
  name: string;
  title: string;
  isChecked: boolean;
  // eslint-disable-next-line no-unused-vars
  checked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  name,
  checked,
  title,
  isChecked,
}) => {
  return (
    <div className={style.check}>
      <div className={style.container}>
        <input
          type="checkbox"
          name={name}
          onChange={checked}
          checked={isChecked}
        />
        <img src={birdAlt} alt="checked" />
      </div>
      <p>{title}</p>
    </div>
  );
};
export default Checkbox;
