import React from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LoginBanner } from '../Login/components/LoginBanner/LoginBanner'
import { LoginMain } from '../Login/components/LoginMain/LoginMain'
import { LoginTitle } from '../../components/LoginTitle/LoginTitle'
import { LoginFormStyle } from '../Login/components/LoginForm/LoginForm.styled'
import { ButtonForm } from '../../components/ButtonForm/ButtonForm'
import { InputVerification } from '../../components/InputVerification/InputVerification'

export const RestoreCode = () => {

  return (
    <div className="container-main-pages">
        <LoginContainer>
            <LoginBanner/>
            <LoginMain>

                <LoginTitle arrow={true} title={'Enter Code'} desc={"We've sent an OTP verification code to your email. Kindly input it here."}/>

                <LoginFormStyle >

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
