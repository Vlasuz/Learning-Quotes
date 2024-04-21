import React, { useState } from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LoginBanner } from '../Login/components/LoginBanner/LoginBanner'
import { LoginMain } from '../Login/components/LoginMain/LoginMain'
import { LoginTitle } from '../../components/LoginTitle/LoginTitle'
import { Input } from '../../components/Input/Input'
import { LoginFormStyle } from '../../pages/Login/components/LoginForm/LoginForm.styled.js'
import { ButtonForm } from '../../components/ButtonForm/ButtonForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink.js'
import { toast } from 'react-toastify'
import setCookie from '../../functions/setCookie.js'

export const RestorePassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const submitForm = (evt) => {
        evt.preventDefault();

        axios.post(getApiLink(`/api/user/reset_password_request?email=${email}`))
            .then(({data}) => {
                console.log(data);
                navigate('/restore-password-code')
                setCookie('email', email);
            })
            .catch((err) => {
                console.error(err);
                toast.error(err?.response?.data?.detail)
            }) 
    }

  return (
    <div className="container-main-pages">
        <LoginContainer>
            <LoginBanner/>
            <LoginMain>

                <LoginTitle link={'/login'} arrow={true} title={'Restore password'} desc={'Enter your email for restore'}/>

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
