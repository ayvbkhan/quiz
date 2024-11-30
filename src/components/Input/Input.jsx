import React from 'react'

import styles from "./Input.module.css"

export const Input = ({ type, name, id, placeholder, pattern, ...props }) => {
  return (
    <input
      required
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      pattern={pattern}
      className={styles.buttonStyle}
      {...props}
    />
  )
}