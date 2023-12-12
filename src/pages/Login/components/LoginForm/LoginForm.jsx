import React, { useState } from 'react'
import { LoginFormStyle } from './LoginForm.styled'
import Letter from '../../../../assets/img/icons/Letter.svg'
import Lock from '../../../../assets/img/icons/Lock.svg'

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const inputEmail = (evt) => {
        setEmail(evt.target.value);
    }

    const inputPass = (evt) => {
        setPass(evt.target.value);
    }

  return (
    <LoginFormStyle>
        <div className="form__inner">
            <div className='form__input__con'>
                <label htmlFor="email">Email Address</label>
                <div className="input__img">
                    <input
                        placeholder='Enter your Email'
                        type="email"
                        id="email"
                        value={email}
                        onChange={inputEmail}
                        required
                    />
                    <img src={Letter} alt="mail icon" />
                </div>
            </div>
            <div className='form__input__con'>
                <label htmlFor="password">Password</label>
                <div className="input__img">
                    <input
                        placeholder='Enter your Password'
                        type="password"
                        id="password"
                        value={pass}
                        onChange={inputPass}
                        required
                    />
                    <img src={Lock} alt="password icon" />
                </div>
            </div>
        </div>
        <div className='form__input__check'>
            <input
            type="checkbox"
            id="rememberMe"
            //   checked={rememberMe}
            //   onChange={handleRememberMeChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit">Log In</button>
        <button type="button">Sign Up</button>
    </LoginFormStyle>
  )
}
