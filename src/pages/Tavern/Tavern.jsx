import React from 'react'
import { TavernStyle } from './Tavern.styled'

import BackBtn from '../../assets/img/icons/Go-back.svg'
import { NavLink } from 'react-router-dom'

export const Tavern = () => {
  return (
    <div className='container-login'>
        <TavernStyle>
            <NavLink to={'/map'} className="back__btn">
                <img src={BackBtn} alt="arrow ic" />
                To Map
            </NavLink>
        </TavernStyle>
    </div>
  )
}
