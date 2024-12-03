import React, { useContext } from 'react'

import styles from "./Input.module.css"
import { ThemeContext } from '../../context';
import classNames from 'classnames';

export const Input = ({ type, name, id, placeholder, pattern, ...props }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <input
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
  )
}