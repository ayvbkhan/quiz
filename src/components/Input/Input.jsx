import React, { useContext, forwardRef } from 'react';
import styles from "./Input.module.css";
import { ThemeContext } from '../../context';
import classNames from 'classnames';

export const Input = forwardRef(({ type, name, id, placeholder, pattern, ...props }, ref) => {
  const { theme } = useContext(ThemeContext);

  return (
    <input
      ref={ref} 
      required
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      pattern={pattern}
      className={classNames(styles.inputStyle, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark'
      })}
      {...props}
    />
  );
});
