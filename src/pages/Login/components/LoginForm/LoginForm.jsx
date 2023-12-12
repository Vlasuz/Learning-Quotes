import React, { useState } from 'react'
import { LoginFormStyle } from './LoginForm.styled'
import Letter from '../../../../assets/img/icons/Letter.svg'
import Lock from '../../../../assets/img/icons/Lock.svg'
import Apple from '../../../../assets/img/icons/apple.svg'
import Facebook from '../../../../assets/img/icons/facebook.svg'
import Google from '../../../../assets/img/icons/google.svg'
import Discors from '../../../../assets/img/icons/discorc.svg'


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
            <div className="form__input__check_in">
                <input
                    type="checkbox"
                    id="rememberMe"
                    //   checked={rememberMe}
                    //   onChange={handleRememberMeChange}
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button type='button'>
                Forgot Password?
            </button>
        </div>
        <div className="form__input__buttons">
            <button className='log' type="submit">
                Log In
            </button>
            <button className='sign' type="button">
                Sign Up
            </button>
        </div>
        <div className="form__input__pay">
            <h3>
                Continue with social network
            </h3>
            <ul>
                <li>
                    <a href="foo">
                        <img src={Google} alt="google" />
                        Google
                    </a>
                </li>
                <li>
                    <a href="foo">
                        <img src={Apple} alt="apple" />
                        Apple
                    </a>
                </li>
                <li>
                    <a href="foo">
                        <img src={Facebook} alt="faceboock" />
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="foo">
                        <img src={Discors} alt="discors" />
                        Discors
                    </a>
                </li>
            </ul>
        </div>
    </LoginFormStyle>
  )
}
