import React, { useState } from 'react'
import { LoginContainer } from '../Login/Login.styled'
import { LoginBanner } from '../Login/components/LoginBanner/LoginBanner'
import { LoginMain } from '../Login/components/LoginMain/LoginMain'
import { LoginTitle } from '../../components/LoginTitle/LoginTitle'
import { LoginFormStyle } from '../Login/components/LoginForm/LoginForm.styled'
import { Input } from '../../components/Input/Input'
import { ButtonForm } from '../../components/ButtonForm/ButtonForm'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'

export const SignUp = () => {
    const [pass, setPass] = useState('');
    // const [repeatPass, setRepeatPass] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    // const [status] = useState('success');
    const navigate = useNavigate();
    
    const resetForm = () => {
        setEmail('');
        setPass('');
    }
    
    const submitForm = (evt) => {
        evt.preventDefault();

        axios.post(getApiLink(`/api/auth/sign_up?name=${name}&email=${email}&password=${pass}`))
            .then(({data}) => {
                console.log(data);
                resetForm();
                navigate('/choose-lang')
            })
            .catch((error) => {
                console.log(error);
            })
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
                {/* <Input type={'password'} label={'Repeat Password'} inputValue={setRepeatPass} placeholder={'Repeat your Password'}/> */}

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
