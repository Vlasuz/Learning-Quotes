import React from 'react'
import { NavigationQuestStyle } from './NavigationQuest.styled'

import ArrowIc from '../../assets/img/icons/Go-back-black.svg'
import { NavLink } from 'react-router-dom'

export const NavigationQuest = ({nextPage, prevPage}) => {
  return (
    <NavigationQuestStyle>
        <button onClick={prevPage}>
            <img src={ArrowIc} alt="arrow lft ic" />
            Back
        </button>
        <button onClick={nextPage}>
            Next
            <img className='arrow__next' src={ArrowIc} alt="arrow rht ic" />
        </button>
    </NavigationQuestStyle>
  )
}
