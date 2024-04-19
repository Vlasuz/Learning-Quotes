import React from 'react'
import { ReadingQuestQuestionStyle } from './ReadingQuestQuestion.styled'

export const ReadingQuestQuestion = ({ testTitle, testQuestion, numQuest }) => {
  return (
    <ReadingQuestQuestionStyle>
        <h2>
            {testTitle} <br /> <span>{`Question № ${numQuest}`}</span>
        </h2>
              <p>
                {testQuestion}
              </p>
    </ReadingQuestQuestionStyle>
  )
}
