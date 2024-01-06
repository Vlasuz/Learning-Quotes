import React from 'react'
import { QuestTxtStyle } from './QuestTxt.styled'

import VocabularyPh from '../../assets/img/vocabulary.png'

export const QuestTxt = ({questTitle, questTask}) => {
  return (
    <QuestTxtStyle>
        <h2>
            {questTitle}
        </h2>
        <p>
            {questTask}
        </p>
        <div className="vocabulary">
            <img src={VocabularyPh} alt="book ph" />
            <p>
                Vocabulary
            </p>
        </div>
    </QuestTxtStyle>
  )
}
