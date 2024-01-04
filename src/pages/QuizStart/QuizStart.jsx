import React from 'react'
import { QuizStartStyle } from './QuizStart.styled'
import { BackBtn } from '../../components/BackBtn/BackBtn'

export const QuizStart = () => {
  return (
    <div className='container-login'>
        <QuizStartStyle>

            <BackBtn link={'/some'}/>
            
        </QuizStartStyle>
    </div>
  )
}
