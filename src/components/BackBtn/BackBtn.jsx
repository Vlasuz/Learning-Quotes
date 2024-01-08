import React from 'react'
import { BackBtnStyle } from './BackBtn.styled'

import GoBack from '../../assets/img/icons/Go-back-black.svg' 
import { NavLink } from 'react-router-dom'

export const BackBtn = ({link}) => {
  return (
    <BackBtnStyle>
        <NavLink to={`${link}`} className='back'>
            <img src={GoBack} alt="arrow ic" />
            Back
        </NavLink>
    </BackBtnStyle>
  )
}
