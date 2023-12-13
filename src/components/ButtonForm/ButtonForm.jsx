import React from 'react'

export const ButtonForm = ({buttonTxt, isFill}) => {
  return (
    <button className={isFill ? 'log' : 'sign'} >
        {buttonTxt}
    </button>
  )
}
