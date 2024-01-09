import React from 'react'
import { ReadingQuestQuestionStyle } from './ReadingQuestQuestion.styled'

export const ReadingQuestQuestion = ({ testQuestion, testTitle, testNumber }) => {
  return (
    <ReadingQuestQuestionStyle>
        <h2>
            {testTitle} <span>{testNumber}</span>
        </h2>
        <p>
            {testQuestion}
        </p>
    </ReadingQuestQuestionStyle>
  )
}
