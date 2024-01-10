import React from 'react'

export const ButtonForm = ({ buttonTxt, isFill, disabled }) => {

  return (
    <button disabled={disabled} className={isFill ? 'log' : 'sign'} >
        {buttonTxt}
    </button>
  )
}
