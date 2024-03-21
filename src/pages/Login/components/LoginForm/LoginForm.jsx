import React, { useState } from 'react'
import { LoginFormStyle } from './LoginForm.styled'
import { NavLink, useNavigate } from 'react-router-dom'
import { Input } from '../../../../components/Input/Input'
import { ButtonForm } from '../../../../components/ButtonForm/ButtonForm'
import axios from 'axios'
import { getApiLink } from '../../../../api/getApiLink'

import Apple from '../../../../assets/img/icons/apple.svg'
import Facebook from '../../../../assets/img/icons/facebook.svg'
import Google from '../../../../assets/img/icons/google.svg'
import Discord from '../../../../assets/img/icons/discord.svg'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../../redux/toolkitSlice'
import setCookie from '../../../../functions/setCookie'


export const LoginForm = () => {
    const [disabled, setDisabled] = useState(false);
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const rememberMeChange = () => {
        setRememberMe(!rememberMe);
    }

    const submitForm = (evt) => {
        evt.preventDefault();
        setDisabled(true);
        setError('');

        axios.post(getApiLink(`/api/auth/login?email=${email}&password=${pass}`))
        .then(({data}) => {
            console.log(data);
            resetForm();
            setCookie('token', data.access_token);
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;            
            axios.get(getApiLink('/api/user/me'))
                .then(({data}) => {
                    console.log('user-data', data);
                    dispatch(setUser(data));
                    navigate('/map');
                })
                .catch((error) => {
                    console.error("Failed to fetch user data:", error);
                })
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const resetForm = () => {
        setEmail('');
        setPass('');
        setRememberMe(false)
    }

  return (
    <LoginFormStyle onSubmit={submitForm}>
        <p>{error}</p>
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
            <NavLink to={'/restore-password'} type='button' className='forgot'>
                Forgot Password?
            </NavLink>
        </div>
        <div className="form__input__buttons">
            <ButtonForm buttonTxt={'Log In'} isFill={true} disabled={disabled}/>
            
            <NavLink className='navlink' to={'/sign-up'}>
                <ButtonForm buttonTxt={'Sign Up'} isFill={false}/>
            </NavLink>

        </div>
        <div className="form__input__pay">
            <h3>
                Continue with social network
            </h3>
            <ul>
                <li>
                    <a href="foo">
                        <img src={Google} alt="google ic" />
                        Google
                    </a>
                </li>
                <li>
                    <a href="foo">
                        <img src={Apple} alt="apple ic" />
                        Apple
                    </a>
                </li>
                <li>
                    <a href="foo">
                        <img src={Facebook} alt="faceboock ic" />
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="foo">
                        <img src={Discord} alt="discord ic" />
                        Discord
                    </a>
                </li>
            </ul>
        </div>
    </LoginFormStyle>
  )
}
