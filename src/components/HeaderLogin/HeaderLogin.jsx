import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLoginStyle } from './HeaderLogin.styled'
import { LoginButtons } from './components/LoginButtons/LoginButtons'
import { LoginSuccess } from './components/LoginSuccess/LoginSuccess'

export const HeaderLogin = () => {

  return (
    <div className='container-login'>
        <HeaderLoginStyle>
            <NavLink to={'/'}>
                <h2>
                    Language Quests
                </h2>
            </NavLink>

            {
                window.location.href.includes('quiz-start') ? <LoginSuccess/> : <LoginButtons/>
            }

        </HeaderLoginStyle>
    </div>
  )
}
