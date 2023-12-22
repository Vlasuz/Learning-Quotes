import React from 'react'
import { LangNavigationStyle } from './LangNavigation.styled'
import ArrowPrev from '../../../../../../assets/img/icons/arrow-prev.svg'
import ArrowNext from '../../../../../../assets/img/icons/arrow-next.svg'

export const LangNavigation = ({prevEl, nextEl}) => {
  return (
    <LangNavigationStyle>
        <button className={prevEl}>
            <img src={ArrowPrev} alt="arrow ic" />
        </button>
        <button className={nextEl}>
            <img src={ArrowNext} alt="arrow ic" />                            
        </button>
    </LangNavigationStyle>
  )
}
