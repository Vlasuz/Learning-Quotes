import React, { useState } from 'react'

import Letter from '../../assets/img/icons/Letter.svg'
import Lock from '../../assets/img/icons/Lock.svg'
import User from '../../assets/img/icons/User.svg'

export const Input = ({type, label, placeholder, inputValue}) => {
    const [error, setError] = useState('');
    const [value, setValue] = useState('');

    const handleValue = (evt) => {
        const inputTargetValue = evt.target.value;
        
        setValue(inputTargetValue);
        inputValue(inputTargetValue);

        if (type === 'email') {
            const emailRegex = /^[^\s@]+@[a-zA-Z0-9\-_.]+\.[a-z]{2,6}$/;
            const isValidEmail = emailRegex.test(value);
        
            if (!isValidEmail) {
                setError('Please enter a valid email address');
            } else {
                setError('');
            }
        }
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
                id={type}
                value={value}
                onChange={handleValue}
                required
            />
        </label>
            <img src={types[type].icon} alt="mail or pass or user icons" />
        </div>

        {error && <span>{error}</span>}
    </div>
  )
}