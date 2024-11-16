import React from 'react'

export const Button = ({type, id, text}) => {
  return (
    <button type={type} id={id}>
              {text}
            </button>
  )
}