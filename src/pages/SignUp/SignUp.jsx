import React, { useState } from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LoginBanner } from '../Login/components/LoginBanner/LoginBanner'
import { LoginMain } from '../Login/components/LoginMain/LoginMain'
import { LoginTitle } from '../../components/LoginTitle/LoginTitle'
import { LoginFormStyle } from '../Login/components/LoginForm/LoginForm.styled'
import { Input } from '../../components/Input/Input'
import { ButtonForm } from '../../components/ButtonForm/ButtonForm'
import { NavLink, useNavigate } from 'react-router-dom'

export const SignUp = () => {
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status] = useState('success');
    const navigate = useNavigate();

    const submitForm = (evt) => {
        evt.preventDefault();
        setTimeout(() => {
            if (status === 'success') {
                // resetForm();
                console.log('email for restore success', { name, email, pass, repeatPass });
                navigate('/sign-up-verify')
            } else if (status === 'wrong_pass') {
                console.log('your pass is wrong!');
                // сюда функц с красніми полями
            }
        }, 1000); 
    }
  return (
    <div className="container-main-pages">
        <LoginContainer>
            <LoginBanner/>
            <LoginMain>
              <LoginTitle title={'Sign Up'} desc={'Please enter your information below in order to  create your account.'}/>
              <LoginFormStyle onSubmit={submitForm}>

                <Input type={'text'} label={'Name'} inputValue={setName} placeholder={'Enter your Name'}/>
                <Input type={'email'} label={'Email Address'} inputValue={setEmail} placeholder={'Enter your Email'}/>
                <Input type={'password'} label={'Enter Password'} inputValue={setPass} placeholder={'Enter your Password'}/>
                <Input type={'password'} label={'Repeat Password'} inputValue={setRepeatPass} placeholder={'Repeat your Password'}/>

                <div className="form__input__buttons form__input__buttons_mar">

                        <ButtonForm buttonTxt={'Sign Up'} isFill={true}/>
                        
                        <NavLink className='navlink' to={'/login'}>
                            <ButtonForm buttonTxt={'Login'} isFill={false}/>
                        </NavLink>

                    </div>
              
              </LoginFormStyle>
            </LoginMain>
        </LoginContainer>
    </div>
  )
}
