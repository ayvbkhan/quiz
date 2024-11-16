import React from 'react'

export const Input = ({type, name, id, placeholder, pattern}) => {
  return (
    <input
      required
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      pattern={pattern}
    />
  )
}


// required
//                 type="text"
//                 name="username"
//                 id="username"
//                 placeholder="Ваш ответ"