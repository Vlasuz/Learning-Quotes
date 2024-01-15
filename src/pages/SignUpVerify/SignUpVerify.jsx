import React, { useState } from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LoginBanner } from '../Login/components/LoginBanner/LoginBanner'
import { LoginMain } from '../Login/components/LoginMain/LoginMain'
import { LoginTitle } from '../../components/LoginTitle/LoginTitle'
import { LoginFormStyle } from '../Login/components/LoginForm/LoginForm.styled'
import { InputVerification } from '../../components/InputVerification/InputVerification'
import { ButtonForm } from '../../components/ButtonForm/ButtonForm'
import { useNavigate } from 'react-router-dom'

export const SignUpVerify = () => {
    const [verification] = useState(['', '', '', '', '', '',])
    const [status] = useState('success');
    const navigate = useNavigate();

    const submitForm = (evt) => {
        evt.preventDefault();
        setTimeout(() => {
            if (status === 'success') {
                console.log('code for verify success', verification);
                navigate('/choose-lang')
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

                <LoginTitle arrow={true} title={'Enter Code'} desc={"We've sent an OTP verification code to your email. Kindly input it here."}/>

                <LoginFormStyle onSubmit={submitForm}>

                    <div className="form__input__buttons form__input__buttons_mar">
                        
                        <InputVerification />

                        <ButtonForm buttonTxt={'Verify'} isFill={true}/>

                    </div>

                </LoginFormStyle>
            </LoginMain>
        </LoginContainer>
    </div>
  )
}
