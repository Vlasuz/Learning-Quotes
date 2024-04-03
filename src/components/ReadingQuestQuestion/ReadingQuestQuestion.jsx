import React from 'react'
import { ReadingQuestQuestionStyle } from './ReadingQuestQuestion.styled'

export const ReadingQuestQuestion = ({ testTitle, testQuestion }) => {
  return (
    <ReadingQuestQuestionStyle>
        <h2>
            {testTitle} <span>1</span>
        </h2>
              <p>
                {testQuestion}
              </p>
    </ReadingQuestQuestionStyle>
  )
}
