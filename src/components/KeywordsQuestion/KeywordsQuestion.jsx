import React from 'react'
import { KeywordsQuestionStyle } from './KeywordsQuestion.styled'

export const KeywordsQuestion = ({ questTitle, questWords }) => {
  return (
    <KeywordsQuestionStyle className='animate__animated animate__fadeInLeft'>
        <h2>
            {questTitle}
        </h2>

        <ul>
            {questWords.map(word => (
                <li key={word}>
                    <p>
                        {word}
                    </p>
                    <input type="text" />
                </li>
            ))}
        </ul>

    </KeywordsQuestionStyle>
  )
}
