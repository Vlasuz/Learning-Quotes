import React, { useState } from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LoginBanner } from '../Login/components/LoginBanner/LoginBanner'
import { LoginMain } from '../Login/components/LoginMain/LoginMain'
import { LoginTitle } from '../../components/LoginTitle/LoginTitle'
import { LoginFormStyle } from '../Login/components/LoginForm/LoginForm.styled'
import { Input } from '../../components/Input/Input'
import { ButtonForm } from '../../components/ButtonForm/ButtonForm'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import getCookie from '../../functions/getCookie'

export const NewPassword = () => {
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const navigate = useNavigate();
    const useEmail = getCookie('email');
    const restoreCode = getCookie('restoreCode');

    const submitForm = (evt) => {
        evt.preventDefault();
        
        if (pass !== repeatPass) {
            toast.warning("Passwords do not match");
            return;
        }

        axios.put(getApiLink(`/api/user/update_password?email=${useEmail}&code=${restoreCode}&password=${pass}&password_conf=${repeatPass}`))
            .then(({data}) => {
                console.log(data);
                navigate('/login');
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

                <LoginTitle link={'/restore-password-code'} arrow={true} title={'New Password'} />

                <LoginFormStyle onSubmit={submitForm}>

                    <Input type={'password'} label={'Enter Password'} inputValue={setPass} placeholder={'Enter your Password'}/>
                    <Input type={'password'} label={'Repeat Password'} inputValue={setRepeatPass} placeholder={'Repeat Password'}/>

                    <div className="form__input__buttons form__input__buttons_mar">

                        <ButtonForm buttonTxt={'Save Password'} isFill={true}/>

                    </div>

                </LoginFormStyle>
            </LoginMain>
        </LoginContainer>
    </div>
  )
}
