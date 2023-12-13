import React, { useState } from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LoginBanner } from '../Login/components/LoginBanner/LoginBanner'
import { LoginMain } from '../Login/components/LoginMain/LoginMain'
import { LoginTitle } from '../../components/LoginTitle/LoginTitle'
import { Input } from '../../components/Input/Input'
import { LoginFormStyle } from '../../pages/Login/components/LoginForm/LoginForm.styled.js'
import { ButtonForm } from '../../components/ButtonForm/ButtonForm'
import { useNavigate } from 'react-router-dom'

export const RestorePassword = () => {
    const [email, setEmail] = useState('');
    const [status] = useState('success');
    const navigate = useNavigate();

    const submitForm = (evt) => {
        evt.preventDefault();
        setTimeout(() => {
            if (status === 'success') {
                // resetForm();
                console.log('login success', { email });
                navigate('/restore-password-code')
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

                <LoginTitle arrow={true} title={'Restore password'} desc={'Enter your email for restore'}/>

                <LoginFormStyle onSubmit={submitForm}>

                    <Input type={'email'} label={'Email Address'} inputValue={setEmail} placeholder={'Enter your Email'}/>

                    <div className="form__input__buttons form__input__buttons_mar">

                        <ButtonForm buttonTxt={'Send Code'} isFill={true}/>

                    </div>

                </LoginFormStyle>
            </LoginMain>
        </LoginContainer>
    </div>
  )
}
