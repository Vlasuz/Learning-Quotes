import React from 'react'

export const ButtonForm = ({ buttonTxt, isFill, disabled, submitForm }) => {

  return (
    <button disabled={disabled} className={isFill ? 'log' : 'sign'} onClick={submitForm}>
        {buttonTxt}
    </button>
  )
}
