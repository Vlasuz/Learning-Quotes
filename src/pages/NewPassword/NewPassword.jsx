import React, { useState } from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LoginBanner } from '../Login/components/LoginBanner/LoginBanner'
import { LoginMain } from '../Login/components/LoginMain/LoginMain'
import { LoginTitle } from '../../components/LoginTitle/LoginTitle'
import { LoginFormStyle } from '../Login/components/LoginForm/LoginForm.styled'
import { Input } from '../../components/Input/Input'
import { ButtonForm } from '../../components/ButtonForm/ButtonForm'
import { useNavigate } from 'react-router-dom'

export const NewPassword = () => {
    const [pass, setPass] = useState('');
    const [status] = useState('success');
    const navigate = useNavigate();

    const submitForm = (evt) => {
        evt.preventDefault();
        setTimeout(() => {
            if (status === 'success') {
                // resetForm();
                console.log('email for restore success', { pass });
                navigate('/login')
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

                <LoginTitle arrow={true} title={'Restore password'} />

                <LoginFormStyle onSubmit={submitForm}>

                    <Input type={'password'} label={'Enter Password'} inputValue={setPass} placeholder={'Enter your Password'}/>
                    <Input type={'password'} label={'Repeat Password'} inputValue={setPass} placeholder={'Repeat Password'}/>

                    <div className="form__input__buttons form__input__buttons_mar">

                        <ButtonForm buttonTxt={'Send Code'} isFill={true}/>

                    </div>

                </LoginFormStyle>
            </LoginMain>
        </LoginContainer>
    </div>
  )
}
