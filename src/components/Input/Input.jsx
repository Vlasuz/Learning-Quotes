import React, { useState } from 'react'

import Letter from '../../assets/img/icons/Letter.svg'
import Lock from '../../assets/img/icons/Lock.svg'
import User from '../../assets/img/icons/User.svg'

export const Input = ({type, label, placeholder, inputValue}) => {

    const [value, setValue] = useState('')

    const handleValue = (evt) => {
        setValue(evt.target.value);
        inputValue(evt.target.value);
    }



    const types = {
        email: {
            icon: Letter,
        },
        password: {
            icon: Lock,
        },
        text: {
            icon: User,
        }
    }

  return (
    <div className='form__input__con'>
        <div className="input__img">
        <label>{label}
            <input
                placeholder={placeholder}
                type={type}
                // id={type}
                value={value}
                onChange={handleValue}
                required
            />
        </label>
            <img src={types[type].icon} alt="mail or pass or user icons" />
        </div>
    </div>
  )
}