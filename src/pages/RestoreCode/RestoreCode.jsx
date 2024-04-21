import React, { useState } from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LoginBanner } from '../Login/components/LoginBanner/LoginBanner'
import { LoginMain } from '../Login/components/LoginMain/LoginMain'
import { LoginTitle } from '../../components/LoginTitle/LoginTitle'
import { LoginFormStyle } from '../Login/components/LoginForm/LoginForm.styled'
import { ButtonForm } from '../../components/ButtonForm/ButtonForm'
import { InputVerification } from '../../components/InputVerification/InputVerification'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import getCookie from '../../functions/getCookie'
import { toast } from 'react-toastify'
import { VerifiAgain } from './VerifiAgain/VerifiAgain'
import setCookie from '../../functions/setCookie'

export const RestoreCode = () => {
    const [verification, setVerification] = useState(['', '', '', '', '', '']);
    const navigate = useNavigate();
    const userEmail = getCookie('email');
    
    const submitForm = (evt) => {
        evt.preventDefault();

        const code = verification.join('');
        console.log(code);


        axios.post(getApiLink(`/api/user/check_reset_code?email=${userEmail}&code=886958`))
            .then(({data}) => {
                console.log(data);
                if (data === false) {
                    toast.error("what's happened. please try again")
                } else { 
                    setCookie('restoreCode', '886958' )
                    navigate('/new-password')
                }
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

                <LoginTitle link={'/restore-password'} arrow={true} title={'Enter Code'} desc={"We've sent an OTP verification code to your email. Kindly input it here."}/>

                    <LoginFormStyle>

                        <div className="form__input__buttons form__input__buttons_mar">
                            
                            <InputVerification verification={verification} setVerification={setVerification}/>

                            <VerifiAgain/>

                            <ButtonForm submitForm={submitForm} buttonTxt={'Verify'} isFill={true}/>

                        </div>

                    </LoginFormStyle>
                    
            </LoginMain>
        </LoginContainer>
    </div>
  )
}
