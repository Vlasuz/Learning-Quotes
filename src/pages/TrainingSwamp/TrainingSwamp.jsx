import React from 'react'
import { ReadingQuestStyle } from '../../components/ReadingQuest/ReadingQuest.styled'
import { TrainingSwampCard } from './components/TrainingSwampCard/TrainingSwampCard'

export const TrainingSwamp = () => {
   
  return (
    <div className='container-login'>
      <ReadingQuestStyle>
        <div className="card_page">

        <TrainingSwampCard/>
        </div>


      </ReadingQuestStyle>
    </div>
  )
}
