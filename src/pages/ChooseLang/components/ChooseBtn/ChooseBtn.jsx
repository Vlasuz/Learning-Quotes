import React from 'react'
import { ChooseBtnStyle } from './ChooseBtn.styled'
import { NavLink } from 'react-router-dom'

export const ChooseBtn = ({choose}) => {
  return (
    <ChooseBtnStyle>
        <NavLink to={'/map'}>
            {choose}
        </NavLink>
    </ChooseBtnStyle>
  )
}
