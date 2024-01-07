import React from 'react'
import { NavigationQuestStyle } from './NavigationQuest.styled'

import ArrowIc from '../../assets/img/icons/Go-back-black.svg'
import { NavLink } from 'react-router-dom'

export const NavigationQuest = ({nextPage, prevPage}) => {
  return (
    <NavigationQuestStyle>
        <NavLink to={`${prevPage}`}>
            <img src={ArrowIc} alt="arrow lft ic" />
            Back
        </NavLink>
        <NavLink to={nextPage}>
            Next
            <img className='arrow__next' src={ArrowIc} alt="arrow rht ic" />
        </NavLink>
    </NavigationQuestStyle>
  )
}
