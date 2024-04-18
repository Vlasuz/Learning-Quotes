import React from 'react'
import { KeywordsQuestionStyle } from './KeywordsQuestion.styled'

export const KeywordsQuestion = ({ questTitle }) => {
  return (
    <KeywordsQuestionStyle className='animate__animated animate__fadeInLeft'>
        <h2>
            {questTitle}
        </h2>

        <ul>
            <li>
                <p>
                    Word
                </p>
                <input type="text" />
            </li>
            <li>
                <p>
                    Word
                </p>
                <input type="text" />
            </li>
            <li>
                <p>
                    Word
                </p>
                <input type="text" />
            </li>
            <li>
                <p>
                    Word
                </p>
                <input type="text" />
            </li>
            <li>
                <p>
                    Word
                </p>
                <input type="text" />
            </li>
            <li>
                <p>
                    Word
                </p>
                <input type="text" />
            </li>
        </ul>

    </KeywordsQuestionStyle>
  )
}
