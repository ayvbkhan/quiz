import React from 'react'

import styles from "./Button.module.css"

export const Button = ({type="button", id, text, disabled}) => {
  return (
    <button type={type} id={id} disabled={disabled} className={styles.buttonStyle}> 
              {text}
            </button>
  )
}