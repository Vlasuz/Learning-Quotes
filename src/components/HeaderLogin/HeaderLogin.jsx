import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLoginStyle } from './HeaderLogin.styled'
import { LoginSuccess } from './components/LoginSuccess/LoginSuccess'

export const HeaderLogin = () => {

  return (
    <div className='container-login' style={{position: 'relative', zIndex: '10'}}>
        <HeaderLoginStyle className='animate__animated animate__fadeInDown'>
          <NavLink to={'/map'}>
              <h2>
                  Language Quests
              </h2>
          </NavLink>

          <LoginSuccess/>

        </HeaderLoginStyle>
    </div>
  )
}
