import React from 'react'

import styles from "./Button.module.css"

export const Button = ({type="button", id, text, ...props}) => {
  return (
  <button type={type} id={id} className={styles.buttonStyle} {...props}> 
              {text}
            </button>
  )
}