import React from 'react'
import { NavigationQuestStyle } from './NavigationQuest.styled'

import ArrowIc from '../../assets/img/icons/Go-back-black.svg'

export const NavigationQuest = ({nextPage, prevPage, Styles, isLastQuestion, handleEndQuest}) => {
  return (
    <NavigationQuestStyle style={Styles}>
        {/* <button onClick={prevPage}>
            <img src={ArrowIc} alt="arrow lft ic" />
            Back
        </button> */}
        {isLastQuestion ? (
          <button className='arrows' onClick={handleEndQuest}>
            Finish
            <img className='arrow__next' src={ArrowIc} alt="arrow rht ic" />
          </button>
        ) : (
          <button className='arrows' onClick={nextPage}>
            Next
            <img className='arrow__next' src={ArrowIc} alt="arrow rht ic" />
          </button>
        )}
    </NavigationQuestStyle>
  )
}
