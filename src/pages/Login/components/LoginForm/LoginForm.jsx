import React, { useState } from 'react'
import { LoginFormStyle } from './LoginForm.styled'
import { NavLink } from 'react-router-dom'
import Apple from '../../../../assets/img/icons/apple.svg'
import Facebook from '../../../../assets/img/icons/facebook.svg'
import Google from '../../../../assets/img/icons/google.svg'
import Discors from '../../../../assets/img/icons/discorc.svg'
import { Input } from '../../../../components/Input/Input'
import { ButtonForm } from '../../../../components/ButtonForm/ButtonForm'


export const LoginForm = () => {
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [status] = useState('success');


    const rememberMeChange = () => {
        setRememberMe(!rememberMe);
    }

    const submitForm = (evt) => {
        evt.preventDefault();
        setTimeout(() => {
            if (status === 'success') {
                resetForm();
                console.log('login success', {
                    pass, email, rememberMe
                });
            } else if (status === 'wrong_pass') {
                console.log('your pass is wrong!');
                // сюда функц с красніми полями
            }
        }, 1000); 
    }

    const resetForm = () => {
        setEmail('');
        setPass('');
        setRememberMe(false)
    }

  return (
    <LoginFormStyle onSubmit={submitForm}>
        <div className="form__inner">

            <Input type={'email'} label={'Email Address'} inputValue={setEmail} placeholder={'Enter your Email'}/>

            <Input type={'password'} label={'Password'} inputValue={setPass} placeholder={'Enter your Password'}/>
            
        </div>
        <div className='form__input__check'>
            <div className="form__input__check_in">
                <label htmlFor="t-1">
                    Remember me
                    <input type="checkbox" id="t-1" 
                        checked={rememberMe}
                        onChange={rememberMeChange}
                    />
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M8.75 2.75L3.59375 8L1.25 5.61364" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </label>
            </div>
            <NavLink to={'/restore-password'} type='button'>
                Forgot Password?
            </NavLink>
        </div>
        <div className="form__input__buttons">

            <ButtonForm buttonTxt={'Log In'} isFill={true}/>
            
            <ButtonForm buttonTxt={'Sign Up'} isFill={false}/>

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
